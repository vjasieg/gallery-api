var express = require('express');
const dbConnector = require("../../utils/db/DatabaseConnector")
const mysql = require("mysql");

exports.addComment = (req, res, next) => {
    dbConnector.sendSimpleRequest(res, 'SELECT * FROM pictures WHERE picture_id = ' + req.body.picture + ";").then(success => {
        if(success.toString() !== "") {
            dbConnector.sendSimpleRequest(res, 'INSERT INTO comments VALUES (NULL, "' + req.body.content + '", "' + req.body.nickname + '", "' + req.body.picture + '")').then(result => {
                res.status(200).json({"result": "added comment"})
            })
        }else {
            res.status(429).json({"result": "picture doesn't exist :("})
        }
    })
}

exports.getComments = (req, res, next) => {
    dbConnector.sendSimpleRequest(res, "SELECT * FROM comments;").then(success => {
        res.json(success)
    });
}

exports.getCommentByID = (req, res, next) => {
    dbConnector.sendSimpleRequest(res, "SELECT * FROM comments WHERE comment_id = " + req.params["id"] + ";").then(success => {
        res.json(success[0])
    });
}

exports.deleteComment = (req, res, next) => {
    dbConnector.sendSimpleRequest(res, "DELETE FROM comments WHERE comment_id = " + req.params['id'] + ';').then(success => {
        res.status(200).json({"status": "removed"})
    }).catch(err => {
        if(err) {
            res.status(400).json({"status": err})
        }
    })
}
