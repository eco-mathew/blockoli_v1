@echo off
if not exist "%userprofile%\appdata\local\Arduino15" (
	mkdir "%userprofile%\appdata\local\Arduino15"
)
COPY Arduino\preferences.txt "%userprofile%\appdata\local\Arduino15"\*.*

start Arduino\CH34x_Install_Windows_v3_4.EXE