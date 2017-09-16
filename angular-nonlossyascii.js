/**
 * 
 * @version v1.0.1 - 2017-09-16
 * @link http://github.com/UEGMobile/angular-nonlossyascii.git
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function () {

    "use strict";

    angular.module("NonLossyAscii", [])

        .factory('NLAscii', function() {
            return {
                encodeToNonLossyAscii: function(text){

                    if(!text || !angular.isString(text)){
                        return null;
                    }
                    var resultText = '';
                    for(var i=0 ; i< text.length; i++){
                        var char = text.charCodeAt(i);
                        if(char < 128){
                            resultText += text.charAt(i);
                        }else if(char <256){
                            resultText += '\\'+char.toString(8);
                        }else{
                            resultText += '\\u'+char.toString(16);
                        }
                    }
                    return resultText;
                },

                decodeFromNonLossAscii: function(text){

                    if (!angular.isString(text)) {
                        return text;
                    }

                    //UNICODE_HEX_PATTERN
                    var matchHexResult = text.match(/([\\]{1})([u]{1})([0-9A-Fa-f]{4})/g);
                    if(matchHexResult){
                        for(var z=0; z<matchHexResult.length; z++){
                            var unicodeChar = parseInt(matchHexResult[z].substring(2,matchHexResult[z].length),16);
                            text = text.replace(matchHexResult[z],String.fromCharCode(unicodeChar));
                        }
                    }
                    //UNICODE_OCT_PATTERN
                    var matchOctResult = text.match(/([\\]{1})([0-7]{3})/g);
                    if(matchOctResult){
                        for(var z=0; z<matchOctResult.length; z++){
                            var unicodeChar = parseInt(matchOctResult[z].substring(1,matchOctResult[z].length),8);
                            text = text.replace(matchOctResult[z],String.fromCharCode(unicodeChar));
                        }
                    }
                    return text;
                }

            };
        })

        .filter("NonLossyAscii", [ 'NLAscii', function (NLAscii) {
            return function (input) {
                return NLAscii.decodeFromNonLossAscii(input);
            };
        }]);
}());
