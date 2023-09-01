import PostMessage from '../models/postMessage.js'

// GET POSTS METHOD
export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    }
    catch (error) {
        res.status(404).json({ message: error.message })
    }
};

// CREATE POST METHOD
export const createPost = (req, res) => {
res.send('Post Creation.')
}