/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Code generator for Arduino Digital and Analogue input/output.
 *     Arduino built in function docs: http://arduino.cc/en/Reference/HomePage
 */
'use strict';

goog.provide('Blockly.Arduino.IO');

goog.require('Blockly.Arduino');


/**
 * Function for 'set pin' (X) to a state (Y).
 * Arduino code: setup { pinMode(X, OUTPUT); }
 *               loop  { digitalWrite(X, Y); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */

Blockly.Arduino['ultra_sonic'] = function(block) {
  var Trig_Pin = block.getFieldValue('Trig');
  Blockly.Arduino.reservePin(
      block, Trig_Pin, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
  var Echo_Pin = block.getFieldValue('Echo');
  Blockly.Arduino.reservePin(
      block, Echo_Pin, Blockly.Arduino.PinTypes.INPUT, 'Digital Write');

  Blockly.Arduino.addDeclaration('ultra_', '#define Trig ' + Trig_Pin + '\n' +
  '#define Echo ' + Echo_Pin);

  var pinSetupCode1 = 'pinMode(Trig, OUTPUT);';
  var pinSetupCode2 = 'pinMode(Echo, INPUT);';

  Blockly.Arduino.addSetup('io_' + Trig_Pin, pinSetupCode1, false);
  Blockly.Arduino.addSetup('io_' + Echo_Pin, pinSetupCode2, false);

  // digitalWrite(3, LOW);
  //   delayMicroseconds(2);
  //   digitalWrite(3, HIGH);
  //   delayMicroseconds(10);
  //   digitalWrite(3, LOW);
  //   float distance = pulseIn(5, HIGH) / 58.00;
  //   delay(10);
  //   return distance;
  Blockly.Arduino.addFunction('Ultra_func', 'float getDistance(){' + '\n' +
  '\t' + 'digitalWrite(Trig, LOW);' + '\n' +
  '\t' + 'delayMicroseconds(2);' + '\n'+
  '\t' + 'digitalWrite(Trig, HIGH);' + '\n'+
  '\t' + 'delayMicroseconds(10);' + '\n'+
  '\t' + 'digitalWrite(Trig, LOW);' + '\n'+
  '\t' + 'float distance = pulseIn(Echo, HIGH)/58.00;' + '\n' +
  '\t' + 'delay(10);' + '\n' +
  '\t' + 'return distance;'  + '\n' +
  '}'
  );
  var code = '';

  return code;
};

Blockly.Arduino['ultra_output'] = function(block) {
  var code = 'getDistance()';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
