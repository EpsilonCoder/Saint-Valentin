init = () => {


    const images = [
        'https://i.postimg.cc/5Nvq74tp/HVD-2022-00.jpg',
        'https://i.postimg.cc/vm8rZ5tS/HVD-2022-01.jpg',
        'https://i.postimg.cc/rs50Jp9r/HVD-2022-02.gif',
        'https://i.postimg.cc/x13GQ6Mz/HVD-2022-03.jpg',
        'https://i.postimg.cc/DzCqJmCf/HVD-2022-04.jpg',
        'https://i.postimg.cc/26Vn4mJQ/HVD-2022-05.jpg',
        'https://i.postimg.cc/vBkfhkFp/HVD-2022-06.jpg',
        'https://i.postimg.cc/x8mH459q/HVD-2022-07.jpg',
        'https://i.postimg.cc/nhJKNyjx/HVD-2022-08.jpg',
        'https://i.postimg.cc/wjgJwDZT/HVD-2022-09.jpg',
        'https://i.postimg.cc/TPPb6fTz/HVD-2022-10.jpg',
        'https://i.postimg.cc/jdVyJphf/HVD-2022-11.jpg',
        'https://i.postimg.cc/m2QC3md5/HVD-2022-12.jpg',
        'https://i.postimg.cc/PfvmJX1h/HVD-2022-13.jpg',
        'https://i.postimg.cc/L8DPwnFk/HVD-2022-14.jpg',
        'https://i.postimg.cc/XvDCNmJp/HVD-2022-15.jpg',
        'https://i.postimg.cc/4d7hYP7w/HVD-2022-16.jpg',
        'https://i.postimg.cc/tJ7M85Tw/HVD-2022-17.jpg'
    ];

    const heart = document.querySelector('#heart');
    const modal = document.querySelector('#modal');
    const modalText = document.querySelector('#modalText');
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');
    let image = 1;


    let src = 'cover.mp3';
    let audio = new Audio(src);
    audio.loop = false;
    let currentPos = 0;

    function modalOff() {
        if (document.fullscreenEnabled) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        }

        modal.style.opacity = '0';
        modal.style.visibility = 'hidden';
        modalText.style.opacity = '0';
        modalText.style.visibility = 'hidden';
        pauseIt();
    }

    function modalOn() {
        modal.style.visibility = 'visible';
        modal.style.opacity = '0.85';
        modalText.style.visibility = 'visible';
        modalText.style.opacity = '1';
    }

    function pauseIt() {
        audio.paused ? audio.play() : audio.pause();

        heart.style.visibility = 'visible';
        heart.style.animationPlayState =
            heart.style.animationPlayState == 'running' ?
                'paused' : 'running';

        image1.style.animationPlayState =
            image1.style.animationPlayState == 'running' ?
                'paused' : 'running';
        image2.style.animationPlayState =
            image2.style.animationPlayState == 'running' ?
                'paused' : 'running';
    }

    function switchImage(currentPos) {

        if (currentPos >= images.length) {
            currentPos = 0;
        }

        image = (currentPos % 2 == 0) ? 1 : 2;

        switch (image) {
            case 1:
                image2.style.opacity = '0';
                image1.src = images[currentPos];
                image1.style.opacity = '1';
                break;

            case 2:
                image1.style.opacity = '0';
                image2.src = images[currentPos];
                image2.style.opacity = '1';
                break;
        }
    }

    audio.addEventListener('playing', function () {
        audio.ontimeupdate = function () {
            let ct = audio.currentTime;

            switch (true) {
                case ct > 184:
                    modalOn();
                    switchImage(0);
                    break;

                case ct > 179.65:
                    switchImage(17);
                    let compStyles = window.getComputedStyle(heart);
                    result = compStyles.getPropertyValue('transform').split(', ')[3];
                    if (parseInt(result) <= 0) {
                        heart.style.animationPlayState = 'paused';
                        heart.style.visibility = 'hidden';
                        image1.style.animationPlayState = 'paused';
                        image2.style.animationPlayState = 'paused';
                        heart.classList.remove("heart");
                    }
                    break;

                case ct > 163:
                    switchImage(17);
                    break;

                case ct > 147:
                    switchImage(16);
                    break;

                case ct > 139:
                    switchImage(15);
                    break;

                case ct > 130:
                    switchImage(14);
                    break;

                case ct > 124:
                    switchImage(13);
                    break;

                case ct > 116:
                    switchImage(12);
                    break;

                case ct > 106:
                    switchImage(11);
                    break;

                case ct > 99:
                    switchImage(10);
                    break;

                case ct > 90:
                    switchImage(9);
                    break;

                case ct > 80:
                    switchImage(8);
                    break;

                case ct > 71:
                    switchImage(7);
                    break;

                case ct > 63:
                    switchImage(6);
                    break;

                case ct > 57:
                    switchImage(5);
                    break;

                case ct > 46:
                    switchImage(4);
                    break;

                case ct > 37:
                    switchImage(3);
                    break;

                case ct > 29:
                    switchImage(2);
                    break;

                case ct > 21:
                    switchImage(1);
                    break;

                case ct < 1:
                    switchImage(0);
                    heart.classList.add("heart");
                    break;
            }
        }
    });

    audio.addEventListener('ended', function () {
        audio.pause();
        audio.currentTime = 0;
    });

    document.addEventListener(
        'ontouchstart' in window ? 'touchend' : 'mousedown',
        modalOff);

    modalOn();
}

document.addEventListener('DOMContentLoaded', init);
