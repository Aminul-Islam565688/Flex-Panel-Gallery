const panel = document.querySelectorAll('.panel');

function toggleOpen() {
    // classRemove(); // toggle kaj kre na
    this.classList.toggle('open');
}

function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

// const addClass = panel => panel.classList.toggle('open')

function classRemove(e) {
    panel.forEach(panel => {
        panel.classList.remove('open')
    })
    // this.classList.remove('open');
}

panel.forEach(panel => panel.addEventListener('click', toggleOpen));

panel.forEach(panel => panel.addEventListener('transitionend', toggleActive));