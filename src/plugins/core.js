'use strict';

ilnAngularWp
.factory('$ilnWpCore', [


    '$http',

    function( $http ) {

        // cache the json url
        var jsonUrl = null;

        return  {

            getJsonUrl: function(){

                if( jsonUrl === null ){
                    jsonUrl = document.querySelector("link[rel='https://github.com/WP-API/WP-API']").href + '/';
                    return jsonUrl;
                }else{
                    return jsonUrl;
                }
            }

        };
    }
])


;
