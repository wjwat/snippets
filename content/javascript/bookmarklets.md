+++
title = "Bookmarklets"
+++

## Readable

Convert most text to something more readable

Source: <https://www.arp242.net/bookmarklets.html>

```js
javascript:(function() {
    document.querySelectorAll('p, li, div').forEach(function(n) {
        n.style.color = '#000';
        n.style.font = '500 16px/1.7em sans-serif';
    });
})();
```

## Fixed

Convert fixed and sticky positioning to absolute

Source: <https://www.arp242.net/bookmarklets.html>

```js
javascript:(function() {
    document.querySelectorAll('*').forEach(function(n) {
        var p = getComputedStyle(n).getPropertyValue('position');
        if (p === 'fixed' || p === 'sticky') {
            n.style.cssText += ' ; position: absolute !important;';
        }
    });
})();
```