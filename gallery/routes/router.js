var express = require('express');
var app = express();
const AlbumService = require("../services/albums/AlbumService")
const PictureService = require("../services/pictures/PictureService")
const CommentService = require("../services/comments/CommentService")
const GalleryService = require("../services/GalleryService")

//main gallery endpoint
app.get('/gallery', GalleryService.getGallery)

//album endpoints
app.get("/album", AlbumService.getAlbums)
app.get("/album/:id", AlbumService.getAlbumById)
app.post("/album", AlbumService.addAlbums)
app.delete("/album/:id", AlbumService.deleteAlbum)

//picture endpoints
app.post("/picture", PictureService.addPicture)
app.get("/picture", PictureService.getPictures)
app.get("/picture/:id", PictureService.getPictureByID)
app.delete("/picture/:id", PictureService.deletePicture)

//commennt endpoints
app.post("/comments", CommentService.addComment)
app.get("/comments", CommentService.getComments)
app.get("/comments/:id", CommentService.getCommentByID)
app.delete("/comments/:id", CommentService.deleteComment)

module.exports = app;
