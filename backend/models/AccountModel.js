const mongoose = require('mongoose');

const AccountModel = new mongoose.Schema(
    {
        "email": {
            "type" : "string"
        },
        "phone": {
            "type": "String"
        },
        "Name": {
            "type": "string"
        }
    }
)

module.exports = mongoose.model('AccountModel', AccountModel, 'accounts')


mongodb+srv://sa:WWM9lDs9tt8mHZwN@cluster0.yhgasx4.mongodb.net/ITE5425DB?retryWrites=true&w=majority