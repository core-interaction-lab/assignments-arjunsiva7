const attachEventListeners = (input, output) => {
    input.addEventListener('keyup', function() {
        output.innerHTML = input.value;
    })
};

const verb1Input = document.getElementById('verb-1-input');
const verb1Output = document.getElementById('verb-1');

attachEventListeners(verb1Input, verb1Output);

const verb2Input = document.getElementById('verb-2-input');
const verb2Output = document.getElementById('verb-2');

attachEventListeners(verb2Input, verb2Output);

const noun1Input = document.getElementById('noun-1-input');
const noun1Output = document.getElementById('noun-1');

attachEventListeners(noun1Input, noun1Output);

const noun2Input = document.getElementById('noun-2-input');
const noun2Output = document.getElementById('noun-2');

attachEventListeners(noun2Input, noun2Output);