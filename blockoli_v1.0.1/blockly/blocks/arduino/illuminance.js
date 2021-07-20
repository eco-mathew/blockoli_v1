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

Blockly.Blocks['illuminance_analog'] = {
  /**
   * Block for reading an analogue input.
   * @this Blockly.Block
   */
  init: function() {
    this.appendDummyInput();
    this.setHelpUrl('http://arduino.cc/en/Reference/AnalogRead');
    this.appendDummyInput()
        .appendField("조도센서 ")
        .appendField(Blockly.Msg.ARD_ANALOGREAD)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.analogPins), 'PIN');
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.ARD_ANALOGREAD_TIP);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ffc93c");
    this.setTooltip("조도 센서 블럭입니다.");
    this.setHelpUrl("");
  },
  /** @return {!string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(this, 'PIN', 'analogPins');
  }
};

Blockly.Blocks['illuminance_analog_output'] = {
  /**
   * Block for reading an analogue input.
   * @this Blockly.Block
   */
  init: function() {
    this.appendDummyInput();
    this.appendDummyInput()
        .appendField("조도센서 아날로그 값 출력")
    this.setOutput(true, Blockly.Types.LARGE_NUMBER.output);
    this.setInputsInline(true);
    this.setColour("#ffc93c");
    this.setTooltip("조도 센서에서 측정한 아날로그 값을 출력하는 블럭입니다.");
  },
  /** @return {!string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.LARGE_NUMBER;
  }
};

Blockly.Blocks['illuminance_digital'] = {
  /**
   * Block for creating a 'read pin'.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/AnalogRead');
    this.appendDummyInput();
    this.appendDummyInput()
        .appendField("조도센서 ")
        .appendField(Blockly.Msg.ARD_DIGITALREAD)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'PIN');
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.ARD_ANALOGREAD_TIP);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ffc93c");
    this.setTooltip("조도 센서 블럭입니다.");
    this.setHelpUrl("");
  },
  /** @return {!string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.BOOLEAN;
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'PIN', 'digitalPins');
  }
};

Blockly.Blocks['illuminance_digital_output'] = {
  /**
   * Block for reading an analogue input.
   * @this Blockly.Block
   */
  init: function() {
    this.appendDummyInput();
    this.appendDummyInput()
        .appendField("조도센서 디지털 값 출력")
    this.setOutput(true, Blockly.Types.BOOLEAN.output);
    this.setInputsInline(true);
    this.setColour("#ffc93c");
    this.setTooltip("조도 센서에서 측정한 디지털 값을 출력하는 블럭입니다.");
  },
  /** @return {!string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.BOOLEAN;
  }
};
