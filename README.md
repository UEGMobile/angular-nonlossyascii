angular-nonlossyasscii
==============

AngularJS factory and filters for Non Lossy Ascii String Encoding (7-bit verbose ASCII to represent all Unicode characters).

[![Build Status](https://travis-ci.org/UEGMobile/angular-nonlossyascii.png?branch=master)](https://travis-ci.org/UEGMobile/angular-nonlossyascii)

## Important

*My first recommendation to encode strings on any system is UTF-8. But if you need compatibility with an existing platform, you can use this js.*

## Installation

You can install this package either with npm or with bower.

### npm

```shell
npm install angular-nonlossyascii --save
```

Then add NonLossyAscii as a dependency for your app:

```javascript
angular.module('myApp', [require('NonLossyAscii')]);
```

### bower

```shell
bower install angular-nonlossyascii --save
```

Add a `<script>` to your `index.html`:

```html
<script src="/bower_components/angular-nonlossyascii/angular-nonlossyascii.min.js"></script>
```

Then add `NonLossyAscii` as a dependency for your app:

```javascript
angular.module('myApp', ['NonLossyAscii']);
```

## Usage

Require the module in your app and call:

    NLAscii.encodeToNonLossyAscii(text) 

and 

	NLAscii.decodeFromNonLossAscii(text).

Example:

``` javascript
// add the angular-nonlossyasscii module to your app
myapp = angular.module('myapp', ['NonLossyAscii']);

// inject it into your component
myapp.factory('FancyFactory', function(NLAscii){
  return {
    codeThatNeedsNonLossAscii: function() {
      return NLAscii.encodeToNonLossyAscii("El trozo de texto est\341ndar de Lorem Ipsum usado desde el a\361o 1500");
    }
  };
});
```

You can also decode strings.

```javascript
NLAscii.encodeToNonLossyAscii("El trozo de texto estándar de Lorem Ipsum usado desde el año 1500");
// El trozo de texto est\341ndar de Lorem Ipsum usado desde el a\361o 1500
```

You can also use on twig templates to decode from Non Loss Ascii encoding:

```twig
<span>{{ varText | NLAscii }}</span>
```

## References

- https://developer.apple.com/documentation/foundation/nsnonlossyasciistringencoding
- https://stackoverflow.com/questions/13800183/nsnonlossyasciistringencoding-equivalent-for-android/34424525



