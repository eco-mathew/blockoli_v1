/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for using Arduino FineDust sensor to measure Dust density in the air
 *
 * TODO: maybe change this to a "PIN" BlocklyType
 */
 'use strict';

 goog.provide('Blockly.Blocks.io');

 goog.require('Blockly.Blocks');
 goog.require('Blockly.Types');

 Blockly.Blocks['finedust'] = {
   init: function() {
     this.appendDummyInput();
     this.appendDummyInput()
         .appendField("미세먼지 센서")
         .appendField("  V_LED ")
         .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), 'finedust_vled_pin')
         .appendField("  Vo ")
         .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), 'finedust_vo_pin');
     this.setInputsInline(true);
     this.setPreviousStatement(true, null);
     this.setNextStatement(true, null);
     this.setColour(120);
     this.setTooltip("미세먼지센서 GP2Y1010AU0F 블록입니다. 미세먼지 값을 측정하는 함수를 정의합니다.");
     this.setHelpUrl("");
   },
   updateFields: function() {
       Blockly.Arduino.Boards.refreshBlockFieldDropdown(
           this, 'finedust_vled_pin', 'digitalPins');
       Blockly.Arduino.Boards.refreshBlockFieldDropdown(
           this, 'finedust_vo_pin', 'digitalPins');
   }
};
Blockly.Blocks['finedust_output'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("미세먼지 측정 값");
    this.setOutput(true, Blockly.Types.LARGE_NUMBER.output);
    this.setColour(120);
    this.setTooltip("측정한 미세먼지 값을 출력합니다.");
  },
  getBlockType: function() {
    return Blockly.Types.LARGE_NUMBER;
  }
};
