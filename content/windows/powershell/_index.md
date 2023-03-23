+++
title = "Powershell"
+++

```powershell
# Search directory for any JS file with case-insensitive `test` in the name
# display each foudn file's fullname, but replace the drive & beginning directory
# with nothing
gci -r *test*.js | % FullName | ForEach-Object { $_ -replace "C:\\src\\" }
```