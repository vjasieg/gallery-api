var express = require('express');
const dbConnector = require("../../utils/db/DatabaseConnector")
const mysql = require("mysql");

exports.getAlbums = (req, res, next) => {
    dbConnector.sendSimpleRequest(res, "SELECT * FROM album;").then(success => {
        res.json(success)
    });
}

exports.getAlbumById = (req, res, next) => {
    dbConnector.sendSimpleRequest(res, "SELECT * FROM album WHERE album_id=" + req.params['id']).then(success => {
        res.json(success[0])
    });
}

exports.addAlbums = (req, res, next) => {
    dbConnector.sendSimpleRequest(res, "INSERT INTO album VALUES (NULL, '" + req.body.album_name + "', '" + req.body.album_description + "')").then(success => {
        res.status(200).json({"status": "added"})
    })
}

exports.deleteAlbum = (req, res, next) => {
    dbConnector.sendSimpleRequest(res, "DELETE FROM album WHERE album_id = " + req.params['id'] + ';').then(success => {
        res.status(200).json({"status": "removed"})
    }).catch(err => {
        if(err) {
            res.status(400).json({"status": err})
        }
    })
}
