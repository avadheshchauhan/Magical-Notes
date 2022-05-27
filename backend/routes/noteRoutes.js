const express = require('express');
const {
  getNotes,
  createNote,
  getNoteById,
  UpdateNote,
  DeleteNote,
} = require('../controllers/noteController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/').get(protect, getNotes); //get all the notes and get all of the routes from the backend
router.route('/create').post(protect, createNote); // post notes to the backend
router
  .route('/:id')
  .get(getNoteById)
  .put(protect, UpdateNote)
  .delete(protect, DeleteNote);

module.exports = router;
