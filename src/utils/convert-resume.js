// const pdfPoppler = require('pdf-poppler');
const path = require("path")

const pdfFilePath = path.join(__dirname,"../../public/resume/maheer-resume.pdf");
const outputDir = path.join(__dirname,"../../public/resume/")

const { fromPath } = require("pdf2pic");

const options = {
  density: 100,
  saveFilename: "untitled",
  savePath: outputDir,
  format: "png",
};

const convert = fromPath(pdfFilePath, options);

convert(1, { responseType: "image" })
  .then((resolve) => {
    console.log("Page 1 is now converted as image");
    return resolve;
  });