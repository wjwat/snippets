+++
title = "Environment"
+++

## Starship Prompt

### Powershell

```powershell
# Install starship
sudo scoop install starship

# Creates your $PROFILE file if it doesn't already exist
# `-PathType Leaf` checks for a file and not a directory explicitly
if (Test-Path $PROFILE -PathType Leaf) {
    New-Item -Path $PROFILE -ItemType File -Force
}

# Set our prompt to use starship
# This just appends it to the end, you can also edit $PROFILE and add it
Add-Content -Path $PROFILE -Value 'Invoke-Expression (&starship init powershell)'

# Also need to install a suitable font. Some I like:
# InconsolataGo Nerd Font Complete Mono Windows Compatible.ttf
# Roboto Mono Nerd Font Complete Mono Windows Compatible.ttf
# Find it here: <https://github.com/ryanoasis/nerd-fonts/releases>
# or: <https://www.nerdfonts.com/font-downloads>
```