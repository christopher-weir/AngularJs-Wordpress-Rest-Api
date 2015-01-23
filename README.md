AngularJs-Wordpress-Rest-Api
============================

A group of AngularJS services to interact with the [Wordpress REST API](http://wp-api.org/) plugin.

## Usage:

 - Add `angular-wp-rest.min.js` to your site:
```html
<script src="angular-wp-rest.min.js"></script>
```
 - Add a dependency to the `ilnAngularWp` module in your application.
```js
angular.module('MyApp', ['ilnAngularWp']);
```

##Posts: $ilnWpPosts
============================
Add $ilnWpPosts to your controller
```js
.controller('ControllerName', [
        '$scope',
        '$ilnWpPosts',
        function ( $scope, $ilnWpPosts ) { ...
```


### $ilnWpPosts.getPosts( callback )

Returns an array of all posts.

e.g:
```js
    $ilnWpPosts.getPosts( function( _posts ){
        console.log( _posts );
    });
```


### $ilnWpPosts.getPostById( id, callback )


Returns a specific post by ID.

e.g:
```js
    $ilnWpPosts.getPostById( '1', function( _post ){
        console.log( _post );
    });
```


### $ilnWpPosts.getPostByCategoryName( slug, callback )


Returns posts in a category. Use the category slug.

e.g:
```js
    $ilnWpPosts.getPostByCategoryName( 'news', function( _post ){
        console.log( _post );
    });
```


### $ilnWpPosts.getCustomPostType( slug, callback )


Returns posts in a custom post type. Use the post type slug.

e.g:
```js
    $ilnWpPosts.getPostByCategoryName( 'custom_post_type', function( _post ){
        console.log( _post );
    });
```