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

```js
// Redirects to the actual image if you're looking at the images associated with a google map
// business page so it can be downloaded. Google map -> search for business -> photos

/*
  // Cruft
  const zed = window.APP_OPTIONS.flat(Infinity);
  const stem = zed.find(e => typeof e === 'string' && e.includes('imagery/report'));
*/
javascript:(function() {
  const currUrl = new URL(document.URL);
  const imageKey = currUrl.searchParams.get('imagekey');
  const url = "https://www.google.com/local/imagery/report/?cb_client=unknown_client.imagery_viewer&image_key=" + imageKey;

  fetch(url)
    .then(response => response.text())
    .then(bodyText => {
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(bodyText, 'text/html');

      const imageUrl = htmlDoc.getElementById('preview-image').src;
      window.location = imageUrl;
    });
})()
```