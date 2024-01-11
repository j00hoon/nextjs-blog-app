import { connectDatabase, insertDocument } from "../../helpers/db-util";



async function handler(req, res) {
    if (req.method === "POST") {
        const { email, name, message } = req.body;

        if (!email || 
            !email.includes('@') || 
            !name || 
            name.trim() === '' || 
            !message ||
            message.trim() === ''
        ) {
            res.status(422).json({message: "Invalid input."});
            return;
        }

        // Store in a DB
        const newMessage = {
            email,
            name,
            message
        };

        console.log("New message: " + JSON.stringify(newMessage));


        let client; 

        try {
            client = await connectDatabase();
        } catch (error) {
            res.status(500).json({message: "Could not connect to database."});
            return;
        }

        
        try {
            const result = await insertDocument(client, "messages", newMessage);
            newMessage._id = result.insertedId;
        } catch (error) {
            client.close();
            res.status(500).json({message: "Strong message failed!"});
            return;
        } 

        
        client.close();
        res.status(201).json({message: "Successfully stored message!"});

    }
}

export default handler;