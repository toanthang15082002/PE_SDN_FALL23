import tutorials from "../repositories/tutorials.js";

const getAllTutorials = async (req, res) => {
  try {
    const result = await tutorials.getAllTutorials();
    res.status(200).json({
      message: "Get all tutorials success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.toString(),
    });
  }
};

const getCommentByTutorial = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("🚀 ========= id: ", id);
    const result = await tutorials.getCommentByTutorial(id);
    console.log("🚀 ========= result: ", result);
    res.status(200).json({
      message: "Get comment by tuto success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.toString(),
    });
  }
};

const createTutorial = async (req, res) => {
  const {title, author} = req.body;
  const imageId = req.imageId;
  const commentId = req.commentId;
  const categoryId = req.categoryId;
  try {
    const result = await tutorials.createTutorial({
      title, author
    });
    res.status(201).json({
      message: "Create tutorial success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Create tutorial not success",
    });
  }
};

export default {
  getAllTutorials,
  getCommentByTutorial,
  createTutorial
};