import { connectDatabase, insertDocument, getAllDocument } from "../../../helpers/db-util";

async function handler(req, res) {
    const postSlug = req.query.postSlug;
    let client;


    try {
        client = await connectDatabase();
    } catch (err) {
        res.status(500).json({message: "Failed to connect the DB"});
        return;
    }

    if (req.method === "POST") {
        const { title, excerpt, isFeatured, content } = req.body;

        if (!title || !title.trim() === '' || 
        !excerpt || !excerpt.trim() === '' ||
        !postSlug || !postSlug.trim() === '' ||
        !content || !content.trim() === '') {
            res.status(422).json({message: "Invalid inputs."});
            return;
        }

        const newComment = {
            title, 
            excerpt, 
            isFeatured,
            content,
            postSlug
        }

        let result;

        try {
            result = await insertDocument(client, "comments_blog", newComment);
            newComment._id = result.insertedId;

            res.status(200).json({
                message: "Success!",
                comments: newComment
            });
        } catch (err) {
            res.status(500).json({message: "Failed to insert the data"});
        }
    } else if (req.method === "GET") {
        try {
            const documents = await getAllDocument(client, "comments_blog", {_id : -1}, { postSlug : postSlug});

            res.status(200).json({
                message: "Comments get!",
                comments: documents
            });
        } catch (err) {
            res.status(500).json({message : "Failed to get all the data"});
        }
    }
}

export default handler;