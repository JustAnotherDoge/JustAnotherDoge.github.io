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
            document.documentElement.className = 'lightT';
            document.getElementById('TCpic').src = "pics/Light.png";
        }
        else if (document.documentElement.classList == 'lightT') {
            document.documentElement.className = 'darkT';
            document.getElementById('TCpic').src = "pics/Dark.png";
        }
        else {
            document.documentElement.className = '';
            document.getElementById('TCpic').src = "pics/DN.png";
        }
    });
});