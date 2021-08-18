'use strict';

goog.provide('Blockly.Arduino.dht');

goog.require('Blockly.Arduino');


Blockly.Arduino['dht'] = function(block) {
  var dhtpin = block.getFieldValue('dhtpin');
  var dhtName = 'dht'+ dhtpin;

  Blockly.Arduino.reservePin(block, dhtpin, Blockly.Arduino.PinTypes.dht, 'dhtpin');

  Blockly.Arduino.addInclude('dht', '#include "DHT.h"');
  //Blockly.Arduino.addDeclaration('servo_' + pinKey, 'Servo ' + servoName + ';');
  Blockly.Arduino.addDeclaration('dht_'+ dhtpin, '#define DHTPIN'+ dhtpin+' '+dhtpin +'\n' + '#define DHTTYPE DHT11' +'\n' +
  'DHT dht(DHTPIN'+ dhtpin +' '+', DHTTYPE);');

  var setupCode = 'dht.begin();';
  Blockly.Arduino.addSetup('dht', setupCode, true);

  var code = '';

  return code;
};

Blockly.Arduino['dht_temp'] = function(block) {
  var code = 'dht.readTemperature()'

  return code;
};

Blockly.Arduino['dht_humid'] = function(block) {
  var code = 'dht.readHumidity()'

  return code;
};
