document.addEventListener('click', function (e) {
    const trackClassName = 'current-track';
    const artistClassName = 'current-artist';

    if (e.target.classList.contains(trackClassName) || e.target.classList.contains(artistClassName)) {
        var artist = document.getElementsByClassName(artistClassName)[0].innerHTML.replace('by ', '');
        var title = document.getElementsByClassName(trackClassName)[0].innerHTML;

        navigator.clipboard.writeText(artist + ' – ' + title);

        e.preventDefault();
    }
});
