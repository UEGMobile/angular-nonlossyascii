angular-nonlossyasscii
==============

AngularJS factory and filters for Non Lossy Ascii String Encoding.

Copyright (C) 2017, Pablo Núñez

[![Build Status](https://travis-ci.org/UEGMobile/angular-nonlossyascii.png?branch=master)](https://travis-ci.org/UEGMobile/angular-nonlossyascii)

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


