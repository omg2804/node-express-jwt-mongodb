```javascript
const express = require('express');
const mongoose = require('mongoose');
const { connectDB } = require('./config');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes.router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
```