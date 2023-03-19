+++
title = "CSS / SASS"
+++

```scss
// Change child element(s) when hovering over parent
.parent {
    &:hover {
        & > .child-element, & > .other-child-element {
            color: red;
        }
    }
}

// Box edges
.edge {
    border-width: 1em; // all edges
    border-width: 1em 1em; // <top & bottom> <left & right>
    border-width: 1em 1em 1em; // <top> <left & right> <bottom>
    border-width: 1em 1em 1em 1em; // <top> <right> <bottom> <left>
}

// corners
.corners {
    border-radius: 6px; // all corners
    border-radius: 6px 6px; // <top left & bottom right> <top right & bottom left>
    border-radius: 6px 6px 6px; // <top left> <top right & bottom left> <bottom right>
    border-radius: 6px 6px 6px 6px; // <top left> <top right> <bottom right> <bottom left>
}
```

---

<http://clrs.cc/>