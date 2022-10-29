class CatchErr extends Error {
    constructor(message, statusCode){
       super(message);
       
       this.statusCode = statusCode;
       this.status = statusCode;
    }
}

module.exports = CatchErr; 