const express = require('express');
const app = express();           // ← this line creates the 'app' variable

// Important middleware (add these early)
app.use(express.json());         // so the server can read JSON request bodies
app.use(express.urlencoded({ extended: true }));

// ───────────────────────────────────────────────
//   YOUR ROUTES GO HERE (the lines you already have)
// ───────────────────────────────────────────────

// Only uncomment a route if the corresponding file ALREADY exists
// Otherwise you'll get "Cannot find module" error

// app.use('/api/v1/programs', require('./routes/programRoutes'));
// app.use('/api/v1/semesters', require('./routes/semesterRoutes'));
// app.use('/api/v1/courses', require('./routes/courseRoutes'));
// app.use('/api/v1/prerequisites', require('./routes/prerequisiteRoutes'));
app.use('/api/v1/enrollments', require('./routes/enrollmentRoutes'));
app.use('/api/v1/recommendations', require('./routes/recommendationRoutes'));

// Optional: a simple root route to test the server is alive
app.get('/', (req, res) => {
  res.send('Course MIS backend is running');
});

// Start the server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
  console.log('Open http://localhost:3000/ in your browser to test');
});