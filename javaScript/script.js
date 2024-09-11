document.addEventListener('DOMContentLoaded', function() {
    const posteos = document.querySelectorAll('.posteo');
    posteos.forEach(function(posteo) {
        const btnlike = posteo.querySelector('.btn-like');
        const contadorLikesSpan = posteo.querySelector('span');
        let contadorLikes = 0;
        btnlike.addEventListener('click', function() {
            contadorLikes++;
            contadorLikesSpan.textContent = contadorLikes + " like(s)";
        });
    });
});

