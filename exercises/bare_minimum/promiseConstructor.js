/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, 'utf8', function (err, content) {
      if (!err) {
      let accumulator='';
      let newLineFlag=false;
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
      resolve(accumulator);
    } else {
      reject(err)
    }
    })
  })
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  return new Promise(function (resolve, reject) {
    request(url, function (error, response, body) {
      if (!error) {
        let responseData = response;
        resolve(responseData.statusCode);
      } else {
        reject(error)
      }
    })
  })
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
