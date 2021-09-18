

const express = require('express');
const router = express.Router();
const fs = require('fs');
var path = require('path');


router.post('/simple', (req, res) => {

    const videoFile = req.body.base64;

    if (videoFile) {

        let filePath = `../simplefiles/${Date.now()}_${req.body.name}.mp4`;
        let buffer = Buffer.from(req.body.base64, "base64");
        fs.writeFileSync(path.join(__dirname, filePath), buffer);

        const userName = req.body.name;

        res.status(201).json({
            message: "First Video Created Successfully!",
            name: userName
        })

    } else {
        res.status(404).json({
            message: "First Video not found!"
        });
    }


});


router.post('/complex', (req, res) => {

    const videoFile = req.body.base64;

    if (videoFile) {
        let filePath = `../complexfiles/${Date.now()}_${req.body.name}.mp4`;
        let buffer = Buffer.from(req.body.base64, "base64");
        fs.writeFileSync(path.join(__dirname, filePath), buffer);

        res.status(201).json({
            message: "Second Video Created Successfully!",
        });

    } else {
        res.status(404).json({
            messag: 'second Video not found!'
        });
    }



});



module.exports = router;