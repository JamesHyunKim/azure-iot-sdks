// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

'use strict';

var Http = require('azure-iot-device-http').Http;
var Client = require('azure-iot-device').Client;
var Message = require('azure-iot-device').Message;
var argv = require('yargs')
             .usage('Usage: \r\nnode $0 --connectionString <DEVICE CONNECTION STRING> [--amqp] [--mqtt] [--http] [--amqpws]\r\nnode $0 --sas <SHARED ACCESS SIGNATURE> [--amqp] [--mqtt] [--http] [--amqpws]')
             .check(function(argv, opts) { 
               if(!argv.connectionString && !argv.sas || argv.connectionString && argv.sas) { 
                 throw new Error('Please specify either a connection string or a shared access signature.');
               } else {
                 return true;
               }
             })
             .alias('c', 'connectionString')
             .alias('s', 'sas')
             .describe('connectionString', 'Device-specific connection string.')
             .describe('sas', 'Device-specific shared access signature.')
             .argv;

// Create the client instance, either with a connection string or a shared access signature
var client = argv.connectionString ? Client.fromConnectionString(argv.connectionString, Http)
                                   : Client.fromSharedAccessSignature(argv.sas, Http);

// Create two messages and send them to the IoT hub as a batch.
var data = [
  { id: 1, message: 'hello' },
  { id: 2, message: 'world' }
];

var messages = [];
data.forEach(function (value) {
  messages.push(new Message(JSON.stringify(value)));
});

console.log('sending ' + messages.length + ' events in a batch');

client.open(printResultFor('open', function() {
  client.sendEventBatch(messages, printResultFor('sendEventBatch', function() { process.exit(0); }));
}));

function printResultFor(operation, next) {
  return function(err, result) {
    if(err) {
      console.error(operation + ' failed: ' + err.constructor.name + ': ' + err.message);
      process.exit(1);
    } else {
      console.log(operation + ' succeeded: ' + result.constructor.name);
      if (next) next();
    }
  };
};