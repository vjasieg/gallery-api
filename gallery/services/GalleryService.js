var express = require('express');
const dbConnector = require("../utils/db/DatabaseConnector")
const mysql = require("mysql");

exports.getGallery = async (req, res, next) => {
    var pictures_json = [];
    var album_json = [];
    await dbConnector.sendSimpleRequest(res, "SELECT * FROM album;").then(async (albums) => {

        var pictures;
        await dbConnector.sendSimpleRequest(res, "SELECT * FROM pictures").then(pics => { pictures = pics })
        var comments;
        await dbConnector.sendSimpleRequest(res, "SELECT * FROM comments").then(comms => { comments = comms })


        for(var pic of pictures) {
            for(var comment of comments) {
                if(pic.picture_id === comment.picture_id) {
                    if(pic["comments"] === undefined) {
                        pic["comments"] = []
                    }
                    pic["comments"].push(comment)
                }
            }
            pictures_json.push(pic)
        }

        for(var album of albums) {
            for(var pic of pictures_json) {
                if(album.album_id === pic.album_id) {
                    if(album["pictures"] === undefined) {
                        album["pictures"] = []
                    }
                    album["pictures"].push(pic)
                }
            }
            album_json.push(album)
        }

        res.json(album_json)
    })
}

