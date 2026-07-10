// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.54/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var XplanarMiniHmi;
        (function (XplanarMiniHmi) {
            function ShadowMover(posZ, id) {

                var image = document.getElementById(id);
                posZ = posZ * 2;
                /**
                -webkit-filter: drop-shadow( 5px 5px 5px #808080);
                filter: drop-shadow( 5px 5px 5px #808080);
                */
                var propertyShadow = "drop-shadow(" + posZ.toString() + "px " + posZ.toString() + "px " + "5px #808080)";
                image.style.setProperty("-webkit-filter", propertyShadow);

            }
            XplanarMiniHmi.ShadowMover = ShadowMover;
        })(XplanarMiniHmi = Functions.XplanarMiniHmi || (Functions.XplanarMiniHmi = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('ShadowMover', 'TcHmi.Functions.XplanarMiniHmi', TcHmi.Functions.XplanarMiniHmi.ShadowMover);
