# csv-upload-example
# CSV File Upload and Processing API

This is a simple Express.js application that allows users to upload CSV files, which are then processed and returned as JSON data. The application uses `multer` for handling file uploads and `csv-parser` for reading and parsing CSV files.

## Features

- Upload a CSV file via a POST request.
- Parse the CSV file and return its contents as JSON.
- Automatically delete the uploaded file after processing.

## Prerequisites

- Node.js (version 12 or higher)
- npm (Node package manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/csv-upload-api.git
   cd csv-upload-api

## Install the required dependencies
   npm install

## Start the Server
  node app.js

## Upload the file
  curl -X POST -F "file=@data1.csv" http://localhost:3000/upload
