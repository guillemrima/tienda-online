const express = require("express");
const cors = require("cors");
const fs = require('fs'); 
const app = express();
const multer = require('multer');

var corsOptions = {
    origin: ['http://localhost:8081', 'http://127.0.0.1:5500', 'http://127.0.0.1:5501']
};

app.use(cors(corsOptions));
app.use(express.json({limit: "10mb", extended: true}));
app.use(express.urlencoded({limit: "10mb", extended: true, parameterLimit: 50000}));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/storage/tmp/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

const upload = multer({ storage: storage })

var routePath="./src/routes/";

fs.readdirSync(routePath).forEach(function(file) {
    require(routePath + file)(app, upload);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`El servidor está corriendo en el puerto ${PORT}.`);
});