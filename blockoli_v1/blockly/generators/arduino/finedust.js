'use strict';

goog.provide('Blockly.Arduino.FineDust');

goog.require('Blockly.Arduino');

Blockly.Arduino['finedust'] = function(block) {
  var finedust_vled_pin = block.getFieldValue('finedust_vled_pin');
  var finedust_vo_pin = block.getFieldValue('finedust_vo_pin');

  /*Blockly.Arduino.reservePin(
    block, finedust_vled_pin, Blockly.Arduino.PinTypes.finedust, 'finedust_vled_pin');
  Blockly.Arduino.reservePin(
    block, finedust_vo_pin, Blockly.Arduino.PinTypes.finedust, 'finedust_vo_pin');*/

  Blockly.Arduino.addInclude();

  Blockly.Arduino.addDeclaration('finedust_', '#define VLEDPIN  '+finedust_vled_pin + '\n'+
  '#define VOPIN ' + finedust_vo_pin + '\n\n' + 'int dust_val = 0;' + '\n' + 'float Vo_value = 0;' + '\n' + 'float Voltage = 0;');

  var pinSetupCode1 = 'pinMode(' + finedust_vled_pin + ', OUTPUT);';
  var pinSetupCode2 = 'pinMode(' + finedust_vo_pin + ', INPUT);';

  Blockly.Arduino.addSetup('io_' + finedust_vled_pin, pinSetupCode1, false);
  Blockly.Arduino.addSetup('io_' + finedust_vo_pin, pinSetupCode2, false);

  Blockly.Arduino.addFunction('finedust_func', 'int readDust(){' + '\n' +
  '\t' + 'digitalWrite(VLEDPIN, LOW);' + '\n' +
  '\t' + 'delayMicroseconds(280);' + '\n' +
  '\t' + 'Vo_value = analogRead(VOPIN);' + '\n' +
  '\t' + 'delayMicroseconds(40);' + '\n' +
  '\t' + 'digitalWrite(VLEDPIN, HIGH);' + '\n' +
  '\t' + 'delayMicroseconds(9680);' + '\n\n' +
  '\t' + 'Voltage = Vo_value * 5.0 / 1024.0;' + '\n\n' +
  '\t' + 'if(Voltage < 0.1){' + '\n' +
  '\t\t' + 'dust_val = 0;' + '\n' +
  '\t' + '} else if(Voltage < 0.8){' + '\n' +
  '\t\t' + 'dust_val = 10 * (5 * (Voltage - 0.1));' + '\n' +
  '\t' + '} else if(Voltage < 1){' + '\n' +
  '\t\t' + 'dust_val = 10 + 15 * (10 * (Voltage - 0.8));' + '\n' +
  '\t' + '} else {' +'\n' +
  '\t\t' + 'dust_val = 40 + 16 * (10 * (Voltage - 1));' + '\n' +
  '\t' + '}' + '\n' +
  '\t' + 'return dust_val;' + '\n' +
  '}'
  );
  // code in void loop()
  var code;

  return code;
};

Blockly.Arduino['finedust_output'] = function(block) {
  var code = 'readDust()';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
