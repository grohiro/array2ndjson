const os = require('os');
const stream = require('stream');

array2ndjson = function(options) {
  const DELIMITER = options.delimiter || os.EOL;

  const transform = new stream.Transform({objectMode: true});

  transform._transform = function(array, encoding, callback) {
    let buf = '';
    for (let i = 0; i < array.length; i++) {
      buf += JSON.stringify(array[i])
      buf += DELIMITER;
    }
    this.push(buf);
    callback();
  };

  return transform;
};

module.exports = array2ndjson;
