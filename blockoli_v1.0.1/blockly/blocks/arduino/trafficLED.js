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
Blockly.Blocks['traffic_led'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" 신호등 LED");
    this.setColour("#7c60eb");
    this.appendValueInput('RED_STATE')
        .appendField(" 빨간색 핀")
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'traffic_redPIN')
        .setCheck(Blockly.Types.BOOLEAN.checkList);
    this.appendValueInput('YELLOW_STATE')
        .appendField(" 노란색 핀")
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'traffic_yellowPIN')
        .setCheck(Blockly.Types.BOOLEAN.checkList);
    this.appendValueInput('GREEN_STATE')
        .appendField(" 초록색 핀")
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'traffic_greenPIN')
        .setCheck(Blockly.Types.BOOLEAN.checkList);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("신호등 LED 블록입니다. 원하는 LED 핀을 설정하고, HIGH 또는 LOW를 통해 LED를 ON/OFF 할 수 있습니다.");
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'traffic_redPIN', 'digitalPins');
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'traffic_yellowPIN', 'digitalPins');
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'traffic_greenPIN', 'digitalPins');
  }
};

Blockly.Blocks['traffic_led_analog'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField(" 신호등 LED");
    this.appendDummyInput()
        .appendField("  빨간색 ")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.pwmPins), 'traffic_redAPIN')
        .appendField("   밝기(0~255) ")
        .appendField(new Blockly.FieldNumber(0, 0, 255), "Red_Value");
    this.appendDummyInput()
        .appendField("  노란색 ")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.pwmPins), 'traffic_yellowAPIN')
        .appendField("   밝기(0~255) ")
        .appendField(new Blockly.FieldNumber(0, 0, 255), "Yellow_Value");
    this.appendDummyInput()
        .appendField("  초록색 ")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.pwmPins), 'traffic_greenAPIN')
        .appendField("   밝기(0~255) ")
        .appendField(new Blockly.FieldNumber(0, 0, 255), "Green_Value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#7c60eb");
    this.setTooltip("밝기 조절 가능한 신호등 LED 블록입니다. PWM핀에 연결해서 LED의 밝기를 조절할 수 있습니다.");
    this.setHelpUrl("");
},
  updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'traffic_redAPIN', 'pwmPins');
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'traffic_yellowAPIN', 'pwmPins');
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'traffic_greenAPIN', 'pwmPins');
}
};
