  // ... existing fields from original ...

  code: {
    type: String,
    unique: true,
    trim: true
  },
  credits: {
    type: Number,
    default: 3
  },
  durationWeeks: {
    type: Number,
    default: 12
  },
  semester: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Semester'
  }