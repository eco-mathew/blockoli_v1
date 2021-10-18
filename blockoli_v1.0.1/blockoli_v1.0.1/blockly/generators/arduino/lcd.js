'use strict';

goog.provide('Blockly.Arduino.lcd');

goog.require('Blockly.Arduino');


/**
  LCD block
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['lcd_setup'] = function(block) { //lcd 변수 출력해주는 블럭
   var menu = block.getFieldValue('menu'); //주소값 (0x27or 0x3F)받기

   Blockly.Arduino.addInclude('lcd', '#include <LiquidCrystal_I2C.h>');  //라이브러리 추가

   Blockly.Arduino.addDeclaration('lcd', 'LiquidCrystal_I2C lcd('+ menu+', '+'16, 2);'); //LCD 선언

   var setupCode = 'lcd.begin();\n'+ '  lcd.clear();\n';
   Blockly.Arduino.addSetup('lcd', setupCode, true); //void setup()에 추가

   var code = '';
   return code; //void loop()에 추가
 };

Blockly.Arduino['lcd_setcursor'] = function(block) { //lcd 변수 출력해주는 블럭
  var x = block.getFieldValue('x'); //x좌표 값 받기
  var y = block.getFieldValue('y'); //y좌표 값 받기

  var code = 'lcd.setCursor('+ x +','+ y +');\n';
  return code; //void loop()에 추가
};

Blockly.Arduino['lcd_print'] = function(block) { //lcd 변수 출력해주는 블럭
  var value = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC) || '0'; //화면에 출력할 변수 받기

  var code = 'lcd.print('+ value +');\n';
  return code; //void loop()에 추가
};

Blockly.Arduino['lcd_text'] = function(block) { //lcd 문자열 출력해주는 블럭
  var content2 = block.getFieldValue('content2');

  var code = 'lcd.print("'+ content2 +'");\n';
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

  var code = 'lcd.write((byte)'+content+');\n';
  return code;

};

Blockly.Arduino['lcd_createchar'] = function(block) {
  var charNum = block.getFieldValue('createcharNum');

  var cbox_lcd_00 = block.getFieldValue('LCD_00') == 'TRUE';
  var cbox_lcd_01 = block.getFieldValue('LCD_01') == 'TRUE';
  var cbox_lcd_02 = block.getFieldValue('LCD_02') == 'TRUE';
  var cbox_lcd_03 = block.getFieldValue('LCD_03') == 'TRUE';
  var cbox_lcd_04 = block.getFieldValue('LCD_04') == 'TRUE';
  var cbox_lcd_10 = block.getFieldValue('LCD_10') == 'TRUE';
  var cbox_lcd_11 = block.getFieldValue('LCD_11') == 'TRUE';
  var cbox_lcd_12 = block.getFieldValue('LCD_12') == 'TRUE';
  var cbox_lcd_13 = block.getFieldValue('LCD_13') == 'TRUE';
  var cbox_lcd_14 = block.getFieldValue('LCD_14') == 'TRUE';
  var cbox_lcd_20 = block.getFieldValue('LCD_20') == 'TRUE';
  var cbox_lcd_21 = block.getFieldValue('LCD_21') == 'TRUE';
  var cbox_lcd_22 = block.getFieldValue('LCD_22') == 'TRUE';
  var cbox_lcd_23 = block.getFieldValue('LCD_23') == 'TRUE';
  var cbox_lcd_24 = block.getFieldValue('LCD_24') == 'TRUE';
  var cbox_lcd_30 = block.getFieldValue('LCD_30') == 'TRUE';
  var cbox_lcd_31 = block.getFieldValue('LCD_31') == 'TRUE';
  var cbox_lcd_32 = block.getFieldValue('LCD_32') == 'TRUE';
  var cbox_lcd_33 = block.getFieldValue('LCD_33') == 'TRUE';
  var cbox_lcd_34 = block.getFieldValue('LCD_34') == 'TRUE';
  var cbox_lcd_40 = block.getFieldValue('LCD_40') == 'TRUE';
  var cbox_lcd_41 = block.getFieldValue('LCD_41') == 'TRUE';
  var cbox_lcd_42 = block.getFieldValue('LCD_42') == 'TRUE';
  var cbox_lcd_43 = block.getFieldValue('LCD_43') == 'TRUE';
  var cbox_lcd_44 = block.getFieldValue('LCD_44') == 'TRUE';
  var cbox_lcd_50 = block.getFieldValue('LCD_50') == 'TRUE';
  var cbox_lcd_51 = block.getFieldValue('LCD_51') == 'TRUE';
  var cbox_lcd_52 = block.getFieldValue('LCD_52') == 'TRUE';
  var cbox_lcd_53 = block.getFieldValue('LCD_53') == 'TRUE';
  var cbox_lcd_54 = block.getFieldValue('LCD_54') == 'TRUE';
  var cbox_lcd_60 = block.getFieldValue('LCD_60') == 'TRUE';
  var cbox_lcd_61 = block.getFieldValue('LCD_61') == 'TRUE';
  var cbox_lcd_62 = block.getFieldValue('LCD_62') == 'TRUE';
  var cbox_lcd_63 = block.getFieldValue('LCD_63') == 'TRUE';
  var cbox_lcd_64 = block.getFieldValue('LCD_64') == 'TRUE';
  var cbox_lcd_70 = block.getFieldValue('LCD_70') == 'TRUE';
  var cbox_lcd_71 = block.getFieldValue('LCD_71') == 'TRUE';
  var cbox_lcd_72 = block.getFieldValue('LCD_72') == 'TRUE';
  var cbox_lcd_73 = block.getFieldValue('LCD_73') == 'TRUE';
  var cbox_lcd_74 = block.getFieldValue('LCD_74') == 'TRUE';


  Blockly.Arduino.addInclude();
  Blockly.Arduino.addDeclaration('lcd_' + charNum, 'byte emoticon' + charNum + '[] = {\n' +
  'B' + Number(cbox_lcd_00) + Number(cbox_lcd_01) + Number(cbox_lcd_02) + Number(cbox_lcd_03) + Number(cbox_lcd_04) + ',\n' +
  'B' + Number(cbox_lcd_10) + Number(cbox_lcd_11) + Number(cbox_lcd_12) + Number(cbox_lcd_13) + Number(cbox_lcd_14) + ',\n' +
  'B' + Number(cbox_lcd_20) + Number(cbox_lcd_21) + Number(cbox_lcd_22) + Number(cbox_lcd_23) + Number(cbox_lcd_24) + ',\n' +
  'B' + Number(cbox_lcd_30) + Number(cbox_lcd_31) + Number(cbox_lcd_32) + Number(cbox_lcd_33) + Number(cbox_lcd_34) + ',\n' +
  'B' + Number(cbox_lcd_40) + Number(cbox_lcd_41) + Number(cbox_lcd_42) + Number(cbox_lcd_43) + Number(cbox_lcd_44) + ',\n' +
  'B' + Number(cbox_lcd_50) + Number(cbox_lcd_51) + Number(cbox_lcd_52) + Number(cbox_lcd_53) + Number(cbox_lcd_54) + ',\n' +
  'B' + Number(cbox_lcd_60) + Number(cbox_lcd_61) + Number(cbox_lcd_62) + Number(cbox_lcd_63) + Number(cbox_lcd_64) + ',\n' +
  'B' + Number(cbox_lcd_70) + Number(cbox_lcd_71) + Number(cbox_lcd_72) + Number(cbox_lcd_73) + Number(cbox_lcd_74) + '\n' +
  '};');
  var setupCode = 'lcd.createChar(' + charNum + ', emoticon' + charNum + ');';
  Blockly.Arduino.addSetup('lcd_' + charNum, setupCode, false); //void setup()에 추가

  var code = '';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};