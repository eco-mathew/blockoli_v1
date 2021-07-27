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

Blockly.Blocks['3_led'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("3색LED ")
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, { alt: "*", flipRtl: "FALSE" })); //센서 이미지 추가
    this.appendDummyInput()
        .appendField("  빨간색 ")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.pwmPins), 'Red_PIN')
        .appendField("   밝기(0~255) ")
        .appendField(new Blockly.FieldNumber(0, 0, 255), "Red_Value");
    this.appendDummyInput()
        .appendField("  초록색 ")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.pwmPins), 'Green_PIN')
        .appendField("   밝기(0~255) ")
        .appendField(new Blockly.FieldNumber(0, 0, 255), "Green_Value");
    this.appendDummyInput()
        .appendField("  파란색 ")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.pwmPins), 'Blue_PIN')
        .appendField("   밝기(0~255) ")
        .appendField(new Blockly.FieldNumber(0, 0, 255), "Blue_Value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("3색 LED block입니다.");
 this.setHelpUrl("");
},
  updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'Red_PIN', 'pwmPins');
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'Green_PIN', 'pwmPins');
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'Blue_PIN', 'pwmPins');
}

};

Blockly.Blocks['3_led_digital'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" 3색 LED");
    this.setColour(230);
    this.appendValueInput('RED_STATE')
        .appendField(" 빨간색 핀")
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'RED_DPIN')
        .setCheck(Blockly.Types.BOOLEAN.checkList);
    this.appendValueInput('GREEN_STATE')
        .appendField(" 초록색 핀")
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'GREEN_DPIN')
        .setCheck(Blockly.Types.BOOLEAN.checkList);
    this.appendValueInput('BLUE_STATE')
        .appendField(" 파란색 핀")
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'BLUE_DPIN')
        .setCheck(Blockly.Types.BOOLEAN.checkList);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("3색 LED 디지털 블록입니다. 원하는 LED 핀을 설정하고, HIGH 또는 LOW를 통해 LED를 ON/OFF 할 수 있습니다.");
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'RED_DPIN', 'digitalPins');
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'GREEN_DPIN', 'digitalPins');
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'BLUE_DPIN', 'digitalPins');
  }
};
