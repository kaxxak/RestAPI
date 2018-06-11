const MONGOOSE = require('mongoose');

// MONGOOSE.connect('mongodb://localhost/users');
MONGOOSE.connect('mongodb://sevada:12345sevada@ds255320.mlab.com:55320/users');
const USERS = new MONGOOSE.Schema({
    name       : {type:String, match: /[a-z]/},
    surname    : {type:String, match: /[a-z]/},
    birthday   : {type:Date, default : null},
    address_1  : {type:String, match: /[a-z0-9A-Z]/},
    address_2  : {type:String, match: /[a-z0-9A-Z]/},
    country    : {type:String, match: /[a-z]/},
    city       : {type:String, match: /[a-z]/},
    postal_code: {type:String, match: /[a-z0-9A-Z]/},
});

const USERS_MODEL = MONGOOSE.model('users_model',USERS);

function add_user(params,callback){
    new USERS_MODEL ({
        name       : params.name,
        surname    : params.surname,
        birthday   : params.birthday,
        address_1  : params.address_1,
        address_2  : params.address_2,
        country    : params.country,
        city       : params.city,
        postal_code: params.postal_code,
    }).save(callback);
}

function find_one(params,callback){
    USERS_MODEL.findOne({_id : params.id},callback);
}

function find_all(callback) {
    USERS_MODEL.find({},callback);
}

function update_user(params,callback){
    let field = params.field;
    USERS_MODEL.update({ _id: params.id }, { $set: {[field]: params.value }}, callback);
}

function delete_user(params,callback){
    USERS_MODEL.remove({ _id: params.id},callback).exec();
}

module.exports.FIND_ONE    = find_one;
module.exports.FIND_ALL    = find_all;
module.exports.ADD_USER    = add_user;
module.exports.UPDATE_USER = update_user;
module.exports.DELETE_USER = delete_user;