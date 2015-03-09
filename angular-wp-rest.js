var ilnAngularWp = angular.module('angular-wp-rest', []);
/**
 * @ngdoc service
 * @name core
 *
 * @description
 * Gets the correct json url from the plugin
 */
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

/**
 * @ngdoc service
 * @name core.ilnPages
 *
 * @description
 * A service to return pages from the wp db
 */
ilnAngularWp
.factory('$ilnWpPages', [


    '$http',
    '$ilnWpCore',

    function( $http, $ilnWpCore ) {

        return  {


            /**
             * @name getPageById
             * @description Get a page by its ID
             * @param {string} _id - The ID of the page, needs to be a string.
             * @param {function} _callback - Callback after the http request has been returned
             * @returns {array} _data - The results if success or else the error
             *
             */
            getPageById: function( _id, _callback ){

                $http({

                    method  : 'GET',
                    url     : $ilnWpCore.getJsonUrl() + 'posts/' + _id

                }).
                success( function( _data ) {
                    _callback( _data );
                }).
                error( function( _data ) {
                    _callback( _data );
                });
            },


            /**
             * @name getPages
             * @description Get all pages from the db
             * @param {function} _callback - Callback after the posts have been returned
             * @returns {array} _data - The results if success or else the error
             *
             */
            getPages: function( _callback ){

                $http({

                    method  : 'GET',
                    url     : $ilnWpCore.getJsonUrl() + 'posts?type[]=page'

                }).
                success( function( _data ) {
                    _callback( _data );
                }).
                error( function( _data ) {
                    _callback( _data );
                });
            }

        };
    }
])


;

/**
 * @ngdoc service
 * @name core.ilnPosts
 *
 * @description
 * A service to return posts from the wp db
 */
ilnAngularWp
.factory('$ilnWpPosts', [


    '$http',
    '$ilnWpCore',

    function( $http, $ilnWpCore ) {

        return  {


            /**
             * @name getCustomPostType
             * @description Get custom post types by slug name
             * @param {string} _slug - The slug name of the custom post type
             * @param {function} _callback - Callback after the posts have been returned
             * @returns {array} _data - The results if success or else the error
             *
             */
            getCustomPostType: function( _slug, _callback ){

                $http({

                    method  : 'GET',
                    url     : $ilnWpCore.getJsonUrl() + 'posts?type[]=' + _slug

                }).
                success( function( _data ) {
                    _callback( _data );
                }).
                error( function( _data ) {
                    _callback( _data );
                });
            },


            /**
             * @name getPostByCategoryName
             * @description Get posts by the category slug
             * @param {string} _slug - The slug name of the category
             * @param {function} _callback - Callback after the posts have been returned
             * @returns {array} _data - The results if success or else the error
             *
             */
            getPostByCategoryName: function( _slug, _callback ){

                $http({

                    method  : 'GET',
                    url     : $ilnWpCore.getJsonUrl() + 'posts?filter[category_name]=' + _slug

                }).
                success( function( _data ) {
                    _callback( _data );
                }).
                error( function( _data ) {
                    _callback( _data );
                });
            },


            /**
             * @name getPostById
             * @description Get a post by its id
             * @param {string} _id - The ID of the post needs to be a string.
             * @param {function} _callback - Callback after the posts have been returned
             * @returns {array} _data - The results if success or else the error
             *
             */
            getPostById: function( _id, _callback ){

                $http({

                    method  : 'GET',
                    url     : $ilnWpCore.getJsonUrl() + 'posts/' + _id

                }).
                success( function( _data ) {
                    _callback( _data );
                }).
                error( function( _data ) {
                    _callback( _data );
                });
            },


            /**
             * @name getPosts
             * @description Get all posts
             * @param {function} _callback - Callback after the posts have been returned
             * @returns {array} _data - The results if success or else the error
             *
             */
            getPosts: function( _callback ){

                $http({

                    method  : 'GET',
                    url     : $ilnWpCore.getJsonUrl() + 'posts'

                }).
                success( function( _data ) {
                    _callback( _data );
                }).
                error( function( _data ) {
                    _callback( _data );
                });
            }

        };
    }
])


;

/**
 * @ngdoc service
 * @name core.ilnWpTaxonomies
 *
 * @description
 * A service to return the wordpress taxonomies being used
 */
ilnAngularWp
.factory('$ilnWpTaxonomies', [


    '$http',
    '$ilnWpCore',

    function( $http, $ilnWpCore ) {

        return  {


            /**
             * @name getCategories
             * @description Get all categories being used by the site
             * @param {function} _callback - Callback
             * @returns {array} _data - The results if success or else the error
             *
             */
            getCategories: function( _callback ){

                $http({

                    method  : 'GET',
                    url     : $ilnWpCore.getJsonUrl() + 'taxonomies/category/terms'

                }).
                success( function( _data ) {
                    _callback( _data );
                }).
                error( function( _data ) {
                    _callback( _data );
                });
            },


            /**
             * @name getTaxonomyTerms
             * @description Get all terms of a specific taxonomy
             * @param {string} _taxonomy - The taxonomy to call
             * @param {function} _callback - Callback
             * @returns {array} _data - The results if success or else the error
             *
             */
            getTaxonomyTerms: function( _taxonomy, _callback ){

                $http({

                    method  : 'GET',
                    url     : $ilnWpCore.getJsonUrl() + 'taxonomies/' + _taxonomy + '/terms'

                }).
                success( function( _data ) {
                    _callback( _data );
                }).
                error( function( _data ) {
                    _callback( _data );
                });
            },


            /**
             * @name getTaxonomy
             * @description Get a specific taxonomy
             * @param {string} _taxonomy - The taxonomy to call
             * @param {function} _callback - Callback
             * @returns {array} _data - The results if success or else the error
             *
             */
            getTaxonomy: function( _taxonomy, _callback ){

                $http({

                    method  : 'GET',
                    url     : $ilnWpCore.getJsonUrl() + 'taxonomies/' + _taxonomy

                }).
                success( function( _data ) {
                    _callback( _data );
                }).
                error( function( _data ) {
                    _callback( _data );
                });
            },


            /**
             * @name getTaxonomy
             * @description Get all taxonomies being used in the site
             * @param {function} _callback - Callback
             * @returns {array} _data - The results if success or else the error
             *
             */
             getTaxonomies: function( _callback ){

                $http({

                    method  : 'GET',
                    url     : $ilnWpCore.getJsonUrl() + 'taxonomies'

                }).
                success( function( _data ) {
                    _callback( _data );
                }).
                error( function( _data ) {
                    _callback( _data );
                });
            }

        };
    }
])


;
