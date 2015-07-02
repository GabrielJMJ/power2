power2
=======
Get what power two numbers has.

## Usage
For Node.JS:
```js
var Power2 = require('power2');
```
For HTML:
```html
<script src="power2.js"></script>
```
### Basic
```js
console.log(Power2(50)); //32, 16, 2
```

### Util example
```js
var Person = {
    Options: {
        HAIR:  1
      , MOUTH: 2
      , EYES:  4
      , NOSE:  8
    }
  , create: function (options) {
        options = Power2(options);
        var features = [];

        if (options.contains(Options.HAIR)) {
            features.push('HAIR');
        }

        if (options.contains(Options.MOUTH)) {
            features.push('MOUTH');
        }

        if (options.contains(Options.EYES)) {
            features.push('EYES');
        }

        if (options.contains(Options.NOSE)) {
            features.push('NOSE');
        }

        return features;
    }
}

var person = Person.create(Person.Options.HAIR | Person.Options.MOUTH | Person.Options.EYES);

Array.prototype.contains = function (value) {
    for (var k in this) {
        if (this[k] == value) {
            return true;
        }
    }

    return false;
}
```