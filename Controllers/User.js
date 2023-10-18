const User = require('../Models/User');






exports.createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Create a new user instance based on the data received in the request body
        const newUser = new User({
            username,
            email,
            password,
        });

        // Save the new user to the database
        const savedUser = await newUser.save();

        // Respond with the saved user in the JSON response
        res.json(savedUser);
    } catch (err) {
        // If there's an error, handle it and send an error response with status code 500
        console.error(err);
        res.status(500).json({ error: 'Error creating user' });
    }
};
