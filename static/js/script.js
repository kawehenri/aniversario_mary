// Função para scroll suave até uma seção
function scrollToSection(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Animação de elementos ao scroll
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.message-card, .declaration-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-animate', 'active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    elements.forEach(element => {
        element.classList.add('scroll-animate');
        observer.observe(element);
    });
}

// Efeito de paralaxe suave nas partículas
function handleParallax() {
    const particles = document.querySelectorAll('.particle');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        particles.forEach((particle, index) => {
            const speed = (index + 1) * 0.05;
            particle.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Contador de caracteres animado (efeito de digitação no título)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Adiciona efeito hover 3D nos cards
function add3DEffect() {
    const cards = document.querySelectorAll('.gallery-item, .reason-item');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// Cria corações flutuantes aleatórios
function createFloatingHearts() {
    const heartsContainer = document.createElement('div');
    heartsContainer.className = 'floating-hearts-container';
    heartsContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
        overflow: hidden;
    `;
    document.body.appendChild(heartsContainer);

    function createHeart() {
        const heart = document.createElement('div');
        heart.textContent = '💕';
        heart.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 20 + 15}px;
            left: ${Math.random() * 100}%;
            bottom: -50px;
            opacity: 0.7;
            animation: floatUp ${Math.random() * 3 + 4}s linear;
            pointer-events: none;
        `;
        
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 7000);
    }

    // Cria corações periodicamente
    setInterval(createHeart, 3000);
}

// Adiciona animação de flutuação de corações
function addHeartAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatUp {
            0% {
                bottom: -50px;
                opacity: 0;
                transform: translateX(0) rotate(0deg);
            }
            10% {
                opacity: 0.7;
            }
            90% {
                opacity: 0.7;
            }
            100% {
                bottom: 100vh;
                opacity: 0;
                transform: translateX(${Math.random() * 100 - 50}px) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(style);
}

// Efeito de brilho nas imagens da galeria
function addGallerySparkle() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.filter = 'brightness(1.1)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.filter = 'brightness(1)';
        });
    });
}

// Funcionalidade de música para as fotos
function addMusicToPhotos() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    let currentAudio = null;
    
    galleryItems.forEach(item => {
        const dataIndex = item.getAttribute('data-index');
        const audioId = `audio${parseInt(dataIndex) + 1}`;
        const audio = document.getElementById(audioId);
        
        if (audio) {
            // Adiciona cursor pointer para indicar que é clicável
            item.style.cursor = 'pointer';
            
            // Adiciona evento de clique
            item.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Para qualquer música que esteja tocando
                if (currentAudio && currentAudio !== audio) {
                    currentAudio.pause();
                    currentAudio.currentTime = 0;
                }
                
                // Se a música atual está tocando, pausa
                if (audio.paused) {
                    audio.play().then(() => {
                        currentAudio = audio;
                        // Adiciona efeito visual de música tocando
                        item.classList.add('music-playing');
                    }).catch(error => {
                        console.log('Erro ao reproduzir áudio:', error);
                        // Mostra mensagem amigável se houver erro
                        showMusicError();
                    });
                } else {
                    // Se está tocando, pausa
                    audio.pause();
                    currentAudio = null;
                    item.classList.remove('music-playing');
                }
            });
            
            // Adiciona efeito visual quando a música termina
            audio.addEventListener('ended', function() {
                item.classList.remove('music-playing');
                currentAudio = null;
            });
        }
    });
}

// Função para mostrar erro amigável quando não conseguir tocar música
function showMusicError() {
    // Cria uma notificação temporária
    const notification = document.createElement('div');
    notification.textContent = '🎵 Clique em "Permitir" para tocar música nas fotos!';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #ff6b9d, #c44569);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        font-weight: 600;
        box-shadow: 0 10px 30px rgba(255, 107, 157, 0.3);
        z-index: 10000;
        animation: slideInRight 0.5s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Remove a notificação após 4 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease-in';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 4000);
}

// Adiciona animações CSS para os efeitos de música
function addMusicAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        .music-indicator {
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 20px;
            opacity: 0.8;
            transition: all 0.3s ease;
        }
        
        .gallery-item.music-playing .music-indicator {
            animation: pulse 1s infinite;
            color: #ff6b9d;
        }
        
        .gallery-item:hover .music-indicator {
            opacity: 1;
            transform: scale(1.2);
        }
        
        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.3);
            }
        }
    `;
    document.head.appendChild(style);
}

// Contador de dias juntos (opcional - você pode personalizar)
function showDaysTogether() {
    // Defina a data que vocês começaram a namorar
    // Exemplo: const startDate = new Date('2024-01-15');
    // 
    // const today = new Date();
    // const diffTime = Math.abs(today - startDate);
    // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    // 
    // console.log(`Dias juntos: ${diffDays}`);
    // Você pode adicionar isso em algum lugar do site se quiser
}

// Easter egg: clique múltiplo no coração principal
function addHeartClickEffect() {
    const heartIcon = document.querySelector('.heart-icon');
    let clickCount = 0;
    
    if (heartIcon) {
        heartIcon.addEventListener('click', () => {
            clickCount++;
            heartIcon.style.animation = 'none';
            setTimeout(() => {
                heartIcon.style.animation = 'heartbeat 0.5s ease-in-out';
            }, 10);
            
            // Easter egg: 5 cliques = explosão de corações
            if (clickCount === 5) {
                for (let i = 0; i < 20; i++) {
                    setTimeout(() => {
                        createSingleHeart();
                    }, i * 50);
                }
                clickCount = 0;
            }
        });
    }
}

function createSingleHeart() {
    const heart = document.createElement('div');
    heart.textContent = '💕';
    heart.style.cssText = `
        position: fixed;
        font-size: 30px;
        left: 50%;
        top: 50%;
        pointer-events: none;
        z-index: 10000;
        animation: explodeHeart ${Math.random() * 2 + 1}s ease-out forwards;
    `;
    
    const angle = Math.random() * 360;
    heart.style.setProperty('--angle', `${angle}deg`);
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes explodeHeart {
            0% {
                transform: translate(-50%, -50%) rotate(0deg) scale(1);
                opacity: 1;
            }
            100% {
                transform: translate(-50%, -50%) 
                          rotate(720deg) 
                          scale(0)
                          translateX(${Math.cos(angle) * 200}px)
                          translateY(${Math.sin(angle) * 200}px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
        style.remove();
    }, 3000);
}

// Adiciona cursor personalizado (opcional)
function addCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        width: 20px;
        height: 20px;
        border: 2px solid #ff6b9d;
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 10000;
        transition: transform 0.1s ease;
        display: none;
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.display = 'block';
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });

    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'scale(0.8)';
    });

    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'scale(1)';
    });
}

// Mensagem especial no console
function addConsoleMessage() {
    console.log('%c💕 Feliz Aniversário! 💕', 
        'font-size: 20px; font-weight: bold; color: #ff6b9d;');
    console.log('%cFeito com muito amor ❤️', 
        'font-size: 14px; color: #c44569;');
}

// Inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa todas as funcionalidades
    handleScrollAnimation();
    handleParallax();
    add3DEffect();
    addHeartAnimation();
    createFloatingHearts();
    addGallerySparkle();
    addMusicToPhotos();
    addMusicAnimations();
    addHeartClickEffect();
    addConsoleMessage();
    
    // Opcional: descomentar se quiser cursor personalizado
    // addCustomCursor();
    
    // Adiciona classe de carregamento completo
    document.body.classList.add('loaded');
    
    console.log('🎉 Site carregado com sucesso!');
});

// Previne comportamento padrão em links vazios
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {
        e.preventDefault();
    }
});

// Atualiza ano no footer automaticamente
window.addEventListener('load', () => {
    const footerDate = document.querySelector('.footer-date');
    if (footerDate) {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().toLocaleString('pt-BR', { month: 'long' });
        footerDate.textContent = `${currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1)} ${currentYear}`;
    }
});

