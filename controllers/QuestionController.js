import Question from '../models/QuestionModel.js';

// GET ALL QUESTION
export const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET QUESTION BY ID
export const getQuestionById = async (req, res) => {
  try {
    const questions = await Question.findById(req.params.id);
    res.json(questions);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// CREATED NEW USER
export const createQuestion = async (req, res) => {
  const question = new Question(req.body);
  try {
    const createquestion = await question.save();
    res.status(201).json(createquestion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATED QUESTION
export const updatedQuestion = async (req, res) => {
  try {
    const updatedquestion = await Question.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedquestion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//DELETED QUESTION
export const deletedQuestion = async (req, res) => {
  try {
    const deletedquestion = await Question.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedquestion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
