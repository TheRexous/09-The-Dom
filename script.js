// document.body.innerHTML = 'hello';
// document.title = 'Good job';

/* console.log(document.title);

document.title = 'Change';
document.body.innerHTML

console.log(document.body.innerHTML);

document.body.innerHTML = '<button>Goodjob</button>'; */

console.log(document.querySelector('button'));
console.log(document.querySelector('button').innerHTML);

document.querySelector('button').innerHTML = 'Changed';
document.querySelector('.js-button').innerHTML = 'Good morning';

const buttonElement = document.querySelector('.js-button');
console.log(buttonElement);

function subscribe() {
    const buttonElement = document.querySelector('.js-subscribe-button');

    if (buttonElement.innerTEXT === 'Subscribe') {
        buttonElement.innerHTML = 'Subscribed';
    } else {
        buttonElement.innerHTML = 'Subscribe';
    }
}