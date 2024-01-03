document.addEventListener("DOMContentLoaded", function() {

    function setTimestamp() {
        var timestampInput = document.getElementById("timestamp");
        
        timestampInput.value = Date.now();
    }

    // Call the setTimestamp function when the document is loaded
    setTimestamp();
});