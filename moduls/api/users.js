const UTILS  = require('./utils');
const CONST  = require('./constants');
const MON_GO = require('../db/mon_go');

function get_users(params,res) {
    if(params.id === "" || params.id === null || params.id === undefined){
        MON_GO.FIND_ALL((err,result)=>{
            if(err){
                UTILS.RESPONSE(CONST.ERR.DB_ERROR.CODE,CONST.ERR.DB_ERROR.MESSAGE,res);
            } else{
                UTILS.RESPONSE("",result,res);
            }
        });
    } else{
        console.log(params.id);
        MON_GO.FIND_ONE(params,(err,result)=>{
            if(err){
                UTILS.RESPONSE(CONST.ERR.DB_ERROR.CODE,CONST.ERR.DB_ERROR.MESSAGE,res);
            } else{
                UTILS.RESPONSE("",result,res);
            }
        });
    }
}

function add_users(params,res) {
    let count = UTILS.PARAMS_VALID(params);
    if(count > 0){
        UTILS.RESPONSE(CONST.ERR.EMPTY_PARAMS.CODE,CONST.ERR.EMPTY_PARAMS.MESSAGE,res);
    } else{
        MON_GO.ADD_USER(params,(err)=>{
            if(err){
                UTILS.RESPONSE(CONST.ERR.DB_ERROR.CODE,CONST.ERR.DB_ERROR.MESSAGE,res);
            } else{
                UTILS.RESPONSE("",CONST.SUCCESS.SUCCESS,res);
            }
        });
    }

}

function update_users(params,res) {
    let count = UTILS.PARAMS_VALID(params);
    if(count > 0){
        UTILS.RESPONSE(CONST.ERR.EMPTY_PARAMS.CODE,CONST.ERR.EMPTY_PARAMS.MESSAGE,res);
    } else{
        MON_GO.UPDATE_USER(params,(err)=>{
            if(err){
                UTILS.RESPONSE(CONST.ERR.DB_ERROR.CODE,CONST.ERR.DB_ERROR.MESSAGE,res);
            } else{
                UTILS.RESPONSE("",CONST.SUCCESS.SUCCESS,res);
            }
        });
    }
}

function delete_users(params,res) {
    let count = UTILS.PARAMS_VALID(params);
    console.log(params);
    if(count > 0){
        UTILS.RESPONSE(CONST.ERR.EMPTY_PARAMS.CODE,CONST.ERR.EMPTY_PARAMS.MESSAGE,res);
    } else{
        MON_GO.DELETE_USER(params,(err)=>{
            if(err){
                UTILS.RESPONSE(CONST.ERR.DB_ERROR.CODE,CONST.ERR.DB_ERROR.MESSAGE,res);
            } else{
                UTILS.RESPONSE("",CONST.SUCCESS.SUCCESS,res);
            }
        });
    }
}

module.exports.GET    = get_users;
module.exports.PUT    = update_users;
module.exports.POST   = add_users;
module.exports.DELETE = delete_users;