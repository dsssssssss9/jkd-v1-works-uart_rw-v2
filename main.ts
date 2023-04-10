let cmd = ""
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
})
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.StickFigure)
    bluetooth.startUartService()
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Hash), function () {
    cmd = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
    bluetooth.uartWriteString(cmd)
    if (cmd == "Forward") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
    }
    if (cmd == "Reverse") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 100)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
    }
    if (cmd == "Right") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
    }
    if (cmd == "Left") {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
    }
    if (cmd == "stop") {
        maqueen.motorStop(maqueen.Motors.All)
    }
    if (cmd == "ROT_Left") {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 100)
    }
    if (cmd == "ROT_Right") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
    }
})
