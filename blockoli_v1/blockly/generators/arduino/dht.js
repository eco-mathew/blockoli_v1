'use strict';

goog.provide('Blockly.Arduino.dht');

goog.require('Blockly.Arduino');


/**
 * Code generator to set an angle (Y) value to a servo PWM pin (X).
 * Arduino code: #include <Servo.h>
 *               Servo myServoX;
 *               setup { myServoX.attach(X); }
 *               loop  { myServoX.write(Y);  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['dht'] = function(block) {
  var dhtpin = block.getFieldValue('dhtpin');
  var dhtName = 'dht'+ dhtpin;

  Blockly.Arduino.reservePin(block, dhtpin, Blockly.Arduino.PinTypes.dht, 'dhtpin');

  Blockly.Arduino.addInclude('dht', '#include "DHT.h"');
  //Blockly.Arduino.addDeclaration('servo_' + pinKey, 'Servo ' + servoName + ';');
  Blockly.Arduino.addDeclaration('dht_'+ dhtpin, '#define DHTPIN'+ dhtpin+' '+dhtpin +'\n' + '#define DHTTYPE DHT11' +'\n' +
  'DHT dht(DHTPIN'+ dhtpin +' '+', DHTTYPE);');
  //var setupCode = servoName + '.attach(' + pinKey + ');';

  //var code = dhtName + '.write(' + servoAngle + ');\n';
  var code;

  return code;
};

Blockly.Arduino['dht_temp'] = function(block) {
  var code = 'dht.readTemperature()'

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['dht_humid'] = function(block) {
  var code = 'dht.readHumidity()'

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
