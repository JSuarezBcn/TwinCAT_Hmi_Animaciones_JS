// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.14.3.431/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var PrHmi_Animaciones;
        (function (PrHmi_Animaciones) {
            function Countdown(idTextblock, preset) {

                const textBox = TcHmi.Controls.get(idTextblock);

                let tiempo = preset

                const intervalo = setInterval(() => {

                    tiempo--;
                    textBox.setText(tiempo);
                    console.log(`Quedan ${tiempo} segundos`);

                    if (tiempo <= 0) {
                        clearInterval(intervalo);
                        console.log("¡Tiempo terminado!");
                    }
                }, 1000);

            }
            PrHmi_Animaciones.Countdown = Countdown;
        })(PrHmi_Animaciones = Functions.PrHmi_Animaciones || (Functions.PrHmi_Animaciones = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('Countdown', 'TcHmi.Functions.PrHmi_Animaciones', TcHmi.Functions.PrHmi_Animaciones.Countdown);
