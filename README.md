# JWM 1.1

JWM is an acronym for jQuery Widget Markup. The JWL.js makes possible to use jQuery widgets without writing a single line of JavaScript.

## Quick start

Before use of JWM.js:
```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="jquery-ui.css" />
    <script src="jquery.js"></script>
    <script src="jquery-ui.js"></script>
    <script>
        $(function () {
            $("#datepicker").datepicker({ minDate: 0, maxDate: "+1M +10D" });
            $("#spinner" ).spinner();
        });
    </script>
</head>
<body>
    <p>
        Date:<input type="text" id="datepicker" />
    </p>
    <p>
        Number:<input type="text" id="spinner" />
    </p>
</body>
</html>
```

After use of JWM.js:
```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="jquery-ui.css" />
    <script src="jquery.js"></script>
    <script src="jquery-ui.js"></script>
    <script src="JWM.js"></script>
    <script src="init-widgets.js"></script>
</head>
<body>
    <p>
        Date:<input type="text" data-jwd="datepicker" data-jwd-options="minDate: 0, maxDate: +1M +10D" />
    </p>
     <p>
        Number:<input type="text" data-jwd="spinner" />
    </p>
</body>
</html>
```
## API Documentation
### Methods 
**$(selector).initWidget([options])** - to initial a jQuery widget.
```javascript
$("[data-jwd]").initWidget({ attrPrefix: "data-jwd" });
```

### Attributes
**data-jwd** - a name of a jQuery widget.

**data-jwd-options** - options of a jQuery widget with a value containing one or more comma-separated an option.

**data-jwd-func** - a name of a JavaScript function return options of the jQuery widget.

```html
<input type="text" data-jwd="autocomplete" data-jwd-func="availableTags" />
```
