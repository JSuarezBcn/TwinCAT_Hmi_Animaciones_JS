// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.14.3.258/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var Ej_Iconos;
        (function (Ej_Iconos) {
            function Rotation(id_image, velocity) {

                const img = document.getElementById(id_image);
                let angulo = 0;

                function animar() {
                    angulo += velocity;
                    img.style.transform = `rotate(${angulo}deg)`;
                    requestAnimationFrame(animar);
                }

                animar();
            }
            Ej_Iconos.Rotation = Rotation;
        })(Ej_Iconos = Functions.Ej_Iconos || (Functions.Ej_Iconos = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('Rotation', 'TcHmi.Functions.Ej_Iconos', TcHmi.Functions.Ej_Iconos.Rotation);
