// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.14.3.360/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var PrHmi_Animaciones;
        (function (PrHmi_Animaciones) {
            function blink(id, run) {
                var obj = document.getElementById(id, run);
                if (run){
                    obj.classList.add('blink1s');
                    console.log('blink on');
                } else {
                    obj.classList.remove('blink1s');
                    console.log('blink off');
                }
                
            }
            PrHmi_Animaciones.blink = blink;
        })(PrHmi_Animaciones = Functions.PrHmi_Animaciones || (Functions.PrHmi_Animaciones = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('blink', 'TcHmi.Functions.PrHmi_Animaciones', TcHmi.Functions.PrHmi_Animaciones.blink);
