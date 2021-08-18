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

Blockly.Blocks['soilmoisture'] = {
  init: function() {
    this.appendDummyInput();
    this.appendDummyInput()
        .appendField("토양습도센서 값 읽기 핀 번호")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), 'soilmoisture_pin');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("토양습도센서 FC-28 블록입니다. 토양습도센서 값을 측정하는 함수를 정의합니다.");
    this.setHelpUrl("");
  },
  updateFields: function() {
      Blockly.Arduino.Boards.refreshBlockFieldDropdown(
          this, 'soilmoisture_pin', 'digitalPins');
  }
};

Blockly.Blocks['soilmoisture_output'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("토양습도 측정 값");
    this.setOutput(true, Blockly.Types.LARGE_NUMBER.output);
    this.setColour(120);
    this.setTooltip("토양습도 값을 출력합니다.");
  },
  getBlockType: function() {
    return Blockly.Types.LARGE_NUMBER;
  }
};
