+++
title = "Batch Scripts"
+++

```bat
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:: Replacing character/strings
SET str=blah blah blah
SET str=%str:blah=foo%
echo %str%
:: foo foo foo
```