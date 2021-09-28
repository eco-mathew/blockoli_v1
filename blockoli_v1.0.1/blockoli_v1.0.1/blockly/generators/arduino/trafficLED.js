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

Blockly.Arduino['traffic_led'] = function(block) {
  var t_redpin = block.getFieldValue('traffic_redPIN');
  var t_yellowpin = block.getFieldValue('traffic_yellowPIN');
  var t_greenpin = block.getFieldValue('traffic_greenPIN');

  var red_state = Blockly.Arduino.valueToCode(
      block, 'RED_STATE', Blockly.Arduino.ORDER_ATOMIC) || 'LOW';
  var yellow_state = Blockly.Arduino.valueToCode(
      block, 'YELLOW_STATE', Blockly.Arduino.ORDER_ATOMIC) || 'LOW';
  var green_state = Blockly.Arduino.valueToCode(
      block, 'GREEN_STATE', Blockly.Arduino.ORDER_ATOMIC) || 'LOW';

  Blockly.Arduino.reservePin(
      block, t_redpin, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
  Blockly.Arduino.reservePin(
      block, t_yellowpin, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
  Blockly.Arduino.reservePin(
      block, t_greenpin, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');

  var pinSetupCode1 = 'pinMode(' + t_redpin + ', OUTPUT);';
  var pinSetupCode2 = 'pinMode(' + t_yellowpin + ', OUTPUT);';
  var pinSetupCode3 = 'pinMode(' + t_greenpin + ', OUTPUT);';

  Blockly.Arduino.addSetup('io_' + t_redpin, pinSetupCode1, false);
  Blockly.Arduino.addSetup('io_' + t_yellowpin, pinSetupCode2, false);
  Blockly.Arduino.addSetup('io_' + t_greenpin, pinSetupCode3, false);

  var code = 'digitalWrite(' + t_redpin + ', ' + red_state + ');\n'
  + 'digitalWrite(' + t_yellowpin + ', ' + yellow_state + ');\n'
  + 'digitalWrite(' + t_greenpin + ', ' + green_state + ');\n';

  return code;
};

Blockly.Arduino['traffic_led_analog'] = function(block) {
  var traffic_redAPin = block.getFieldValue('traffic_redAPIN');
  var traffic_yellowAPin = block.getFieldValue('traffic_yellowAPIN');
  var traffic_greenAPin = block.getFieldValue('traffic_greenAPIN');

  Blockly.Arduino.reservePin(
      block, traffic_redAPin, Blockly.Arduino.PinTypes.OUTPUT, 'Analogue Write');
  Blockly.Arduino.reservePin(
      block, traffic_yellowAPin, Blockly.Arduino.PinTypes.OUTPUT, 'Analogue Write');
  Blockly.Arduino.reservePin(
      block, traffic_greenAPin, Blockly.Arduino.PinTypes.OUTPUT, 'Analogue Write');

  var t_Red_Value = block.getFieldValue('Red_Value');
  var t_Yellow_Value = block.getFieldValue('Yellow_Value');
  var t_Green_Value = block.getFieldValue('Green_Value');

  if(t_Red_Value<0 || t_Yellow_Value<0 || t_Green_Value<0 || t_Red_Value >255 || t_Yellow_Value>255 || t_Green_Value>255){
     block.setWarningText('The analogue value set must be between 0 and 255','pwm_value');
  }
  if(isNaN(t_Red_Value) ||isNaN(t_Yellow_Value) ||isNaN(t_Green_Value)){
      //alert(typeof Red_Value);
      block.setWarningText('The analogue value set must be between 0 and 255','pwm_value');
  }

  var pinSetupCode1 = 'pinMode(' + traffic_redAPin + ', OUTPUT);';
  var pinSetupCode2 = 'pinMode(' + traffic_yellowAPin + ', OUTPUT);';
  var pinSetupCode3 = 'pinMode(' + traffic_greenAPin + ', OUTPUT);';

  Blockly.Arduino.addSetup('io_' + traffic_redAPin, pinSetupCode1, false);
  Blockly.Arduino.addSetup('io_' + traffic_yellowAPin, pinSetupCode2, false);
  Blockly.Arduino.addSetup('io_' + traffic_greenAPin, pinSetupCode3, false);


  var code = 'analogWrite(' + traffic_redAPin + ', ' + t_Red_Value + ');\n'+
  'analogWrite(' + traffic_yellowAPin + ', ' + t_Yellow_Value + ');\n'+
  'analogWrite(' + traffic_greenAPin + ', ' + t_Green_Value + ');\n';
  return code;
};
