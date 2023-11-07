import Tutorials from '../models/Tutorials.js'

const getAllTutorials = async () => {
  try {
    const result = await Tutorials.find().populate("images");
    return result;
  } catch (error) {
    return error.toString();
  }
};

const getCommentByTutorial = async (id) => {
  try {
    const result = await Tutorials.findOne({ _id: id });
    return result.comments;
  } catch (error) {
    return error.toString();
  }
};

const createTutorial = async ({
  title,
  author,
}) => {
  try {
    const result = await Tutorials.create({
      title,
      author,
    });
    return result;
  } catch (error) {
    return error.toString();
  }
};

export default {
  getAllTutorials,
  getCommentByTutorial,
  createTutorial
};