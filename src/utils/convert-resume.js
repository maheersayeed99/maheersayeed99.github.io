const path = require("path");
const fs = require("fs");
const { PDFDocument } = require("pdf-lib");
const { fromPath } = require("pdf2pic");

const pdfFilePath = path.join(__dirname, "../../public/resume/maheer-resume.pdf");
const outputDir = path.join(__dirname, "../../public/resume/");

// Function to get dimensions of a PDF page
async function getPageDimensions(pdfPath, pageNumber = 1) {
    const pdfBytes = await fs.promises.readFile(pdfPath);
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const page = pdfDoc.getPage(pageNumber - 1);
    const { width, height } = page.getSize();
    return { width, height };
}

(async () => {
    const { width, height } = await getPageDimensions(pdfFilePath);
    const options = {
        density: 1000, // Increased density for higher resolution
        saveFilename: "untitled",
        savePath: outputDir,
        format: "jpg",
        width,
        height
    };

    const convert = fromPath(pdfFilePath, options);

    convert(1, { responseType: "image" })
        .then((resolve) => {
            console.log("Page 1 is now converted as image");
            return resolve;
        });
})();
