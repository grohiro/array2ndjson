const stream = require('stream');
const array2ndjson = require('..')({delimiter: "\n"})
const toStream = require('stream-array');
const streamBuffer = require('stream-array-buffer')({size: 2});

const data = [
  { name: "tanaka", age: 24 },
  { name: "sato", age: 34 },
  { name: "suzuki", age: 10 },
  { name: "koike", age: 64 },
];

const writer = new stream.Writable();
writer._write = function(chunk, encoding, callback) {
  console.log('--------------------');
  console.log(chunk.toString());
  callback();
};

toStream(data)
  .pipe(streamBuffer)
  .pipe(array2ndjson)
  .pipe(writer);
