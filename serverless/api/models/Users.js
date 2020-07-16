const mongoose = require ('mongoose');
const Schema = mongoose.Schema

const Users = mongoose.model('User', new Schema({   
    email : String,
    passwod: String,
    salt : String,
    role : {type : String, default : 'user'} //admin
    }))

    module.exports = Users;

