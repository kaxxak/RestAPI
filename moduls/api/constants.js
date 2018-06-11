const ERRORS = {
    EMPTY_PARAMS : {
        CODE : 1000,
        MESSAGE : "All required params not send!!!",
    },
    DB_ERROR : {
        CODE : 1001,
        MESSAGE : "DB connection error",
    },
};

const SUCCESS = {
    SUCCESS : "Operation successful",
};

module.exports.ERR     = ERRORS;
module.exports.SUCCESS = SUCCESS;