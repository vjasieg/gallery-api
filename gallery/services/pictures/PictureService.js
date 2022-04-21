var express = require('express');
const dbConnector = require("../../utils/db/DatabaseConnector")
const mysql = require("mysql");

exports.addPicture = (req, res, next) => {
    var file = req.files.file
    dbConnector.sendSimpleRequest(res, 'SELECT * FROM album WHERE album_id = ' + req.body.album + ";").then(success => {
        if(success.toString() !== "") {
            file.mv('./static/public/' + file.name, (err) => {
                if(!err) {
                    dbConnector.sendSimpleRequest(res, 'INSERT INTO pictures VALUES (NULL, "' + req.body.name + '", "' + file.mimetype + '", ' + req.body.album + ', "' + file.size + '", "' + new Date().toISOString().slice(0, 10) + '", "' + process.env.HOST + '/public/' + file.name + '");').then(result => {
                        res.status(200).json({"result": "picture added", "url": process.env.HOST + '/public/' + file.name})
                    })
                }
            })
        }else {
            res.status(429).json({"result": "album doesn't exist :("})
        }
    })
}

exports.getPictures = (req, res, next) => {
    dbConnector.sendSimpleRequest(res, "SELECT * FROM pictures;").then(success => {
        res.json(success)
    });
}

exports.getPictureByID = (req, res, next) => {
    dbConnector.sendSimpleRequest(res, "SELECT * FROM pictures WHERE picture_id = " + req.params["id"] + ";").then(success => {
        res.json(success[0])
    });
}

exports.deletePicture = (req, res, next) => {
    dbConnector.sendSimpleRequest(res, "DELETE FROM pictures WHERE picture_id = " + req.params['id'] + ';').then(success => {
        res.status(200).json({"status": "removed"})
    })
}
