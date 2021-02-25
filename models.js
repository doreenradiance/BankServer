let banksDb = require("./db");
//Bank models
class BankModel {
    constructor({ name, location, branch, phone, address, accountNumber }) {
        this.name = name;
        this.location = location;
        this.branch = branch;
        this.phone = phone;
        this.address = address;
        this.accountNumber = accountNumber;
    }

    save() {
        banksDb.push(this);
        return this;
    }

    static all() {
        return banksDb;
    }

    static update(updateInfo = {}) {
        //find the bank
        banksDb = banksDb.map(bank => {
            if (bank.name === updateInfo.name) {
                return { ...bank, ...updateInfo };
            }
            return bank;
        });
        // update
    }
    static delete({name}){
        let deletedBank = null;
        banksDb = banksDb.filter(bank =>{
            if(bank.name !== name){
                return true;
            }
            deletedBank = bank;
            return false;
        });
        return deletedBank;
    }
}

module.exports = BankModel;