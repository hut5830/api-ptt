const connectDB = require('../../config/config');
const { User } = require('../model/model');

module.exports = {
    async register(req, res) {
        try {
            await User.create(req.body).then(() => {
                res.status(200).send('User created successfully');
            })
        }
        catch (error) {
            console.log(error);
            res.send(error);
        }
    },
    async userRegister(req, res) {
        try {
            const query = {};
            if (req.query.name) query.name = { $regex: '^' + req.query.name, $options: 'i' }; // Case-insensitive search
            if (req.query.email) query.email = { $regex: '^' + req.query.email };

            const result = await User.find(query);
            res.status(200).send({response: result, count: result.length});
        }
        catch (error) {
            console.log(error);
            res.send(error);
        }
    },
}