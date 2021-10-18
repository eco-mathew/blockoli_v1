// Ardublockly generated sketch
#include "DHT.h"

#include <LiquidCrystal_I2C.h>

int _ED_86_A0_EC_96_91_EC_8A_B5_EB_8F_84_EC_84_BC_EC_84_9C_EA_B0_92;
long _EC_A1_B0_EB_8F_84_EC_84_BC_EC_84_9C_EA_B0_92;
String _EC_98_A8_EB_8F_84_EA_B0_92;
String _EC_8A_B5_EB_8F_84_EA_B0_92;

#define DHTPIN4 4
#define DHTTYPE DHT11
DHT dht(DHTPIN4 , DHTTYPE);
#define illumi_Apin A1
LiquidCrystal_I2C lcd(0x27, 16, 2);
byte emoticon0[] = {
B00100,
B01010,
B01010,
B01110,
B01110,
B11111,
B11111,
B01110
};
byte emoticon1[] = {
B00100,
B00100,
B01010,
B01010,
B10001,
B11111,
B11111,
B01110
};
byte emoticon2[] = {
B10000,
B00110,
B01001,
B01000,
B01000,
B01001,
B00110,
B00000
};
byte emoticon3[] = {
B00100,
B01110,
B01110,
B01110,
B01110,
B00100,
B00000,
B00100
};
byte emoticon4[] = {
B00100,
B00100,
B01110,
B01110,
B11111,
B11111,
B11111,
B01110
};
byte emoticon5[] = {
B00000,
B10001,
B10001,
B00000,
B00000,
B10001,
B10001,
B01110
};
byte emoticon6[] = {
B00000,
B10011,
B11010,
B00100,
B01011,
B11001,
B00000,
B00000
};

void setup() {
  dht.begin();
  pinMode(A1, INPUT);
  lcd.begin();
  lcd.clear();

  lcd.createChar(0, emoticon0);
  lcd.createChar(1, emoticon1);
  lcd.createChar(2, emoticon2);
  lcd.createChar(3, emoticon3);
  lcd.createChar(4, emoticon4);
  lcd.createChar(5, emoticon5);
  lcd.createChar(6, emoticon6);
  pinMode(3, OUTPUT);

  lcd.setCursor(1,0);
  lcd.print("Smart Farm Kit");
  delay(1000);
  lcd.setCursor(0,1);
  lcd.print("BPLAB CodingEdu");
  delay(1000);
  lcd.backlight();
  lcd.clear();

}

void loop() {
  _ED_86_A0_EC_96_91_EC_8A_B5_EB_8F_84_EC_84_BC_EC_84_9C_EA_B0_92 = 50;
  _EC_A1_B0_EB_8F_84_EC_84_BC_EC_84_9C_EA_B0_92 = analogRead(illumi_Apin);
  _EC_98_A8_EB_8F_84_EA_B0_92 = (String)(dht.readTemperature());
  _EC_8A_B5_EB_8F_84_EA_B0_92 = (String)(dht.readHumidity());
  if (_EC_A1_B0_EB_8F_84_EC_84_BC_EC_84_9C_EA_B0_92 < 400) {
    digitalWrite(3, LOW);
  } else {
    digitalWrite(3, HIGH);
  }
  if (_ED_86_A0_EC_96_91_EC_8A_B5_EB_8F_84_EC_84_BC_EC_84_9C_EA_B0_92 <= 30) {
    lcd.setCursor(13,0);
    lcd.write((byte)3);
    lcd.setCursor(14,0);
    lcd.write((byte)4);
  } else if (_ED_86_A0_EC_96_91_EC_8A_B5_EB_8F_84_EC_84_BC_EC_84_9C_EA_B0_92 <= 70) {
    lcd.setCursor(13,0);
    lcd.print(" ");
    lcd.setCursor(14,0);
    lcd.write((byte)5);
  } else {
    lcd.setCursor(13,0);
    lcd.write((byte)3);
    lcd.setCursor(14,0);
    lcd.write((byte)6);
  }
  lcd.setCursor(1,0);
  lcd.print((String("MOIST:") + String(_ED_86_A0_EC_96_91_EC_8A_B5_EB_8F_84_EC_84_BC_EC_84_9C_EA_B0_92)));
  lcd.setCursor(10,0);
  lcd.print("%");
  lcd.setCursor(1,1);
  lcd.write((byte)0);
  lcd.setCursor(3,1);
  lcd.print(_EC_98_A8_EB_8F_84_EA_B0_92);
  lcd.write((byte)1);
  lcd.setCursor(7,1);
  lcd.write((byte)2);
  lcd.setCursor(9,1);
  lcd.print(_EC_98_A8_EB_8F_84_EA_B0_92);
  lcd.print("%");
  delay(500);

}