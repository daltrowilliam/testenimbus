const controller = require('./controller');

module.exports = {
    execute: async (req, res) => {
        try {
            const { dateStart, dateEnd } = req.query;
            const result = await controller.execute(dateStart, dateEnd);
            console.log({ data: result })
            res.status(200).json(result)
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};



