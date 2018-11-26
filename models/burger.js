const orm = require("../config/orm");

const burger = {
    getAll: (callBack) => {
        orm.selectAll('burgers', (result) => {
            callBack(result);
        });
    },
    create: (value, callBack) => {
        orm.insertOne("burgers", "burger_name", value, (result) => {
            callBack(result);
        });
    },
    update: (condition, callBack) => {
        
        orm.updateOne("burgers", {devoured: 1}, condition, (result) => {
            callBack(result);
        })
    }
};

module.exports = burger;