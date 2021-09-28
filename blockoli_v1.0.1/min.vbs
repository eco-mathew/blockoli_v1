Set oShell = WScript.CreateObject("WScript.Shell")
oShell.run "blockoli_v1.0.1\arduexec\blockoli.exe"
WScript.Sleep 3500
oShell.SendKeys "% % "
WScript.Sleep 200
oShell.SendKeys "{n 5}"