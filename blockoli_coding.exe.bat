::[Bat To Exe Converter]
::
::YAwzoRdxOk+EWAjk
::fBw5plQjdCuDJF6N4H4yJBRXRwuONVSsV/tMprnH7eaIoUYSWOsAbt6VivrfHOIf5Ubvepok6X9CnfQFDxRWMBuoYW8=
::YAwzuBVtJxjWCl3EqQJgSA==
::ZR4luwNxJguZRRnk
::Yhs/ulQjdF+5
::cxAkpRVqdFKZSDk=
::cBs/ulQjdF+5
::ZR41oxFsdFKZSDk=
::eBoioBt6dFKZSDk=
::cRo6pxp7LAbNWATEpCI=
::egkzugNsPRvcWATEpCI=
::dAsiuh18IRvcCxnZtBJQ
::cRYluBh/LU+EWAnk
::YxY4rhs+aU+JeA==
::cxY6rQJ7JhzQF1fEqQJQ
::ZQ05rAF9IBncCkqN+0xwdVs0
::ZQ05rAF9IAHYFVzEqQJQ
::eg0/rx1wNQPfEVWB+kM9LVsJDGQ=
::fBEirQZwNQPfEVWB+kM9LVsJDGQ=
::cRolqwZ3JBvQF1fEqQJQ
::dhA7uBVwLU+EWDk=
::YQ03rBFzNR3SWATElA==
::dhAmsQZ3MwfNWATElA==
::ZQ0/vhVqMQ3MEVWAtB9wSA==
::Zg8zqx1/OA3MEVWAtB9wSA==
::dhA7pRFwIByZRRnk
::Zh4grVQjdCuDJF6N4H4yJBRXRwuONVSsV/tMprnH7eaIoUYSWOsAe4Df07qJbuUL7yU=
::YB416Ek+ZG8=
::
::
::978f952a14a936cc963da21a135fa983
@echo off
if not exist %localappdata%\Arduino15 (
	mkdir %localappdata%\Arduino15
)
COPY blockoli_v1.0.1\preferences.txt %localappdata%\Arduino15\*.*

if not exist %systemdrive%\WCH.CN (
	start %cd%\Arduino\CH34x_Install_Windows_v3_4.EXE
	timeout 15
	start %cd%\blockoli_v1.0.1\arduexec\blockoli.exe

) else (
	start %cd%\blockoli_v1.0.1\arduexec\blockoli.exe
)