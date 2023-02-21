document.addEventListener('DOMContentLoaded', () => {
    const mediaFiles = document.querySelectorAll('img');
    console.log(mediaFiles);
    const preloader = document.querySelector('.preloader');
    const preloaderTitle = document.querySelector('.preloader__title');
    const preloaderLoad = document.querySelector('.preloader__load');
    const preloaderPercent = document.querySelector('#percents');
    let i = 0, n = 0;

    mediaFiles.forEach(elem => {
        elem.addEventListener('load', () => {
            i++;
            console.log(elem);
            console.log(i);

            preloaderPercent.innerHTML = Math.round((i * 100) / mediaFiles.length);

            if (i == mediaFiles.length) {
                preloaderPercent.innerHTML = 100;
                setTimeout(() => {
                    preloaderLoad.style.display = 'none';

                    const timerId = setInterval(() => {
                        const light = ['L', 'I', 'G', 'H', 'T']
                        preloaderTitle.innerHTML += light[n++];
                        if(n == light.length) {
                            clearInterval(timerId);
                        }
                    }, 100)
                    preloaderTitle.classList.add('preloader__title__active');
                }, 500);
                setTimeout(() => {
                    preloader.classList.add('preloader__hide');
                }, 2000);
            }
        });
    });
});
