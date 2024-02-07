

$(document).ready(function () {
    $('#calculate').click(function () {
        // Validation for positive number
        var hours = $('#hours').val();
        if (hours <= 0 || isNaN(hours)) {
            alert('Please enter a positive number for hours.');
            return false;
        }

        // Calculation
        var hourlyRate = $('#hourlyRate').val();
        var totalCharge = hours * hourlyRate;

        // Display the result
        $('#totalCharge').val(totalCharge.toFixed(2));
    });
});

/*document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('calculate-total').addEventListener('click', function () {
        // Validation for positive number
        var hours = document.getElementById('hours-input').value;
        if (hours <= 0 || isNaN(hours)) {
            alert('Please enter a positive number for hours.');
            return false;
        }

        // Calculation
        var hourlyRate = document.getElementById('hourly-rate').value;
        var totalCharge = hours * hourlyRate;

        // Display the result
        document.getElementById('total-charge').value = totalCharge.toFixed(2);
    });
});*/


