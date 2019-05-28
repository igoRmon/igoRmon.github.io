var btn1 = document.querySelector('#btn-main');
btn1.onclick = () => {
    window.location.href = '#welcome-section';
}

var btn2 = document.querySelector('#btn-about');
btn2.onclick = () => {
    window.location.href = '#about';
}

var btn3 = document.querySelector('#btn-contact');
btn3.onclick = () => {
    window.location.href = '#contact';
}

function transition() {
    let texto = document.querySelectorAll('.me');
    texto.forEach(a => {
        a.style.transition = "4s";
        a.style.color = "white";
    });
}
transition();

window.onscroll = () => {
    if (document.scrollingElement.scrollTop >= 530) {
        let h2 = document.getElementById('title');
        let p = document.getElementById('description');
        h2.style.transition = "2s";
        h2.style.color = "black";
        p.style.transition = "4s";
        p.style.color = "black";
    }
}
