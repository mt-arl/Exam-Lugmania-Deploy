const pool = require('../config/db');
const bcrypt = require('bcrypt');

const sellerController = {

  
   
    getAllSellers: async (req, res) => {
        try {
            const [sellers] = await pool.query(`
                SELECT id, name, lastname, address, email, number_toys, total_amount_of_money
                FROM sellers_report
            `);
            res.json(sellers);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching sellers', error: error.message });
        }
    }
    
};

module.exports = sellerController;
// Compare this snippet from myBackEnd-Lugmania/config/db.js:
