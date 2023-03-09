const mongoose = require('mongoose');

const AccountModel = new mongoose.Schema(
    {

        "email": {
            "type" : "string"
        },
        "phone": {
            "type": "String"
        },
        "name": {
            "type": "string"
        },
        
    }
)

module.exports = mongoose.model('AccountModel', AccountModel, 'accounts')