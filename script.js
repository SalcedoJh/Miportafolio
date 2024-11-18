document.addEventListener('DOMContentLoaded', function() {

    const header = document.querySelector('.cabecera');
    const navList = document.querySelector('.navegacion__lista');
    
    const menuBtn = document.createElement('button');
    menuBtn.className = 'menu-mobile';
    menuBtn.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        .menu-mobile {
            display: none;
            background: none;
            border: none;
            cursor: pointer;
            padding: 10px;
        }
        .menu-mobile span {
            display: block;
            width: 25px;
            height: 3px;
            background-color: white;
            margin: 5px 0;
        }
        @media (max-width: 767px) {
            .menu-mobile {
                display: block;
            }
            .navegacion__lista {
                display: none;
                width: 100%;
                position: absolute;
                top: 100%;
                left: 0;
                background: var(--color-primario);
                flex-direction: column;
                padding: 20px;
            }
            .navegacion__lista.show {
                display: flex;
            }
        }
    `;
    document.head.appendChild(styleSheet);
    header.appendChild(menuBtn);

    menuBtn.addEventListener('click', function() {
        navList.classList.toggle('show');
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                navList.classList.remove('show');
                
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                navList.classList.remove('show');
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const proyectosSection = document.querySelector('.proyectos');
    if (proyectosSection) {
        const repoButton = proyectosSection.querySelector('.boton_repositorio');
        const verButton = proyectosSection.querySelector('.boton_ver');

        if (repoButton) {
            const repoUrl = repoButton.getAttribute('href');
            convertButtonToLink(repoButton, repoUrl);
        }

        if (verButton) {
            const verUrl = verButton.getAttribute('href');
            convertButtonToLink(verButton, verUrl);
        }
    }

    function convertButtonToLink(button, url) {
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank'; 
        link.rel = 'noopener noreferrer';
        link.className = button.className;
        link.textContent = button.textContent;
        button.parentNode.replaceChild(link, button);
    }

    const contactForm = document.querySelector('.contacto__formulario');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombre = this.querySelector('input[placeholder="Nombre"]');
            const email = this.querySelector('input[placeholder="Correo Electrónico"]');
            const mensaje = this.querySelector('textarea');
            
            if (!nombre.value || !email.value || !mensaje.value) {
                alert('Por favor, complete todos los campos');
                return;
            }
            
            if (!email.value.includes('@')) {
                alert('Por favor, ingrese un correo electrónico válido');
                return;
            }
            
            alert('¡Mensaje enviado con éxito!');
            this.reset();
        });
    }
});