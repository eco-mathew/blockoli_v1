/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for Arduino Digital and Analogue input and output
 *     functions. The Arduino function syntax can be found at
 *     http://arduino.cc/en/Reference/HomePage
 *
 * TODO: maybe change this to a "PIN" BlocklyType
 */
'use strict';

goog.provide('Blockly.Blocks.io');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.io.HUE = 250;

Blockly.Blocks['lcd_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LCD 주소 설정")
        .appendField(new Blockly.FieldDropdown([["0x27","0x27"], ["0x3F","0x3F"]]), "menu");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("I2C LCD 1602 모듈 설정 블록입니다. 주소를 선택하고 setup 공간에 넣습니다.");
 this.setHelpUrl("");
}
};

Blockly.Blocks['lcd_setcursor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("좌표설정")
        .appendField("x값: ")
        .appendField(new Blockly.FieldNumber(0, 0, 15), 'x')
        .appendField(" y값: ")
        .appendField(new Blockly.FieldNumber(0, 0, 1), 'y');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("LCD에 출력할 좌표를 설정합니다.");
 this.setHelpUrl("");
}
};

Blockly.Blocks['lcd_print'] = {
  init: function() {
    this.appendValueInput('VALUE')
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('데이터 출력');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("LCD에 데이터를 출력할 수 있는 블록입니다.");
 this.setHelpUrl("");
}
};

Blockly.Blocks['lcd_text'] = {
  init: function() {
    this.appendDummyInput();
    this.appendDummyInput()
        .appendField("문자열 출력")
        .appendField(new Blockly.FieldTextInput("문자열"), "content2");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lcd_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("화면 내용 지우기");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("lcd.clear() 함수 블럭입니다.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lcd_backlight'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("백라이트 켜기");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("lcd.backlight() 함수 블럭입니다.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lcd_noBacklight'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("백라이트 끄기");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("lcd.noBacklight() 함수 블럭입니다.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lcd_scrollDisplayRight'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("우측으로 1칸 스크롤");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("lcd.scrollDisplayRight() 함수 블럭입니다.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lcd_scrollDisplayLeft'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("좌측으로 1칸 스크롤");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("lcd.scrollDisplayLeft() 함수 블럭입니다.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lcd_autoscroll'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("우에서 좌로 스크롤");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("lcd.autoscroll() 함수 블럭입니다.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lcd_write'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("사용자문자 출력")
        .appendField(new Blockly.FieldTextInput(""), "content");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("lcd.write() 함수 블럭입니다.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lcd_createchar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("이모티콘 생성")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"]]), 'createcharNum');
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "LCD_00")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "LCD_01")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "LCD_02")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "LCD_03")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "LCD_04");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "LCD_10")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "LCD_11")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "LCD_12")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "LCD_13")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "LCD_14");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "LCD_20")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "LCD_21")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "LCD_22")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "LCD_23")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "LCD_24");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "LCD_30")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "LCD_31")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "LCD_32")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "LCD_33")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "LCD_34");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "LCD_40")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "LCD_41")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "LCD_42")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "LCD_43")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "LCD_44");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "LCD_50")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "LCD_51")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "LCD_52")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "LCD_53")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "LCD_54");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "LCD_60")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "LCD_61")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "LCD_62")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "LCD_63")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "LCD_64");     
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "LCD_70")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "LCD_71")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "LCD_72")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "LCD_73")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "LCD_74");                
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
  this.setTooltip("lcd.createChar() 함수 블럭입니다.");
  this.setHelpUrl("");
  }

  
};