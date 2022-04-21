var mysql = require("mysql");

exports.sendSimpleRequest = (res, query) => {
    return new Promise(function executor(resolve, reject) {
        var connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'galeria',
            password : 'pepsimen',
            database : 'gallery'
        });
        connection.connect();
        connection.query(query, function (error, results, fields) {
            if (error) {
                if(error.sqlMessage.startsWith("Cannot delete or update a parent row")) {
                    res.json({"result": "cannot delete this entity, because it's connected to other entities"})
                }else {
                    res.json(error);
                }
            }else {
                resolve(JSON.parse(JSON.stringify(results)))
            }
            connection.end();
        });
    })
}
