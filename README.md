# Element Printer JS
This module allows you to print a specific HTML element using the integrated functionality of the web browser.

## Version 1.1.1
* fix bug importation

## Example
See the example below to understand how to use this functionality.

```html
<html>

<head>
    <link rel="stylesheet" href="../dist/style.css">
</head>

<body>


    <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tempora totam accusamus. Velit aliquam excepturi
        quidem laborum itaque neque, facere voluptate! Iste alias quod suscipit mollitia sit vel nobis sapiente.
        <span id="to-print" style="color: red">print it</span>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, animi accusantium vitae natus facilis quibusdam
        aliquam tempore. Quo quibusdam similique soluta voluptate, voluptatum fugit! Quae reprehenderit qui assumenda
        tempore sint!
        <input type="button" value="print" id="print-btn">
    </div>


</body>

</html>
<script type="module">
    import printer from "../index.js";
    document.getElementById('print-btn').addEventListener("click", () => {
        printer("#to-print", "Hello world");
    })
</script>
```