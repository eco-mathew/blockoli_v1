/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Code generator for Arduino Digital and Analogue input/output.
 *     Arduino built in function docs: http://arduino.cc/en/Reference/HomePage
 */
'use strict';

goog.provide('Blockly.Arduino.illuminance');

goog.require('Blockly.Arduino');

Blockly.Arduino['illuminance_analog'] = function(block) {
  var pin = block.getFieldValue('PIN');
  Blockly.Arduino.reservePin(
      block, pin, Blockly.Arduino.PinTypes.INPUT, 'Analogue Read');

  Blockly.Arduino.addInclude();

  Blockly.Arduino.addDeclaration('illuminance', '#define illumi_Apin ' + pin);

  var pinSetupCode = 'pinMode(' + pin + ', INPUT);';
  Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, true);

  var code;
  return code;
};

Blockly.Arduino['illuminance_analog_output'] = function(block) {
  var code = 'analogRead(illumi_Apin)';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['illuminance_digital'] = function(block) {
  var pin = block.getFieldValue('PIN');
  Blockly.Arduino.reservePin(
      block, pin, Blockly.Arduino.PinTypes.INPUT, 'Digital Read');

  Blockly.Arduino.addInclude();

  Blockly.Arduino.addDeclaration('illuminance', '#define illumi_Dpin ' + pin);

  var pinSetupCode = 'pinMode(' + pin + ', INPUT);';
  Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, true);

  var code;
  return code;
};

Blockly.Arduino['illuminance_digital_output'] = function(block) {
  var code = 'digitalRead(illumi_Dpin)';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
