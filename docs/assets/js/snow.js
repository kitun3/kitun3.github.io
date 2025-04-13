document.addEventListener('DOMContentLoaded', () => {
    if (!window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
        return;
    }

    const snowflakeContainer = document.createElement('div');
    snowflakeContainer.className = 'snowflake-container';
    document.body.appendChild(snowflakeContainer);

    const snowflakes = ['❄', '❅', '❆', '✻', '✼', '❉'];
    let snowInterval;
    const MAX_SNOWFLAKES = 50;
    let currentSnowflakes = 0;

    function createSnowflake() {
        if (currentSnowflakes >= MAX_SNOWFLAKES) {
            return;
        }

        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.innerHTML = snowflakes[Math.floor(Math.random() * snowflakes.length)];
        
        const startPositionX = Math.random() * window.innerWidth;
        const duration = Math.random() * 2 + 6;
        const size = Math.random() * 15 + 10;
        const initialOpacity = Math.random() * 0.3 + 0.5;
        
        snowflake.style.left = `${startPositionX}px`;
        snowflake.style.fontSize = `${size}px`;
        snowflake.style.animationDuration = `${duration}s`;
        snowflake.style.opacity = initialOpacity;
        
        snowflakeContainer.appendChild(snowflake);
        currentSnowflakes++;

        const fadeOutInterval = setInterval(() => {
            const currentOpacity = parseFloat(snowflake.style.opacity);
            if (currentOpacity > 0) {
                snowflake.style.opacity = (currentOpacity - 0.01).toString();
            }
        }, duration * 10);

        snowflake.addEventListener('animationend', () => {
            clearInterval(fadeOutInterval);
            snowflake.remove();
            currentSnowflakes--;
        });
    }

    function startSnowfall() {
        if (document.documentElement.getAttribute('data-theme') === 'light') {
            return;
        }

        snowInterval = setInterval(() => {
            if (Math.random() < 0.7) {
                createSnowflake();
            }
        }, 200);
    }

    function stopSnowfall() {
        clearInterval(snowInterval);
        const snowflakes = document.querySelectorAll('.snowflake');
        snowflakes.forEach(snowflake => snowflake.remove());
        currentSnowflakes = 0;
    }

    function handleThemeChange() {
        if (document.documentElement.getAttribute('data-theme') === 'light') {
            stopSnowfall();
        } else {
            startSnowfall();
        }
    }

    const themeObserver = new MutationObserver(handleThemeChange);
    themeObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme']
    });

    if (document.documentElement.getAttribute('data-theme') !== 'light') {
        startSnowfall();
    }
}); 