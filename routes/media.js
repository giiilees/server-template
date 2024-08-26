const express = require("express");
const router = express.Router();

const fs = require("fs");
const _ = require("lodash");
const config = require("config");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const multer = require("multer");
const sharp = require("sharp");

const { fileSizes } = require("../utils/fileSizes");

const storage = multer.memoryStorage({
  destination: (req, file, callback) => {
    callback(null, "./public/uploads/images");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${uuidv4()}${ext}`);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 20, // 10MB file size limit
  },
  fileFilter: function (req, file, cb) {
    if (!file.mimetype.startsWith("image/")) {
      return cb(null, false);
    }
    cb(null, true);
  },
});

router.post(
  "/add",
  upload.fields([{ name: "image", maxCount: 1 }]),
  async (req, res) => {
    try {
      const { body, files } = req;
      //console.log(files.image);
      if (!files.image) {
        return res.status(400).send("No image uploaded");
      }

      //const userDec = req.user;

      const filename = `${uuidv4()}.png`;

      for (let index = 0; index < fileSizes.length; index++) {
        const element = fileSizes[index];
        const resizedImage = await sharp(files.image[0].buffer)
          .resize(element, element)
          .toBuffer();

        await fs.promises.writeFile(
          `public/uploads/images/${element}/${filename}`,
          resizedImage
        );
      }

      res.send({
        image: filename,
      });
    } catch (err) {
      console.error("gugu", err);
    }
  }
);

module.exports = router;
