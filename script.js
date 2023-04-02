(() => {
    const toggle = document.querySelector('#tocToggle');
    let isToggled = false;

    const toggleText = () => {
        return isToggled
            ? 'COLLAPSE ALL'
            : 'EXPAND ALL';
    };

    const toggleItems = () => {
        isToggled = !isToggled;
        toggle.innerHTML = toggleText();
        if (isToggled) {
            document.querySelectorAll('details').forEach(deet => deet.setAttribute('open', true));
        }
        else {
            document.querySelectorAll('details').forEach(deet => deet.removeAttribute('open'))
        }
    }

    toggle.innerHTML = toggleText();
    toggle.addEventListener("click", toggleItems);
})();