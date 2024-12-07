const express = require('express');
const multer = require('multer'); //handling file uploads
const fs = require('fs');//to read/write/delete files
const csv = require('csv-parser');//read and parse csv file line by line

const app = express();
const upload = multer({ dest: 'uploads/' }); // Temporary storage for uploaded files

// Route to upload the CSV file
app.post('/upload', upload.single('file'), (req, res) => {
    const results = [];
    const filePath = req.file.path;

    // Read and parse the CSV file
    fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            fs.unlinkSync(filePath); // Remove the temporary file
            res.status(200).json({ message: 'File processed successfully!', data: results });
        })
        .on('error', (err) => {
            res.status(500).json({ error: 'Failed to process file' });
        });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
