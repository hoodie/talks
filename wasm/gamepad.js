window.toggleGamePadControls= () => {
    const pads = {};
    function scangamepads() {
        var gamepads = navigator.getGamepads
            ? navigator.getGamepads()
            : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);
        for (var i = 0; i < gamepads.length; i++) {
            if (gamepads[i]) {
                if (gamepads[i].index in pads) {
                    pads[gamepads[i].index] = gamepads[i];
                } else {
                    addgamepad(gamepads[i]);
                }
            }
        }
    }
    function gamepadButton(val) {
        // var pressed = val == 1.0;
        if (typeof (val) == "object") {
            // pressed = val.pressed;
            val = val.value;
        }
        return val;
    }

    function connecthandler(e) {
        addgamepad(e.gamepad);
    }

    function addgamepad(gamepad) {
        pads[gamepad.index] = gamepad;
        handleGamePad()
    }

    window.onGamePadLeftPressed = () => console.log('gamepad left')
    window.onGamePadRightPressed = () => console.log('gamepad right')
    window.onGamePadUpPressed = () => console.log('gamepad up')
    window.onGamePadDownPressed = () => console.log('gamepad down')
    window.onGamePadL1Pressed = () => console.log('gamepad l1')
    window.onGamePadR1Pressed = () => console.log('gamepad r1')
    window.onGamePadL2Pressed = () => console.log('gamepad l2')
    window.onGamePadR2Pressed = () => console.log('gamepad r2')

    let freeToX = freeToO = freeToSq = freeToTr = true;
    let freeToLe = freeToRi = freeToUp = freeToDo = true;
    let freeToL1 = freeToR1 = true;
    let freeToL2 = freeToR2 = true;

    let keepScanning = true;

    window.disablePadControl = () => keepScanning = false;

    function handleGamePad() {
        gamePad = pads[0];
        if (gamePad) {
            const pressed = gamePad.buttons.map((button, index) => ({ button, index })).filter((event) => event.button.value)
            // if (pressed.length) console.debug({pressed})
        }

        const btnSq = gamePad.buttons[0].pressed;
        const btnX = gamePad.buttons[1].pressed;
        const btnO = gamePad.buttons[2].pressed;
        const btnTr = gamePad.buttons[3].pressed;

        const btnLe = gamePad.buttons[16].pressed;
        const btnRi = gamePad.buttons[17].pressed;
        const btnUp = gamePad.buttons[14].pressed;
        const btnDo = gamePad.buttons[15].pressed;
        const btnL1 = gamePad.buttons[4].pressed
        const btnR1 = gamePad.buttons[5].pressed
        const btnL2 = gamePad.buttons[6].pressed
        const btnR2 = gamePad.buttons[7].pressed

        if (freeToLe && btnLe && document.hasFocus()) { window.onGamePadLeftPressed() }
        if (freeToRi && btnRi && document.hasFocus()) { window.onGamePadRightPressed() }
        if (freeToUp && btnUp && document.hasFocus()) { window.onGamePadUpPressed() }
        if (freeToDo && btnDo && document.hasFocus()) { window.onGamePadDownPressed() }
        if (freeToL1 && btnL1 && document.hasFocus()) { window.onGamePadL1Pressed() }
        if (freeToR1 && btnR1 && document.hasFocus()) { window.onGamePadR1Pressed() }
        if (freeToL2 && btnL2 && document.hasFocus()) { window.onGamePadL2Pressed() }
        if (freeToR2 && btnR2 && document.hasFocus()) { window.onGamePadR2Pressed() }

        freeToSq = !btnSq;
        freeToX = !btnX;
        freeToO = !btnO;
        freeToTr = !btnTr;
        freeToLe = !btnLe;
        freeToRi = !btnRi;
        freeToUp = !btnUp;
        freeToDo = !btnDo;
        freeToL1 = !btnL1;
        freeToR1 = !btnR1;
        freeToL2 = !btnL2;
        freeToR2 = !btnR2;

        // setTimeout(handleGamePad, 100);
        requestAnimationFrame(handleGamePad);
    }

    window.addEventListener("ongamepadconnected", connecthandler);
    window.addEventListener("gamepadconnected", connecthandler);

    console.info('gamepad support')
}

