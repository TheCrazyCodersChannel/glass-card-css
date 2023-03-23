window.addEventListener('load',loadHandler)

function loadHandler () {
    const card = document.getElementById('card');

    document.getElementsByTagName("body")[0].addEventListener("mousemove",e => {
        const x = -(e.pageX + e.currentTarget.offsetLeft);
        const y = -(e.pageY + e.currentTarget.offsetTop);

        card.style.transform = `translate3d(${x/10}px,${y/10}px,0)`

    })
}


