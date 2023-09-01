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
    // const post = req.body;
    // const newPost = new PostMessage(post)  tanımlama alanını "try"  blogunun dışında da yapabiliriz.
    try {
        const newPost = new PostMessage(req.body);
        newPost.save();
        res.status(200).json(newPost);

    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}