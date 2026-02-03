// ===== Floating Hearts Animation =====
function createFloatingHearts() {
    const heartsContainer = document.getElementById('hearts');
    const heartSymbols = ['❤', '💕', '💗', '💖', '💝'];

    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 5 + 8) + 's';
        heart.style.fontSize = (Math.random() * 15 + 15) + 'px';

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 12000);
    }, 800);
}

// ===== Scroll Reveal Animation =====
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
}

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Parallax Effect for Hero =====
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    const hero = document.querySelector('.hero');

    if (hero && scrollPosition < window.innerHeight) {
        hero.style.opacity = 1 - (scrollPosition / window.innerHeight) * 0.8;
    }
});

// ===== Chat Bubble Animation =====
function animateChatBubbles() {
    const chatBubbles = document.querySelectorAll('.chat-bubble');

    chatBubbles.forEach((bubble, index) => {
        bubble.style.opacity = '0';
        bubble.style.transform = 'translateY(20px)';

        setTimeout(() => {
            bubble.style.transition = 'all 0.5s ease';
            bubble.style.opacity = '1';
            bubble.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// ===== Timeline Image Lazy Loading =====
function lazyLoadImages() {
    const images = document.querySelectorAll('img');

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;

                // Check if image is already loaded/cached
                if (img.complete && img.naturalHeight !== 0) {
                    // Image already loaded, just ensure it's visible
                    img.style.transition = 'opacity 0.5s ease';
                    img.style.opacity = '1';
                } else {
                    // Image not loaded yet, set up fade-in on load
                    img.style.opacity = '0';
                    img.style.transition = 'opacity 0.5s ease';

                    img.onload = () => {
                        img.style.opacity = '1';
                    };
                }

                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ===== Quote Cards Stagger Animation =====
function staggerQuoteCards() {
    const quoteCards = document.querySelectorAll('.quote-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    quoteCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
}

// ===== Gallery Item Hover Effect =====
function initGalleryEffects() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.02)';
        });

        item.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });
}

// ===== Moment Cards Animation =====
function animateMomentCards() {
    const momentCards = document.querySelectorAll('.moment-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) rotate(0deg)';
                }, index * 200);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    momentCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px) rotate(-2deg)';
        card.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
        observer.observe(card);
    });
}

// ===== Message Wall Wave Effect =====
function animateMessageWall() {
    const messages = document.querySelectorAll('.message-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    messages.forEach((message, index) => {
        message.style.opacity = '0';
        message.style.transform = index % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)';
        message.style.transition = 'all 0.6s ease';
        observer.observe(message);
    });
}

// ===== Cursor Trail Effect (Optional - adds romance) =====
let cursorTrail = [];
const maxTrailLength = 10;

document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) { // Only on desktop
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.cssText = `
            position: fixed;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            width: 8px;
            height: 8px;
            background: radial-gradient(circle, rgba(196, 30, 61, 0.6), transparent);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            animation: fadeOut 0.8s ease-out forwards;
        `;

        document.body.appendChild(trail);
        cursorTrail.push(trail);

        if (cursorTrail.length > maxTrailLength) {
            const oldTrail = cursorTrail.shift();
            oldTrail.remove();
        }

        setTimeout(() => trail.remove(), 800);
    }
});

// Add fadeOut animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: scale(0);
        }
    }
`;
document.head.appendChild(style);

// ===== Click Sparkle Effect =====
function createClickSparkle(e) {
    const sparkle = document.createElement('div');
    sparkle.className = 'click-sparkle';
    sparkle.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        pointer-events: none;
        z-index: 9999;
        font-size: 20px;
    `;
    sparkle.innerHTML = '✨';
    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.style.transition = 'all 1s ease-out';
        sparkle.style.transform = 'translateY(-50px) scale(2)';
        sparkle.style.opacity = '0';
    }, 10);

    setTimeout(() => sparkle.remove(), 1000);
}

document.addEventListener('click', createClickSparkle);

// ===== Romantic Quote Typewriter =====
function typewriterEffect() {
    const quotes = document.querySelectorAll('.opening-quote p');
    quotes.forEach(quote => {
        const text = quote.textContent;
        quote.textContent = '';
        quote.style.borderRight = '3px solid var(--primary-rose)';
        quote.style.whiteSpace = 'nowrap';
        quote.style.overflow = 'hidden';
        quote.style.display = 'inline-block';

        let i = 0;
        const typing = setInterval(() => {
            if (i < text.length) {
                quote.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
                setTimeout(() => {
                    quote.style.borderRight = 'none';
                    quote.style.whiteSpace = 'normal';
                }, 500);
            }
        }, 50);
    });
}

// ===== Enhanced Floating Sparkles =====
function createRandomSparkles() {
    setInterval(() => {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.cssText = `
            position: fixed;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            font-size: 15px;
            pointer-events: none;
            z-index: 1;
            animation: twinkle 2s ease-in-out forwards;
        `;
        document.body.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 2000);
    }, 3000);
}

// Add twinkle animation
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent += `
    @keyframes twinkle {
        0%, 100% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
        }
        50% {
            opacity: 1;
            transform: scale(1.5) rotate(180deg);
        }
    }
`;
document.head.appendChild(sparkleStyle);

// ===== Initialize All Functions =====
document.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();
    revealOnScroll();
    animateChatBubbles();
    lazyLoadImages();
    staggerQuoteCards();
    initGalleryEffects();
    animateMomentCards();
    animateMessageWall();
    createRandomSparkles();

    // Typewriter effect for opening quote
    setTimeout(typewriterEffect, 1000);

    console.log('💕 Our Love Story is ready! 💕');
});

// ===== Easter Egg - Click on hearts counter =====
let heartClickCount = 0;
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('heart')) {
        heartClickCount++;
        if (heartClickCount === 10) {
            alert('❤️ You found the secret! Just like our love, every little moment counts. ❤️');
            heartClickCount = 0;
        }
    }
});
