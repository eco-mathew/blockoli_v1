'use strict';

goog.provide('Blockly.Arduino.lcd');

goog.require('Blockly.Arduino');


/**
  LCD block
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['lcd'] = function(block) { //lcd 변수 출력해주는 블럭
  var menu = block.getFieldValue('menu'); //주소값 (0x27or 0x3F)받기
  var x = block.getFieldValue('x'); //x좌표 값 받기
  var y = block.getFieldValue('y'); //y좌표 값 받기
  var value = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC) || '0'; //화면에 출력할 변수 받기


  Blockly.Arduino.addInclude('lcd', '#include <LiquidCrystal_I2C.h>');  //라이브러리 추가

  Blockly.Arduino.addDeclaration('lcd', 'LiquidCrystal_I2C lcd('+ menu+', '+'16, 2);'); //LCD 선언


  var setupCode = 'lcd.begin();\n'+'  lcd.clear();\n';
  Blockly.Arduino.addSetup('lcd', setupCode, true); //void setup()에 추가


  var code = 'lcd.setCursor('+ x +','+ y +');\n' +
            'lcd.print('+ value +');\n';
  return code; //void loop()에 추가
};

Blockly.Arduino['lcd_text'] = function(block) { //lcd 문자열 출력해주는 블럭
  var menu = block.getFieldValue('menu');
  var x = block.getFieldValue('x');
  var y = block.getFieldValue('y');
  var content2 = block.getFieldValue('content2');



  Blockly.Arduino.addInclude('lcd', '#include <LiquidCrystal_I2C.h>');

  Blockly.Arduino.addDeclaration('lcd', 'LiquidCrystal_I2C lcd('+ menu+', '+'16, 2);');


  var setupCode = 'lcd.begin();\n'+'  lcd.clear();\n';
  Blockly.Arduino.addSetup('lcd', setupCode, true);

  var code = 'lcd.setCursor('+ x +','+y+');\n' +
              'lcd.print("'+ content2 +'");\n';
  return code;

};

Blockly.Arduino['lcd_clear'] = function(block) {

  var code = 'lcd.clear();\n';
  return code;

};

Blockly.Arduino['lcd_backlight'] = function(block) {

  var code = 'lcd.backlight();\n';
  return code;

};

Blockly.Arduino['lcd_noBacklight'] = function(block) {

  var code = 'lcd.noBacklight();\n';
  return code;

};

Blockly.Arduino['lcd_scrollDisplayRight'] = function(block) {

  var code = 'lcd.scrollDisplayRight();\n';
  return code;

};

Blockly.Arduino['lcd_scrollDisplayLeft'] = function(block) {

  var code = 'lcd.scrollDisplayLeft();\n';
  return code;

};

Blockly.Arduino['lcd_autoscroll'] = function(block) {

  var code = 'lcd.autoscroll();\n';
  return code;

};

Blockly.Arduino['lcd_write'] = function(block) {
  var content = block.getFieldValue('content');

  var code = 'lcd.write('+content+');\n';
  return code;

};
