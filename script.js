document.addEventListener('DOMContentLoaded', function() {
    var fadeInImg = document.getElementById('fade-in-img');
    var overlay = document.querySelector('.overlay');
    var menuList = document.getElementById('menu-list');
    var hideMenuTimeout;
    var audio = document.getElementById('background-audio');

    // Verifica a senha e mostra o conteúdo se estiver correta
    document.getElementById('submit-password').addEventListener('click', function() {
        var password = document.getElementById('password-input').value;
        if (btoa(password) === 'VmVyaXRhcyBpbiBodW1hbml0YXRlLCBub24gaW4gbWFjaGluYQ==') { // Verifica a senha ofuscada
            document.getElementById('password-screen').style.display = 'none';
            document.getElementById('content').style.display = 'flex';
            setTimeout(function() {
                fadeInImg.classList.add('show');
                audio.play(); // Toca a música após carregar o conteúdo
            }, 100); // Pequeno atraso para garantir que a transição funcione
        } else {
            alert('Senha incorreta!');
        }
    });

    overlay.addEventListener('mouseenter', function() {
        clearTimeout(hideMenuTimeout);
        menuList.style.opacity = '1';
        menuList.style.visibility = 'visible';
    });

    overlay.addEventListener('mouseleave', function() {
        hideMenuTimeout = setTimeout(function() {
            menuList.style.opacity = '0';
            menuList.style.visibility = 'hidden';
        }, 500); // Pequeno atraso para permitir a entrada no menu
    });

    menuList.addEventListener('mouseenter', function() {
        clearTimeout(hideMenuTimeout);
        menuList.style.opacity = '1';
        menuList.style.visibility = 'visible';
    });

    menuList.addEventListener('mouseleave', function() {
        menuList.style.opacity = '0';
        menuList.style.visibility = 'hidden';
    });

    // Para garantir que o áudio toque apenas uma vez
    audio.addEventListener('ended', function() {
        audio.currentTime = 0;
        audio.pause();
    });
});
