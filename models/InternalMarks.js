const mongoose = require('mongoose');

const internalMarksSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  marks: {
    type: Number,
    required: true
  }
});

const InternalMarks = mongoose.model('InternalMarks', internalMarksSchema);

module.exports = InternalMarks;
