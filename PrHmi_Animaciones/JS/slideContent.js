// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.14.3.431/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var PrHmi_Animaciones;
        (function (PrHmi_Animaciones) {
            function slideContent(id, left) {

                var obj = $(`#${id}`).first();
                var actualPosition = obj.position().left;
                var width = document.getElementById(id).offsetWidth;
                console.log('actual: '+ actualPosition);
                console.log('width: ' + width);
                var newposition = actualPosition+left;
                console.log('left: '+ newposition);

				obj.animate({
					left: `${newposition}px`
				});
            }
            PrHmi_Animaciones.slideContent = slideContent;
        })(PrHmi_Animaciones = Functions.PrHmi_Animaciones || (Functions.PrHmi_Animaciones = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('slideContent', 'TcHmi.Functions.PrHmi_Animaciones', TcHmi.Functions.PrHmi_Animaciones.slideContent);
