const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
app.use(express.json());

//MULTER // FILE/IMAGE UPLOADS
import multer from "multer";

const storage = multer.diskStorage({
    destination : function (req, file, cb){ // cb = callback
        cb(null, "backend/uploadedImages"); // "frontend/public/assests/images"
    },
    filename: function (req, file, cb){
        cb(null, file.originalname);
    },
});

const uploadImage = multer({storage : storage});

app.post('/upload', uploadImage.single("image"), (req, res) => {
    res.json({status : 200, message: "Image uplaoded successfully" });
});

//app.use(express.static("frontend/public"));
app.use(express.static(path.join(__dirname, '..', '..', 'frontend', 'public')));

app.get('*', (req, res) => {
    // res.sendFile(indexPath);
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});