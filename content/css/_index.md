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
```