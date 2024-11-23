document.addEventListener('DOMContentLoaded', function () {
    function debug() {
        console.log(document.documentElement.classList);
        console.log(document.documentElement.classList == '');
        console.log();
    }
    debug();
    document.getElementById('themeChangerButton').addEventListener('click', function() {
        console.log('click');
        if (document.documentElement.classList == '') {
            document.documentElement.className = 'lightT'
        }
        else if (document.documentElement.classList == 'lightT') {
            document.documentElement.className = 'darkT'
        }
        else {
            document.documentElement.className = ''
        }
    });
});