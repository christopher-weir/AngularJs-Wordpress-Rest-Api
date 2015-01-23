AngularJs-Wordpress-Rest-Api
============================

A group of AngularJS services to interact with the [Wordpress REST API](http://wp-api.org/) plugin.

## Usage:

 - Add `angular-wp-rest.min.js` to your site:
```html
<script src="angular-wp-rest.min.js"></script>
```
 - Add a dependency to the `angular-wp-rest` module in your application.
```js
angular.module('MyApp', ['angular-wp-rest']);
```

============================

###Posts: $ilnWpPosts

Add $ilnWpPosts to your controller
```js
.controller('ControllerName', [
        '$scope',
        '$ilnWpPosts',
        function ( $scope, $ilnWpPosts ) { ...
```


#### $ilnWpPosts.getPosts( callback )

Returns an array of all posts.

e.g:
```js
    $ilnWpPosts.getPosts( function( posts ){
        console.log( posts );
    });
```


#### $ilnWpPosts.getPostById( id, callback )


Returns a specific post by ID.

e.g:
```js
    $ilnWpPosts.getPostById( '1', function( post ){
        console.log( post );
    });
```


#### $ilnWpPosts.getPostByCategoryName( slug, callback )


Returns posts in a category. Use the category slug.

e.g:
```js
    $ilnWpPosts.getPostByCategoryName( 'news', function( posts ){
        console.log( posts );
    });
```


#### $ilnWpPosts.getCustomPostType( slug, callback )


Returns posts in a custom post type. Use the post type slug.

e.g:
```js
    $ilnWpPosts.getPostByCategoryName( 'custom_post_type', function( posts ){
        console.log( posts );
    });
```

============================

###Pages: $ilnWpPages

Add $ilnWpPosts to your controller
```js
.controller('ControllerName', [
        '$scope',
        '$ilnWpPages',
        function ( $scope, $ilnWpPages ) { ...
```


#### $ilnWpPosts.getPages( callback )


Returns all pages.

e.g:
```js
    $ilnWpPosts.getPages( function( pages ){
        console.log( pages );
    });
```


#### $ilnWpPosts.getPageById( id, callback )


Returns a page by id.

e.g:
```js
    $ilnWpPosts.getPageById( '3', function( page ){
        console.log( page );
    });
```




