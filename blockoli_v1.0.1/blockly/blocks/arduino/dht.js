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

Blockly.Blocks.time.HUE = 120;

Blockly.Blocks['dht'] = {
  init: function() {
    this.appendDummyInput();
    this.appendDummyInput()
        .appendField("온습도 센서 DHT11")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), 'dhtpin');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setColour(Blockly.Blocks.time.HUE);
    this.setTooltip("온습도센서를 라이브러리를 이용해 정의합니다.");
    this.setHelpUrl("");
  },

  updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
      this, 'dhtpin', 'digitalPins');
  }
};

Blockly.Blocks['dht_temp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("온도값");
    this.setOutput(true, Blockly.Types.LARGE_NUMBER.output);
    this.setColour(Blockly.Blocks.time.HUE);
    this.setTooltip("온습도 센서로 측정한 온도값을 출력합니다.");
  },
  getBlockType: function() {
    return Blockly.Types.LARGE_NUMBER;
  }
};

Blockly.Blocks['dht_humid'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("습도값");
    this.setOutput(true, Blockly.Types.LARGE_NUMBER.output);
    this.setColour(Blockly.Blocks.time.HUE);
    this.setTooltip("온습도 센서로 측정한 습도값을 출력합니다.");
  },
  getBlockType: function() {
    return Blockly.Types.LARGE_NUMBER;
  }
};
