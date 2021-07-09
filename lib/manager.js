const employee = require("./employee");

class manager extends employee {
    constructor (name, id, office_number) {
        super(name, id, email);
        this.office_number = office_number;
    }

    getRole() {
        return "manager";
    }

    getOfficeNumber() {
        return this.office_number;
    }
}

module.exports = manager;