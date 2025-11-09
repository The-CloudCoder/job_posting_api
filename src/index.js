require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');
const Job = require('./models/Job');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Connect MongoDB
connectDB(process.env.MONGO_URI || 'mongodb://localhost:27017/job_postings');

// ✅ Serve static files (logos, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));


// ✅ API routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/jobs', require('./routes/jobs'));

// ✅ Root route
app.get('/', (req, res) => res.send('Job Posting API running'));

// ✅ Admin job list route
app.get('/admin/jobs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});
// ✅ Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`✅ Server started on port ${PORT}`));
