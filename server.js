// server.js
// Simple Express server for Full Stack Project 2.
// - Serves a small frontend from /public
// - Exposes example API routes with basic in-memory CRUD
// - Ready for deployment to Render with environment variables

require('dotenv').config(); // Load variables from .env in local development

const express = require('express');
const path = require('path');
const cors = require('cors');          // 🔹 NEW: import cors

const app = express();

// Read PORT from environment variables, default to 3000 for local dev
const PORT = process.env.PORT || 3000;

// NOTE: DATABASE_URL is not used in this example, but we read it to show how env works.
// In your own project you would use this to connect to a real database.
const DATABASE_URL = process.env.DATABASE_URL || 'not-configured';

// 🔹 NEW: enable CORS for all origins (ok for school project)
app.use(cors());

// Middleware to parse JSON bodies for API routes
app.use(express.json());

// Serve static frontend files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Simple in-memory example data (instead of a real database).
// Restarting the server will reset this data.
let items = [
  { id: 1, name: 'Buy new Laptop', done: false }
];

// Health check endpoint – useful for Render and for you to test quickly
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'API is running',
    env: process.env.NODE_ENV || 'development'
  });
});

// GET all items
app.get('/api/items', (req, res) => {
  res.json(items);
});

// POST a new item
app.post('/api/items', (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  const newItem = {
    id: items.length > 0 ? Math.max(...items.map((it) => it.id)) + 1 : 1,
    name,
    done: false
  };

  items.push(newItem);
  res.status(201).json(newItem);
});

// PATCH /api/items/:id – update name or done status
app.patch('/api/items/:id', (req, res) => {
  const id = Number(req.params.id);
  const { name, done } = req.body;

  const item = items.find((it) => it.id === id);
  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }

  if (typeof name === 'string' && name.trim() !== '') {
    item.name = name.trim();
  }

  if (typeof done === 'boolean') {
    item.done = done;
  }

  res.json(item);
});

// DELETE /api/items/:id – remove item
app.delete('/api/items/:id', (req, res) => {
  const id = Number(req.params.id);
  const existingLength = items.length;
  items = items.filter((it) => it.id !== id);

  if (items.length === existingLength) {
    return res.status(404).json({ error: 'Item not found' });
  }

  res.status(204).send();
});

// Fallback route for unknown API paths
app.use('/api', (req, res) => {
  res.status(404).json({ error: 'API endpoint not found' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log('Remember to keep DATABASE_URL and other secrets only in .env or Render Environment.');
});
