// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.14.3.431/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var PrHmi_Animaciones;
        (function (PrHmi_Animaciones) {
            function slideMenu(id, moveX) {

				//const menu = document.getElementById(id);
				var menu = $(`#${id}`).first();
				var position = menu.position();

				if (position.left!=0){
				//mostrar menu
					menu.animate({
						left: '0px'
					});
				} else {
				//ocultar menu
					menu.animate({
						left: `-${moveX}px`
					});
				}

            }
            PrHmi_Animaciones.slideMenu = slideMenu;
        })(PrHmi_Animaciones = Functions.PrHmi_Animaciones || (Functions.PrHmi_Animaciones = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('slideMenu', 'TcHmi.Functions.PrHmi_Animaciones', TcHmi.Functions.PrHmi_Animaciones.slideMenu);
