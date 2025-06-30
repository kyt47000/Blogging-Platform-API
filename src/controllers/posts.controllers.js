import BlogPost from "../models/blogPost.model.js";

export const createPosts = async (req, res) => {
  try {
    const blog = await BlogPost.create(req.body);
    res.status(200).json(blog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updatePostById = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const updatedPost = await BlogPost.findOneAndUpdate({ id: id }, req.body, {
      new: true,
    });
    if (!updatedPost) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deletePostById = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const deletePost = await BlogPost.findOneAndDelete({ id: id });
    if (!deletePost) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.status(200).json(deletePost);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const showPostById = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const showPost = await BlogPost.findOne({ id: id });
    if (!showPost) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).json(showPost);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const showPostByTerm = async (req, res) => {
  try {
    const { term } = req.query;

    let filter = {};

    if (term) {
      filter = {
        $or: [
          { title: { $regex: term, $options: "i" } },
          { content: { $regex: term, $options: "i" } },
          { category: { $regex: term, $options: "i" } },
        ],
      };
    }

    const posts = await BlogPost.find(filter);
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const showAllPosts = async (req, res) => {
  try {
    const allPosts = await BlogPost.find({});
    res.status(200).json(allPosts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
