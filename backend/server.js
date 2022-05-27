const express = require('express');
const notes = require('./data/notes');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const noteRoutes = require('./routes/noteRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

const app = express();
app.use(cors());
connectDB();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('API is running!!!');
});

app.get('/api/notes', (req, res) => {
  res.json(notes);
});

app.use('/api/users', userRoutes);
app.use('/api/notes', noteRoutes);

app.use(notFound);
app.use(errorHandler);

// app.get('/api/notes/:id', (req, res) => {
//   const note = notes.find((n) => n._id === req.params.id);
//   res.send(note);
// });

app.listen(PORT, console.log(`App is running at port ${PORT}`));
