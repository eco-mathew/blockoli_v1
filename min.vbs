Set oShell = WScript.CreateObject("WScript.Shell")
oShell.run "blockoli_coding\arduexec\blockoli.exe"
WScript.Sleep 3500
oShell.SendKeys "% % "
WScript.Sleep 200
oShell.SendKeys "{n 5}"