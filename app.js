const express = require("express");
const app = express();

const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "cartoonink",
    database: "jsMysql",
    port: "3306",
});

function getConnection(callback) {
    connection.getConnection((err, connection) => {
        if (err) throw err;
        console.log("DB connected successful: " + connection.threadId);
    });
}
exports.connection = { getConnection };