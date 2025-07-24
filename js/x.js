


// Renderizado
(function () {
    // Limpia el documento
    document.documentElement.lang = 'en';
    document.title = 'Secret Number Game';
    document.head.innerHTML = '';

    // Meta y fuentes
    const metaCharset = document.createElement('meta');
    metaCharset.setAttribute('charset', 'UTF-8');
    document.head.appendChild(metaCharset);

    const metaViewport = document.createElement('meta');
    metaViewport.name = 'viewport';
    metaViewport.content = 'width=device-width, initial-scale=1.0';
    document.head.appendChild(metaViewport);

    const preconnect1 = document.createElement('link');
    preconnect1.rel = 'preconnect';
    preconnect1.href = 'https://fonts.googleapis.com';
    document.head.appendChild(preconnect1);

    const preconnect2 = document.createElement('link');
    preconnect2.rel = 'preconnect';
    preconnect2.href = 'https://fonts.gstatic.com';
    preconnect2.crossOrigin = 'anonymous';
    document.head.appendChild(preconnect2);

    const fonts = document.createElement('link');
    fonts.rel = 'stylesheet';
    fonts.href = 'https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700&family=Inter:wght@400;700&display=swap';
    document.head.appendChild(fonts);

    // Inserta el CSS dinámicamente
    const style = document.createElement('style');
    style.textContent = `
   --color-bg: #000000;         
   --color-bg2: #2c5364;        
   --color-acento: #00fff7;     
   --color-azul: #1875E8;       
   --color-rosa: #ff4fa3;       
   --color-naranja: #ffb347;    
   --color-beige: #f5f5dc;      
:root {
  --color-bg: #000000;
  --color-bg2: #2c5364;
  --color-acento: #00fff7;
  --color-azul: #1875E8;
  --color-rosa: #ff4fa3;
  --color-naranja: #ffb347;
  --color-beige: #f5f5dc;
}
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #fff;
}
body {
    min-height: 100vh;
    width: 100vw;
    background: linear-gradient(135deg, var(--color-bg) 0%, var(--color-bg2) 100%), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80') no-repeat center center fixed;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow-x: hidden;
}
body::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(10, 24, 40, 0.7);
    z-index: 0;
}
.container {
    width: 95vw;
    max-width: 900px;
    min-height: 480px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 32px;
    border: 1.5px solid var(--color-azul);
    box-shadow: 0 8px 40px 0 rgba(24, 117, 232, 0.15), 0 1.5px 8px 0 rgba(0,0,0,0.10);
    background: rgba(20, 40, 70, 0.92);
    position: relative;
    margin: 32px 0;
    overflow: hidden;
}
.container__contenido {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 32px;
    padding: 32px 24px;
    position: relative;
}
.container__informaciones {
    flex: 1;
    padding: 24px 0 24px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.container__boton {
    border-radius: 12px;
    background: linear-gradient(90deg, var(--color-acento) 0%, var(--color-azul) 100%);
    padding: 14px 0;
    width: 100%;
    font-size: 22px;
    font-weight: 700;
    border: none;
    margin-top: 12px;
    margin-bottom: 8px;
    color: #fff;
    box-shadow: 0 2px 8px 0 rgba(24, 117, 232, 0.10);
    transition: background 0.2s, transform 0.2s;
    cursor: pointer;
}
.container__boton:active {
    background: var(--color-azul);
    transform: scale(0.98);
}
.container__texto {
    margin: 16px 0 16px 0;
    text-align: center;
}
.container__texto-azul {
    color: var(--color-acento);
    text-shadow: 0 2px 8px rgba(24,117,232,0.15);
}
h1 {
    font-family: 'Chakra Petch', sans-serif;
    font-size: 56px;
    font-weight: 700;
    margin-bottom: 8px;
    letter-spacing: 1px;
}
h2, p, button, input {
    font-family: 'Inter', sans-serif;
}
h2 {
    font-size: 28px;
    font-weight: 400;
    margin-bottom: 8px;
}
p#attempts {
    font-size: 18px;
    color: #b3d1ff;
    margin-top: 8px;
    text-align: center;
}
input[type="number"] {
    width: 100%;
    font-size: 22px;
    border-radius: 8px;
    padding: 12px;
    border: 1.5px solid var(--color-acento);
    background: rgba(0,20,40,0.7);
    color: var(--color-acento);
    margin-bottom: 8px;
    outline: none;
    transition: border 0.2s;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    appearance: textfield;
}
input[type="number"]::-webkit-inner-spin-button, 
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input[type="number"]:focus {
    border: 1.5px solid var(--color-acento);
    background: rgba(0,255,247,0.08);
}
body::after {
    content: "";
    position: fixed;
    top: 0; left: 0; width: 100vw; height: 100vh;
    pointer-events: none;
    z-index: 1;
    background-image: radial-gradient(rgba(0,255,247,0.12) 1.5px, transparent 1.5px), radial-gradient(rgba(0,255,247,0.10) 1.5px, transparent 1.5px);
    background-size: 40px 40px, 80px 80px;
    background-position: 0 0, 20px 20px;
    animation: puntos-move 8s linear infinite;
}
@keyframes puntos-move {
    0% { background-position: 0 0, 20px 20px; }
    100% { background-position: 40px 40px, 60px 60px; }
}
footer {
    width: 100vw;
    max-width: 100vw;
    text-align: center;
    padding: 0;
    margin: 0;
    background: rgba(10,24,40,0.92);
    border-top: 2px solid var(--color-acento);
    color: var(--color-acento);
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    letter-spacing: 1px;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 10;
    text-shadow: none;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    box-shadow: 0 -2px 16px 0 rgba(0,255,247,0.10);
}
footer .footer-content {
    display: flex;
    align-items: center;
    gap: 12px;
}
footer .footer-icon {
    width: 22px;
    height: 22px;
    filter: drop-shadow(0 0 4px var(--color-acento));
}
.container__imagen-robot {
    max-width: 340px;
    width: 100%;
    height: auto;
    border-radius: 24px;
    box-shadow: 0 4px 24px 0 rgba(30,144,255,0.10);
    margin-right: 32px;
}
@media (max-width: 900px) {
    .container {
        flex-direction: column;
        min-height: 600px;
        max-width: 98vw;
    }
    .container__contenido {
        flex-direction: column;
        gap: 16px;
        padding: 16px 8px;
    }
    .container__imagen-robot {
        margin: 0 0 16px 0;
        max-width: 220px;
    }
}
@media (max-width: 600px) {
    h1 { font-size: 32px; }
    h2 { font-size: 20px; }
    .container {
        min-height: 400px;
        border-radius: 18px;
        margin: 8px 0;
    }
    .container__contenido {
        padding: 8px 2px;
    }
    .container__imagen-robot {
        max-width: 120px;
    }
    footer {
        font-size: 13px;
        height: 36px;
    }
}
`;
    document.head.appendChild(style);

    // Limpia el body
    document.body.innerHTML = '';

    // Selector de idioma
    const LANGS = {
        es: {
            welcome: '¡Bienvenido! Adivina el número secreto!',
            choose: 'Elige un número entre 1 y 10',
            input: 'Tu número',
            try: 'Probar',
            correct: num => `¡Felicidades! El número era ${num}.`,
            over: num => `¡Juego terminado! El número era ${num}. Nueva ronda...`,
            less: val => `Tu número es menor que ${val}`,
            greater: val => `Tu número es mayor que ${val}`,
            attempts: (a, m) => `Intentos: ${a} / ${m}`,
            attemptsFinal: a => `Intentos: ${a}`,
            enter: 'Ingresa un número entre 1 y 10'
        },
        en: {
            welcome: 'Welcome! Guess the secret number!',
            choose: 'Choose a number between 1 and 10',
            input: 'Your number',
            try: 'Try',
            correct: num => `Congratulations! The number was ${num}.`,
            over: num => `Game over! The number was ${num}. Starting new round...`,
            less: val => `Your number is less than ${val}`,
            greater: val => `Your number is greater than ${val}`,
            attempts: (a, m) => `Attempts: ${a} / ${m}`,
            attemptsFinal: a => `Attempts: ${a}`,
            enter: 'Enter a number between 1 and 10'
        }
    };
    let lang = 'es';

    // Main container
    const main = document.createElement('main');
    main.className = 'container';
    main.style.background = 'linear-gradient(135deg, #0a0f1a 0%, #1a2332 100%)';
    main.style.border = '1.5px solid #0ff';
    main.style.boxShadow = '0 8px 40px 0 rgba(0,255,255,0.10), 0 1.5px 8px 0 rgba(0,0,0,0.20)';

    // Sección de contenido
    const section = document.createElement('section');
    section.className = 'container__contenido';
    section.style.background = 'rgba(10,20,40,0.92)';
    section.style.borderRadius = '24px';

    const robotImg = document.createElement('img');
    robotImg.src = './img/robot.png';
    robotImg.alt = 'Robot';
    robotImg.className = 'container__imagen-robot';
    robotImg.style.boxShadow = '0 0 32px 0 #0ff2, 0 2px 16px 0 #00f2';

    const infoDiv = document.createElement('div');
    infoDiv.className = 'container__informaciones';
    infoDiv.style.background = 'rgba(20,30,50,0.85)';
    infoDiv.style.borderRadius = '18px';
    infoDiv.style.boxShadow = '0 0 16px 0 #0ff1';

    // Trofeo (solo visible al ganar)
    const trophyImg = document.createElement('img');
    trophyImg.src = './img/trophy.png';
    trophyImg.alt = 'Trophy icon';
    trophyImg.style.display = 'none';
    trophyImg.style.width = '64px';
    trophyImg.style.margin = '0 auto 16px auto';
    trophyImg.style.display = 'block';
    trophyImg.style.visibility = 'hidden';

    const textDiv = document.createElement('div');
    textDiv.className = 'container__texto';

    // Selector de idioma
    const langSelect = document.createElement('select');
    langSelect.style.marginBottom = '12px';
    langSelect.style.background = '#0a0f1a';
    langSelect.style.color = '#00fff7';
    langSelect.style.border = '1.5px solid #00fff7';
    langSelect.style.borderRadius = '8px';
    langSelect.style.fontSize = '16px';
    langSelect.style.padding = '4px 8px';
    langSelect.style.outline = 'none';
    langSelect.style.alignSelf = 'flex-end';
    langSelect.innerHTML = `<option value="es">Español</option><option value="en">English</option>`;

    const h1 = document.createElement('h1');
    const span = document.createElement('span');
    span.className = 'container__texto-azul';
    span.textContent = LANGS[lang].welcome;
    span.style.color = '#00fff7';
    span.style.textShadow = '0 0 8px #00fff7, 0 2px 8px #0ff2';
    h1.appendChild(span);

    const h2 = document.createElement('h2');
    h2.id = 'message';
    h2.textContent = LANGS[lang].choose;
    h2.style.color = '#b3eaff';

    textDiv.appendChild(langSelect);
    textDiv.appendChild(h1);
    textDiv.appendChild(h2);

    // Formulario
    const form = document.createElement('form');
    form.id = 'game-form';
    form.autocomplete = 'off';
    form.style.width = '100%';

    const input = document.createElement('input');
    input.type = 'number';
    input.id = 'input-number';
    input.min = 1;
    input.max = 10;
    input.required = true;
    input.placeholder = LANGS[lang].input;
    input.style.width = '100%';
    input.style.fontSize = '24px';
    input.style.margin = '12px 0';
    input.style.borderRadius = '8px';
    input.style.padding = '10px';
    input.style.border = '1px solid #1875E8';
    input.style.background = 'rgba(0,20,40,0.7)';
    input.style.color = '#00fff7';
    input.style.border = '1.5px solid #00fff7';

    const button = document.createElement('button');
    button.type = 'submit';
    button.className = 'container__boton';
    button.textContent = LANGS[lang].try;
    button.style.background = 'linear-gradient(90deg, #00fff7 0%, #1a2332 100%)';
    button.style.color = '#0a0f1a';
    button.style.textShadow = '0 0 8px #00fff7';
    button.style.marginBottom = '8px';

    form.appendChild(input);
    form.appendChild(button);

    const attemptsP = document.createElement('p');
    attemptsP.id = 'attempts';
    attemptsP.style.marginTop = '8px';

    // Ensamblar
    infoDiv.appendChild(trophyImg); // Trofeo invisible al inicio
    infoDiv.appendChild(textDiv);
    infoDiv.appendChild(form);
    infoDiv.appendChild(attemptsP);
    section.appendChild(robotImg);
    section.appendChild(infoDiv);
    main.appendChild(section);
    document.body.appendChild(main);

    // Footer elegante y moderno
    let footer = document.querySelector('footer');
    if (!footer) {
        footer = document.createElement('footer');
        const footerContent = document.createElement('div');
        footerContent.className = 'footer-content';
        // Puedes cambiar el ícono SVG o el texto aquí
        footerContent.innerHTML = `
          <svg class="footer-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"></svg><span>Codigo realizado por: <span style="color:var(--color-rosa);font-weight:bold;">Amir Flores</span></span>
        `;
        footer.appendChild(footerContent);
        document.body.appendChild(footer);
    }

    // Lógica del juego
    let secret = 1 + Math.floor(Math.random() * 10);
    let attempts = 0;
    const maxAttempts = 3;

    function updateLangTexts() {
        span.textContent = LANGS[lang].welcome;
        h2.textContent = LANGS[lang].choose;
        input.placeholder = LANGS[lang].input;
        button.textContent = LANGS[lang].try;
        attemptsP.textContent = '';
    }

    langSelect.addEventListener('change', function() {
        lang = langSelect.value;
        updateLangTexts();
    });

    function resetGame() {
        secret = 1 + Math.floor(Math.random() * 10);
        attempts = 0;
        input.disabled = false;
        button.disabled = false;
        trophyImg.style.visibility = 'hidden';
        h2.textContent = LANGS[lang].choose;
        attemptsP.textContent = '';
        input.value = '';
        input.focus();
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const val = Number(input.value);
        if (val < 1 || val > 10) {
            h2.textContent = LANGS[lang].enter;
            return;
        }
        attempts++;
        if (val === secret) {
            h2.textContent = LANGS[lang].correct(secret);
            attemptsP.textContent = LANGS[lang].attemptsFinal(attempts);
            input.disabled = true;
            button.disabled = true;
            trophyImg.style.visibility = 'visible';
            setTimeout(resetGame, 2000);
        } else if (attempts >= maxAttempts) {
            h2.textContent = LANGS[lang].over(secret);
            attemptsP.textContent = LANGS[lang].attemptsFinal(attempts);
            input.disabled = true;
            button.disabled = true;
            setTimeout(resetGame, 2000);
        } else {
            if (val < secret) {
                h2.textContent = LANGS[lang].greater(val);
            } else {
                h2.textContent = LANGS[lang].less(val);
            }
            attemptsP.textContent = LANGS[lang].attempts(attempts, maxAttempts);
        }
        input.value = '';
        input.focus();
    });
    input.focus();
})();
