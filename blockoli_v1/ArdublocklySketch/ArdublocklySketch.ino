// Ardublockly generated sketch
void setup() {
  pinMode(2, INPUT);
  pinMode(5, OUTPUT);
}

void loop() {
  if (digitalRead(2) == LOW) {
    digitalWrite(5, HIGH);
  }
  digitalWrite(5, LOW);

}