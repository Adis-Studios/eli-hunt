<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Step-by-Step Input Validation</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="input-container" id="input-container-1">
            <label for="input-1">Enter Message 1:</label>
            <input type="text" id="input-1">
            <button onclick="checkInput(1)">Submit</button>
        </div>
        <div class="input-container" id="input-container-2" style="display:none;">
            <label for="input-2">Enter Message 2:</label>
            <input type="text" id="input-2">
            <button onclick="checkInput(2)">Submit</button>
        </div>
        <div class="input-container" id="input-container-3" style="display:none;">
            <label for="input-3">Enter Message 3:</label>
            <input type="text" id="input-3">
            <button onclick="checkInput(3)">Submit</button>
        </div>
        <div class="input-container" id="input-container-4" style="display:none;">
            <label for="input-4">Enter Message 4:</label>
            <input type="text" id="input-4">
            <button onclick="checkInput(4)">Submit</button>
        </div>
        <div class="input-container" id="input-container-5" style="display:none;">
            <label for="input-5">Enter Message 5:</label>
            <input type="text" id="input-5">
            <button onclick="checkInput(5)">Submit</button>
        </div>
    </div>
    <script src="scripts.js"></script>
</body>
</html>
