controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    effects.blizzard.startScreenEffect()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    effects.bubbles.startScreenEffect()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    effects.confetti.startScreenEffect()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    effects.hearts.startScreenEffect()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    effects.smiles.startScreenEffect()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    effects.starField.startScreenEffect()
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    effects.confetti.endScreenEffect()
    effects.bubbles.endScreenEffect()
    effects.hearts.endScreenEffect()
    effects.smiles.endScreenEffect()
    effects.blizzard.endScreenEffect()
    effects.starField.endScreenEffect()
})
