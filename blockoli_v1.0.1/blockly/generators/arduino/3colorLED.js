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

Blockly.Arduino['3_led'] = function(block) {
  var Red_Pin = block.getFieldValue('Red_PIN');
  Blockly.Arduino.reservePin(
      block, Red_Pin, Blockly.Arduino.PinTypes.OUTPUT, 'Analogue Write');
  var Green_Pin = block.getFieldValue('Green_PIN');
  Blockly.Arduino.reservePin(
      block, Green_Pin, Blockly.Arduino.PinTypes.OUTPUT, 'Analogue Write');
  var Blue_Pin = block.getFieldValue('Blue_PIN');
  Blockly.Arduino.reservePin(
      block, Blue_Pin, Blockly.Arduino.PinTypes.OUTPUT, 'Analogue Write');

  var Red_Value = block.getFieldValue('Red_Value');
  var Green_Value = block.getFieldValue('Green_Value');
  var Blue_Value = block.getFieldValue('Blue_Value');

  if(Red_Value<0 || Green_Value<0 || Blue_Value<0 || Red_Value >255 || Green_Value>255 || Blue_Value>255){
     block.setWarningText('The analogue value set must be between 0 and 255','pwm_value');
  }
  if(isNaN(Red_Value) ||isNaN(Green_Value) ||isNaN(Blue_Value)){
      //alert(typeof Red_Value);
      block.setWarningText('The analogue value set must be between 0 and 255','pwm_value');
  }

  var pinSetupCode1 = 'pinMode(' + Red_Pin + ', OUTPUT);';
  var pinSetupCode2 = 'pinMode(' + Green_Pin + ', OUTPUT);';
  var pinSetupCode3 = 'pinMode(' + Blue_Pin + ', OUTPUT);';

  Blockly.Arduino.addSetup('io_' + Red_Pin, pinSetupCode1, false);
  Blockly.Arduino.addSetup('io_' + Green_Pin, pinSetupCode2, false);
  Blockly.Arduino.addSetup('io_' + Blue_Pin, pinSetupCode3, false);


  var code = 'analogWrite(' + Red_Pin + ', ' + Red_Value + ');\n'+
  'analogWrite(' + Green_Pin + ', ' + Green_Value + ');\n'+
  'analogWrite(' + Blue_Pin + ', ' +Blue_Value + ');\n';
  return code;
};

Blockly.Arduino['3_led_digital'] = function(block) {
  var Red_DPin = block.getFieldValue('RED_DPIN');
  var Green_DPin = block.getFieldValue('GREEN_DPIN');
  var Blue_DPin = block.getFieldValue('BLUE_DPIN');

  var red_state = Blockly.Arduino.valueToCode(
      block, 'RED_STATE', Blockly.Arduino.ORDER_ATOMIC) || 'LOW';
  var green_state = Blockly.Arduino.valueToCode(
      block, 'GREEN_STATE', Blockly.Arduino.ORDER_ATOMIC) || 'LOW';
  var blue_state = Blockly.Arduino.valueToCode(
      block, 'BLUE_STATE', Blockly.Arduino.ORDER_ATOMIC) || 'LOW';

  Blockly.Arduino.reservePin(
      block, Red_DPin, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
  Blockly.Arduino.reservePin(
      block, Green_DPin, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
  Blockly.Arduino.reservePin(
      block, Blue_DPin, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');

  var pinSetupCode1 = 'pinMode(' + Red_DPin + ', OUTPUT);';
  var pinSetupCode2 = 'pinMode(' + Green_DPin + ', OUTPUT);';
  var pinSetupCode3 = 'pinMode(' + Blue_DPin + ', OUTPUT);';

  Blockly.Arduino.addSetup('io_' + Red_DPin, pinSetupCode1, false);
  Blockly.Arduino.addSetup('io_' + Green_DPin, pinSetupCode2, false);
  Blockly.Arduino.addSetup('io_' + Blue_DPin, pinSetupCode3, false);

  var code = 'digitalWrite(' + Red_DPin + ', ' + red_state + ');\n'
  + 'digitalWrite(' + Green_DPin + ', ' + green_state + ');\n'
  + 'digitalWrite(' + Blue_DPin + ', ' + blue_state + ');\n';

  return code;
};
