/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileoverview XML toolbox embedded into a JavaScript text string.
 */
'use strict';

/** Create a namespace for the application. */
var Ardublockly = Ardublockly || {};

Ardublockly.TOOLBOX_XML =
'<xml>' +
'  <sep></sep>' +
'  <category id="catBlocklyBasic" name="BlocklyBasic">' +
'  <category id="catLogic" name="Logic">' +
'    <block type="controls_if"></block>' +
'    <block type="logic_compare"></block>' +
'    <block type="logic_operation"></block>' +
'    <block type="logic_negate"></block>' +
'    <block type="logic_boolean"></block>' +
'    <block type="logic_null"></block>' +
'    <block type="logic_ternary"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catLoops" name="Loops">' +
'    <block type="controls_repeat_ext">' +
'      <value name="TIMES">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="controls_whileUntil"></block>' +
'    <block type="controls_for">' +
'      <value name="FROM">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="TO">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'      <value name="BY">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="controls_flow_statements"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catMath" name="Math">' +
'    <block type="math_number"></block>' +
'    <block type="math_arithmetic"></block>' +
'    <block type="math_single"></block>' +
'    <block type="math_trig"></block>' +
'    <block type="math_constant"></block>' +
'    <block type="math_number_property"></block>' +
'    <block type="math_change">' +
'      <value name="DELTA">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="math_round"></block>' +
'    <block type="math_modulo"></block>' +
'    <block type="math_constrain">' +
'      <value name="LOW">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="HIGH">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="math_random_int">' +
'      <value name="FROM">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="TO">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="math_random_float"></block>' +
'    <block type="base_map"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catText" name="Text">' +
'    <block type="text"></block>' +
'    <block type="text_join"></block>' +
'    <block type="text_append">' +
'      <value name="TEXT">' +
'        <block type="text"></block>' +
'      </value>' +
'    </block>' +
'    <block type="text_length"></block>' +
'    <block type="text_isEmpty"></block>' +
//'    <!--block type="text_trim"></block Need to update block -->' +
//'    <!--block type="text_print"></block Part of the serial comms -->' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catVariables" name="Variables">' +
'    <block type="variables_get"></block>' +
'    <block type="variables_set"></block>' +
'    <block type="variables_set">' +
'      <value name="VALUE">' +
'        <block type="variables_set_type"></block>' +
'      </value>' +
'    </block>' +
'    <block type="variables_set_type"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catFunctions" name="Functions" custom="PROCEDURE"></category>' +
'  <sep></sep>' +
'  <category id="catInputOutput" name="Input/Output">' +
'    <block type="io_digitalwrite">' +
'      <value name="STATE">' +
'        <block type="io_highlow"></block>' +
'      </value>' +
'    </block>' +
'    <block type="io_digitalread"></block>' +
'    <block type="io_builtin_led">' +
'      <value name="STATE">' +
'        <block type="io_highlow"></block>' +
'      </value>' +
'    </block>' +
'    <block type="io_analogwrite"></block>' +
'    <block type="io_analogread"></block>' +
'    <block type="io_highlow"></block>' +
'    <block type="io_pulsein">' +
'      <value name="PULSETYPE">' +
'        <shadow type="io_highlow"></shadow>' +
'      </value>' +
'    </block>' +
'    <block type="io_pulsetimeout">' +
'      <value name="PULSETYPE">' +
'        <shadow type="io_highlow"></shadow>' +
'      </value>' +
'      <value name="TIMEOUT">' +
'        <block type="math_number"></block>' +
'      </value>'+
'    </block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catTime" name="Time">' +
'    <block type="time_delay">' +
'      <value name="DELAY_TIME_MILI">' +
'        <block type="math_number">' +
'          <field name="NUM">1000</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="time_delaymicros">' +
'      <value name="DELAY_TIME_MICRO">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="time_millis"></block>' +
'    <block type="time_micros"></block>' +
'    <block type="infinite_loop"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catComms" name="Comms">' +
'    <block type="serial_setup"></block>' +
'    <block type="serial_print"></block>' +
'    <block type="text_prompt_ext">' +
'      <value name="TEXT">' +
'        <block type="text"></block>' +
'      </value>' +
'    </block>' +
'    <block type="spi_setup"></block>' +
'    <block type="spi_transfer"></block>' +
'    <block type="spi_transfer_return"></block>' +
'  </category>'+
'  </category>'+
'  <sep></sep>'+
'  <category id="catBroccoli" name="BroccoliStage">' +
'      <category id="catCrocodile" name="Crocodile_kit">' +
'       <block type="arduino_functions"></block>' +
'       <block type="controls_if"></block>' +
'       <block type="logic_compare"></block>' +
'       <block type="math_number"></block>' +
'       <block type="math_random_int">' +
'        <value name="FROM">' +
'          <block type="math_number">' +
'            <field name="NUM">1</field>' +
'          </block>' +
'        </value>' +
'        <value name="TO">' +
'          <block type="math_number">' +
'            <field name="NUM">100</field>' +
'          </block>' +
'        </value>' +
'       </block>' +
'       <block type="variables_get"></block>' +
'       <block type="variables_set"></block>' +
'       <block type="procedures_defnoreturn">' +
'         <field name="NAME">함수 이름</field>' +
'       </block>' +
'       <block type="procedures_callnoreturn">' +
'         <field name="NAME">함수 이름</field>' +
'       </block>' +
'       <block type="io_digitalwrite">' +
'        <value name="STATE">' +
'          <block type="io_highlow"></block>' +
'        </value>' +
'       </block>' +
'       <block type="io_digitalread"></block>' +
'       <block type="io_highlow"></block>' +
'       <block type="time_delay">' +
'         <value name="DELAY_TIME_MILI">' +
'           <block type="math_number">' +
'             <field name="NUM">1000</field>' +
'           </block>' +
'         </value>' +
'       </block>' +
'       <block type="servo_write">' +
'        <value name="SERVO_ANGLE">' +
'          <block type="math_number">' +
'            <field name="NUM">90</field>' +
'          </block>' +
'        </value>' +
'       </block>' +
'       <block type="servo_read"></block>' +
'      </category>' +
'      <category id="catSmartTrashcan" name="SmartTrashcan">' +
'        <block type="arduino_functions"></block>' +
'        <block type="controls_if"></block>' +
'        <block type="logic_compare"></block>' +
'        <block type="math_number"></block>' +
'        <block type="variables_get"></block>' +
'        <block type="variables_set"></block>' +
'        <block type="time_delay">' +
'          <value name="DELAY_TIME_MILI">' +
'            <block type="math_number">' +
'              <field name="NUM">1000</field>' +
'            </block>' +
'          </value>' +
'        </block>' +
'        <block type="ultra_sonic"></block>'+
'        <block type="ultra_output"></block>'+
'        <block type="servo_write">' +
'         <value name="SERVO_ANGLE">' +
'           <block type="math_number">' +
'             <field name="NUM">90</field>' +
'           </block>' +
'         </value>' +
'        </block>' +
'        <block type="servo_read"></block>' +
'      </category>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catBPLABkit" name="BPLAB KIT"></category>' +
'  <sep></sep>' +
'  <category id="catSmartCity" name="smartcity">' +
'      <category id="catTrafficLED" name="trafficled">' +
'        <block type="traffic_led">'+
'          <value name="RED_STATE">' +
'            <block type="io_highlow"></block>' +
'          </value>' +
'          <value name="YELLOW_STATE">' +
'            <block type="io_highlow"></block>' +
'          </value>' +
'          <value name="GREEN_STATE">' +
'            <block type="io_highlow"></block>' +
'          </value>' +
'        </block>' +
'        <block type="traffic_led_analog"></block>' +
'      </category>' +
'      <category id="catLED" name="LED">' +
'        <block type="3_led"></block>'+
'        <block type="3_led_digital">'+
'          <value name="TRED_STATE">' +
'            <block type="io_highlow"></block>' +
'          </value>' +
'          <value name="TGREEN_STATE">' +
'            <block type="io_highlow"></block>' +
'          </value>' +
'          <value name="TBLUE_STATE">' +
'            <block type="io_highlow"></block>' +
'          </value>' +
'        </block>' +
'      </category>' +
'      <category id="catUltra_sonic" name="Ultra_sonic">' +
'        <block type="ultra_sonic"></block>'+
'        <block type="ultra_output"></block>'+
'      </category>'+
'     <category id="catAudio" name="Audio">' +
'       <block type="io_tone">' +
'         <field name="TONEPIN">0</field>' +
'           <value name="FREQUENCY">' +
'           <shadow type="math_number">' +
'             <field name="NUM">220</field>' +
'           </shadow>' +
'           </value>' +
'       </block>' +
'       <block type="io_notone"></block>' +
'     </category>' +
'     <category id="catMotors" name="Motors">' +
'       <block type="servo_write">' +
'         <value name="SERVO_ANGLE">' +
'             <block type="math_number">' +
'               <field name="NUM">90</field>' +
'             </block>' +
'         </value>' +
'         </block>' +
'        <block type="servo_read"></block>' +
'           <block type="stepper_config">' +
'             <field name="STEPPER_PIN1">1</field>' +
'               <field name="STEPPER_PIN2">2</field>' +
'                <value name="STEPPER_STEPS">' +
'                 <block type="math_number">' +
'                   <field name="NUM">100</field>' +
'                 </block>' +
'                </value>' +
'               <value name="STEPPER_SPEED">' +
'                <block type="math_number">' +
'                 <field name="NUM">10</field>' +
'                </block>' +
'               </value>' +
'           </block>' +
'        <block type="stepper_step">' +
'           <value name="STEPPER_STEPS">' +
'              <block type="math_number">' +
'                <field name="NUM">10</field>' +
'              </block>' +
'           </value>' +
'       </block>' +
'      </category>' +
'      <category id="catillu" name="illu">' +
'        <block type="illuminance_analog"></block>'+
'        <block type="illuminance_analog_output"></block>'+
'        <block type="illuminance_digital"></block>'+
'        <block type="illuminance_digital_output"></block>'+
'      </category>' +
'      <category id="catdht" name="dht">' +
'        <block type="dht"></block>'+
'        <block type="dht_temp"></block>'+
'        <block type="dht_humid"></block>'+
'      </category>' +
'      <category id="catlcd" name="lcd">' +
'        <block type="lcd_setup"></block>'+
'        <block type="lcd_setcursor"></block>'+
'        <block type="lcd_print"></block>'+
'        <block type="lcd_text"></block>'+
'        <block type="lcd_clear"></block>'+
'        <block type="lcd_backlight"></block>'+
'        <block type="lcd_noBacklight"></block>'+
'        <block type="lcd_scrollDisplayRight"></block>'+
'        <block type="lcd_scrollDisplayLeft"></block>'+
'        <block type="lcd_autoscroll"></block>'+
'        <block type="lcd_write"></block>'+
'     </category>' +
'     <category id="cat7segment" name="sevensegment">' +
'        <block type="sevensegment"></block>'+
'        <block type="setbrightness"></block>'+
'        <block type="showNumberDec"></block>'+
'     </category>'+
'    </category>'+
'    <sep></sep>' +
'    <category id="catAirPurifier" name="AirPurifier">' +
'      <category id="catlcd" name="lcd">' +
'        <block type="lcd_setup"></block>'+
'        <block type="lcd_setcursor"></block>'+
'        <block type="lcd_print"></block>'+
'        <block type="lcd_text"></block>'+
'        <block type="lcd_clear"></block>'+
'        <block type="lcd_backlight"></block>'+
'        <block type="lcd_noBacklight"></block>'+
'        <block type="lcd_scrollDisplayRight"></block>'+
'        <block type="lcd_scrollDisplayLeft"></block>'+
'        <block type="lcd_autoscroll"></block>'+
'        <block type="lcd_write"></block>'+
'      </category>' +
'      <category id="catFineDust" name="FineDust">' +
'        <block type="finedust"></block>' +
'        <block type="finedust_output"></block>' +
'      </category>' +
'      <category id="catdht" name="dht">' +
'        <block type="dht"></block>'+
'        <block type="dht_temp"></block>'+
'        <block type="dht_humid"></block>'+
'      </category>' +
'     </category>'+
'     <sep></sep>'+
'     <category id="catSmartFarm" name="Smartfarm">' +
'      <category id="catlcd" name="lcd">' +
'        <block type="lcd_setup"></block>'+
'        <block type="lcd_setcursor"></block>'+
'        <block type="lcd_print"></block>'+
'        <block type="lcd_text"></block>'+
'        <block type="lcd_clear"></block>'+
'        <block type="lcd_backlight"></block>'+
'        <block type="lcd_noBacklight"></block>'+
'        <block type="lcd_scrollDisplayRight"></block>'+
'        <block type="lcd_scrollDisplayLeft"></block>'+
'        <block type="lcd_autoscroll"></block>'+
'        <block type="lcd_write"></block>'+
'      </category>' +
'      <category id="catillu" name="illu">' +
'        <block type="illuminance_analog"></block>'+
'        <block type="illuminance_analog_output"></block>'+
'        <block type="illuminance_digital"></block>'+
'        <block type="illuminance_digital_output"></block>'+
'      </category>' +
'      <category id="catdht" name="dht">' +
'        <block type="dht"></block>'+
'        <block type="dht_temp"></block>'+
'        <block type="dht_humid"></block>'+
'      </category>' +
'      <category id="catSoilmoisture" name="Soilmoisture">' +
'        <block type="soilmoisture"></block>' +
'        <block type="soilmoisture_output"></block>' +
'      </category>' +
'     </category>' +
'</xml>';
