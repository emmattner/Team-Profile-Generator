const employee = require('./employee');

class Manager extends employee  {
    constructor (name, id, email, officeNumber) {
        
        super (name, id, officeNumber); 

        this.officeNumber = officeNumber; 
    }

    getofficeNumber () {
        return this.officeNumber
    }

    getRole () {
        return "Manager";
    }
}

module.exports = Manager; 