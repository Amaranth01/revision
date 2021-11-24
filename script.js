const LEFT_BUTTON = 0;
const RIGHT_BUTTON = 2;
const cases = document.getElementsByClassName('case');

document.addEventListener('contextmenu', function (event){
    event.preventDefault();
})

for (let i = 0; i < cases.length; i++) {
    cases[i].addEventListener('mouseup', function (event) {
        if (event.button === LEFT_BUTTON) {
                insertText(this, 'X', 'green');
        }else
                insertText(this, 'O', 'red');
    });
}

function insertText (element, lettreJoueur, classCSS) {
    element.innerHTML = lettreJoueur;
    element.className.add(classCSS);
}