const employee = require('.//employee');

class Manager extends employee  {
    constructor (name, id, email, officeNumber) {
        
        super (name, id, email); 

        this.officeNumber = officeNumber; 
        this.role = this.getRole()
    }

    getofficeNumber () {
        return this.officeNumber;
    }

    getRole () {
        return "Manager";
    }
}

module.exports = Manager; 