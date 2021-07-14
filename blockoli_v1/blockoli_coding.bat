@echo off
if not exist %UserProfile%\AppData\Local\Arduino15 (
	mkdir %UserProfile%\AppData\Local\Arduino15
)
COPY .\preferences.txt %UserProfile%\AppData\Local\Arduino15\*.*

start arduexec\blockoli.exe