document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('filtro').addEventListener('input', function () {
        var filtro = this.value.trim().toLowerCase();

        var selects = document.getElementsByTagName('select');
        for (var i = 0; i < selects.length; i++) {
            var options = selects[i].getElementsByTagName('option');
            for (var j = 0; j < options.length; j++) {
                var optionText = options[j].text.trim().toLowerCase();
                var option = options[j];
                if (optionText.includes(filtro)) {
                    option.style.display = '';
                } else {
                    option.style.display = 'none';
                }
            }
        }
    });
});
