# JWM 1.0

JWM - jQuery Widget Markup. The JWL.js makes possible to use jQuery widgets without writing a single line of JavaScript.

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
        });
    </script>
</head>
<body>
    <p>
        Date:<input type="text" id="datepicker" />
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
</head>
<body>
    <p>
        Date:<input type="text" data-jwd="datepicker" data-jwd-options="minDate: 0, maxDate: +1M +10D" />
    </p>
</body>
</html>
```
