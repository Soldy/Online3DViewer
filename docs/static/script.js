function Resize ()
{
    let isMobile = window.matchMedia ('(max-width: 600px)').matches;
    let navToggleDiv = document.getElementById ('navigation_toggle');
    let navDiv = document.getElementById ('navigation');
    let mainDiv = document.getElementById ('main');

    if (isMobile) {
        navDiv.style.width = '100%';
        mainDiv.style.marginLeft = '0px';

        navToggleDiv.style.display = 'block';
        navDiv.style.display = 'none';
    } else {
        navDiv.style.width = '250px';
        mainDiv.style.marginLeft = '250px';

        navToggleDiv.style.display = 'none';
        navDiv.style.display = 'block';
    }
}

function Init (menuName)
{
    Resize ();
    let menuItem = document.getElementById ('nav-' + menuName);
    if (menuItem !== null) {
        menuItem.classList.add ('selected');
        menuItem.scrollIntoView ({ block : 'center' });
    }
    hljs.highlightAll ();
}

window.addEventListener ('load', () => {
    Resize ();
    window.addEventListener ('resize', () => {
        Resize ();
    })

    let navToggleDiv = document.getElementById ('navigation_toggle');
    let navIconDiv = document.getElementById ('navigation_icon');
    let navDiv = document.getElementById ('navigation');
    navToggleDiv.addEventListener ('click', () => {
        if (navDiv.style.display === 'none') {
            navDiv.style.display = 'block';
            navIconDiv.src = 'static/close.svg';
        } else {
            navDiv.style.display = 'none';
            navIconDiv.src = 'static/menu.svg';
        }
    });
});
