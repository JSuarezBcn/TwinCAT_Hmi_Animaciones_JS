// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.14.3.431/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var PrHmi_Animaciones;
        (function (PrHmi_Animaciones) {
            function slideCarrousel(idContent, frame, step) {

                var obj = $(`#${idContent}`).first();
                var actualPosition = obj.position().left;
                var width = document.getElementById(idContent).offsetWidth;
                var newposition;

                var absPos = Math.abs(actualPosition);
                var absStep = Math.abs(step);

                // comprueba que la posicion actual sea un multiplo de la anchura del contenido
                if ((absPos % absStep === 0) || (absPos===0)){

                    // avanza la vista a la derecha, el contenido se desplaza a la izquierda, decrementa posicion
                    if(step<0){
                        if (absPos<(width-absStep)){
                            newposition = actualPosition-absStep;
				            obj.animate({
					            left: `${newposition}px`
				            }, 200);
                        }
                    }
                    // avanza la vista a la izquierda, el contenido se desplaza a la derecha, incrementa posicion
                    else {

                        if (absPos>=absStep){
                            newposition = actualPosition+step;
				            obj.animate({
					            left: `${newposition}px`
				            }, 200);
                        } 
                    }

                }

            }
            PrHmi_Animaciones.slideCarrousel = slideCarrousel;
        })(PrHmi_Animaciones = Functions.PrHmi_Animaciones || (Functions.PrHmi_Animaciones = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('slideCarrousel', 'TcHmi.Functions.PrHmi_Animaciones', TcHmi.Functions.PrHmi_Animaciones.slideCarrousel);
