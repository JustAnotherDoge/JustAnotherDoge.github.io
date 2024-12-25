document.addEventListener('DOMContentLoaded', function () {
    const numOfPics = 5;
    wantedPic = 0;
    function debug() {
        console.log(document.documentElement.classList);
        console.log(document.documentElement.classList == '');
        console.log();

        //document.getElementById('pic1').src = "Korito/" + 3 + ".jpg"
        Disp();
    }
    
    function RecFormer(val) {
        return "Korito/" + val + ".jpg";
    }
    function Counter(curVal, changeTrend) {
        if (changeTrend) {
            if (curVal + 1 > numOfPics) {
                return 1;
            }
            else {
                return curVal + 1;
            }
        }
        else {
            if (curVal - 1 === 0) {
                return numOfPics;
            }
            else {
                return curVal - 1;
            }
        }
    }
    function WantedPicChange(changeTrend) {
        wantedPic = Counter(wantedPic, changeTrend);
        document.getElementById('pic1').src = RecFormer(wantedPic);
    }
    async function Timer() {
        await setTimeout(Timer, 5000);
        WantedPicChange(true);
    }
    async function Disp() {
        await setTimeout(Disp, 1000);
        console.log(wantedPic);
    }
    debug();
    Timer();
    document.getElementById('left-button').addEventListener('click', function () {
        WantedPicChange(false);
    });
    document.getElementById('right-button').addEventListener('click', function () {
        WantedPicChange(true);
    });
});
