const connection = require("./connection");

const orm = {
    selectAll: (tableInput, callBack) => {
        connection.query("SELECT * FROM ?? ORDER BY createdAt ASC", tableInput, (err,result) => {
            if(err) throw err;
            callBack(result);
        });
    },
    insertOne: (table, col, value, callBack) => {
        connection.query("INSERT INTO ?? (??) VALUES (?)", [table, col, value], (err, result) => {
            if(err) throw err;
            callBack(result);
        });
    },
    updateOne: (table, col, condition, callBack ) => {
        connection.query("UPDATE ?? SET ? WHERE ?", [table, col, {id: condition}], (err, result) => {
            if(err) throw err;
            callBack(result);
        });
    }
};

module.exports = orm;
