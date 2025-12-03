// public/app.js
// Vanilla JS to talk with the API and keep the items list in sync.

const healthButton = document.getElementById('check-health');
const healthResult = document.getElementById('health-result');
const itemsList = document.getElementById('items-list');
const newItemForm = document.getElementById('new-item-form');
const newItemInput = document.getElementById('new-item-input');

// Helper: render items list
function renderItems(items) {
  itemsList.innerHTML = '';

  if (!items || items.length === 0) {
    const empty = document.createElement('p');
    empty.textContent = 'No items yet. Add your first task above.';
    empty.style.fontSize = '0.9rem';
    empty.style.color = '#6b7280';
    itemsList.appendChild(empty);
    return;
  }

  items.forEach((item) => {
    const row = document.createElement('li');
    row.className = 'item-row';

    const main = document.createElement('div');
    main.className = 'item-main';

    // Checkbox for "done"
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'item-checkbox';
    checkbox.checked = !!item.done;
    checkbox.addEventListener('change', async () => {
      try {
        await updateItem(item.id, { done: checkbox.checked });
      } catch (err) {
        console.error(err);
        checkbox.checked = !checkbox.checked; // rollback visually
        alert('Error updating item status. See console for details.');
      }
    });

    // Name text
    const nameSpan = document.createElement('span');
    nameSpan.className = 'item-name' + (item.done ? ' item-name--done' : '');
    nameSpan.textContent = `${item.id}. ${item.name}`;

    main.appendChild(checkbox);
    main.appendChild(nameSpan);

    // Action buttons container
    const actions = document.createElement('div');
    actions.className = 'item-actions';

    // Edit button
    const editBtn = document.createElement('button');
    editBtn.type = 'button';
    editBtn.textContent = 'Edit';
    editBtn.className = 'btn-secondary';
    editBtn.addEventListener('click', async () => {
      const current = item.name;
      const next = window.prompt('Edit item name:', current);
      if (next === null) {
        return; // cancelled
      }
      const trimmed = next.trim();
      if (!trimmed) {
        alert('Name cannot be empty.');
        return;
      }
      try {
        await updateItem(item.id, { name: trimmed });
      } catch (err) {
        console.error(err);
        alert('Error editing item. See console for details.');
      }
    });

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'btn-danger';
    deleteBtn.addEventListener('click', async () => {
      const ok = window.confirm('Delete this item?');
      if (!ok) return;
      try {
        await deleteItem(item.id);
      } catch (err) {
        console.error(err);
        alert('Error deleting item. See console for details.');
      }
    });

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    row.appendChild(main);
    row.appendChild(actions);

    itemsList.appendChild(row);
  });
}

// Load items from API
async function loadItems() {
  try {
    const res = await fetch('/api/items');
    if (!res.ok) {
      throw new Error('Failed to fetch items');
    }
    const data = await res.json();
    renderItems(data);
  } catch (err) {
    console.error(err);
    alert('Error loading items – check the console.');
  }
}

// Update item via PATCH
async function updateItem(id, changes) {
  const res = await fetch(`/api/items/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(changes)
  });

  if (!res.ok) {
    throw new Error('Failed to update item');
  }

  await loadItems();
}

// Delete item via DELETE
async function deleteItem(id) {
  const res = await fetch(`/api/items/${id}`, {
    method: 'DELETE'
  });

  if (!res.ok && res.status !== 204) {
    throw new Error('Failed to delete item');
  }

  await loadItems();
}

// Health check click handler
healthButton.addEventListener('click', async () => {
  healthButton.disabled = true;
  healthResult.textContent = 'Checking...';

  try {
    const res = await fetch('/api/health');
    const data = await res.json();
    healthResult.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    console.error(err);
    healthResult.textContent = 'Error – check console for details.';
  } finally {
    healthButton.disabled = false;
  }
});

// Handle new item form submit
newItemForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const name = newItemInput.value.trim();
  if (!name) return;

  try {
    const res = await fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name })
    });

    if (!res.ok) {
      throw new Error('Failed to create item');
    }

    newItemInput.value = '';
    await loadItems();
  } catch (err) {
    console.error(err);
    alert('Error creating item – check console.');
  }
});

// Initial load
loadItems();
