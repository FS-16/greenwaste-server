import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: [
      {
        value: String,
      },
      {
        value: String,
      },
      {
        value: String,
      },
    ],
    comments: [{ desc: String, date: Date }],
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Question = mongoose.model('Question', questionSchema);

export default Question;
