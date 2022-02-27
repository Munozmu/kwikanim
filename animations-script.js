// Thanks to this script, I can animate on scroll every element
// on the page, simply by adding a 'animate-on-scoll' attribute
// to the element.

// V 1.0
// Gabin Munoz


function animationInit() {
    var elements;
    var windowHeight;

    // Pourcentage de déclenchement de l'animation
    var triggeringPercentage = 30;

    function init() {
        elements = document.querySelectorAll('[animate]'); // on récupère les éléments qui ont animate comme attribut
        console.info(elements);
        elements.forEach(hiddeElements);
        windowHeight = window.innerHeight; // on récupère la hauteur de la fenêtre 
    }

    function hiddeElements(element) {
        element.classList.add('hidden'); // on les cache pour ensuite les faire apparaitre
        console.info('élément masqué');
    }

    function checkPosition() {
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var positionFromTop = elements[i].getBoundingClientRect().top;


            // Ici on calcule 10% de la hauteur de l'écran pour éviter que l'animation ne se lance pile au moment où elle 
            // passe la fenêtre.
            if (positionFromTop - windowHeight <= (-(triggeringPercentage * windowHeight) / 100)) {
                animateElement(element, element.getAttribute('animation-on-scroll'));
            }
        }
    }

    function animateElement(theElement, animationName) {
        theElement.classList.add(animationName);
        theElement.classList.remove('hidden');
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
}