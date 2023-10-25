
(function() {
    // Set Z index toolbar
    document.getElementsByClassName('toolbar')[0].style.zIndex = '0';

    // Creates dat.gui instance
    if (!window.CC_EDITOR && window.CC_DEV) {globalThis.gui = new window.dat.GUI();}}
).call(this);