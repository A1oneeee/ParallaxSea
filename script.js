const text = document.getElementById('text')
const bird1 = document.getElementById('bird1');
const bird2 = document.getElementById('bird2');
const forest = document.getElementById('forest');
const sea = document.getElementById('sea');;
const btn = document.getElementById('btn');
const rocks = document.getElementById('rocks');
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const value = window.scrollY;
    text.style.top = 50 + value * -0.05 + '%';
    bird1.style.top = 50 + value * -1.5 + 'px';
    bird1.style.left = 50 + value * 0.5 + 'px';
    bird2.style.top = 50 + value * -1.5 + 'px';
    bird2.style.left = 50 + value * -0.5 + 'px';
    btn.style.marginTop = 50 + value * 0.5 + 'px';
    rocks.style.top = 50 + value * -0.12 + 'px';
    forest.style.top = 50 + value * 0.25 + 'px';
    header.style.top = 50 + value * 0.5 + 'px';
});