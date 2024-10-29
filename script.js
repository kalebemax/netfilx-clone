let btn1 = document.querySelector('#btn1');
let video = document.querySelector('.video')

const clickBotao = () => {
    if (btn1.innerHTML.includes('volume_up')) {
        btn1.innerHTML = '<img src="midia/volume_off_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg" alt="Volume Off">';
        video.muted = true
    } else {
        btn1.innerHTML = '<img src="midia/volume_up_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg" alt="Volume Up">';
        video.muted = false
    }
};

btn1.addEventListener('click', clickBotao);

let btn = document.querySelector('#btn');
let modal = document.querySelector('.modal');

const showModal = () => {
    modal.style.display = 'block';
};

const hideModal = () => {
    modal.style.display = 'none';
};

btn.addEventListener('click', showModal);
modal.addEventListener('click', hideModal);


