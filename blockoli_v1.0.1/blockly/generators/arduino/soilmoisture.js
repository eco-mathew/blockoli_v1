/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Code generator for Arduino Digital and Analogue input/output.
 *     Arduino built in function docs: http://arduino.cc/en/Reference/HomePage
 */
'use strict';

goog.provide('Blockly.Arduino.io');

goog.require('Blockly.Arduino');
/**
 * Function for 'set pin' (X) to a state (Y).
 * Arduino code: setup { pinMode(X, OUTPUT); }
 *               loop  { digitalWrite(X, Y); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */

Blockly.Arduino['soilmoisture'] = function(block) {
  var soilmoisture_pin = block.getFieldValue('soilmoisture_pin');

  Blockly.Arduino.addInclude();

  Blockly.Arduino.addDeclaration('soilmoisture_', '#define soilmoisturepin ' + soilmoisture_pin);

  var pinSetupCode = 'pinMode(' + soilmoisture_pin + ', INPUT);';

  Blockly.Arduino.addSetup('io_' + soilmoisture_pin, pinSetupCode, false);

  Blockly.Arduino.addFunction('soilmoisture_func', 'int readSoilmoisture(){' + '\n' +
  '\t' + 'int soilmoisture_val = analogRead(soilmoistrue_pin);' + '\n' +
  '\t' + 'int soilmoistrue_per = map(170, 1023, 100, 0);' + '\n' +
  '\t' + 'return soilmoisture_per;' + '\n' +
  '}'
  );
  // code in void loop()
  var code;

  return code;
};

Blockly.Arduino['soilmoisture_output'] = function(block) {
  var code = 'readSoilmoisture()';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
