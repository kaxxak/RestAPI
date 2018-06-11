function send_response(code,message,res){
    if(code === ""){
        res.json({
            error   : false,
            code    : null,
            message : message,
        });
    } else{
        res.json({
            error   : true,
            code    : code,
            message : message,
        });
    }
}

function params_validate(params){
    let count = 0;
    for(let i in params){
        if(params[i] === "" || params[i] === null || params[i] === undefined){
            count++;
        }
    }
    return count;
}

module.exports.RESPONSE     = send_response;
module.exports.PARAMS_VALID = params_validate;