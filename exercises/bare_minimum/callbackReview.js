/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  //passs the file path into fs.readfile
  fs.readFile(filePath, 'utf8', function (err, content) {
    if (err) {
      callback(err);
    }
    let accumulator='';
    let newLineFlag=false;
    console.log(accumulator)
    //content is an array of characters
    //read the first line until /n or end of line
    for (var i =0; i < content.length; i++){
      if (content[i] === '\n') {
        newLineFlag = true;
      }
      //add content to an accumulator until you hit a /n
      if (!newLineFlag) {
        accumulator += content[i];
      }
    }
    //return the first line to the callback
    callback(err, accumulator);
  })
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request(url, function (error, response, body) {
    if (error || !response){
      console.log(error.message);
      callback(error);
    } else {
      let responseData = response;
      callback(error,responseData.statusCode);
    }
  });
};

// const request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
