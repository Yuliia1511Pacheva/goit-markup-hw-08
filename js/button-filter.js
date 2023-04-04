const buttonEl = document.querySelector('.js-button');
const buttonContainer = document.querySelector('.js-filter-container');

const imgEl = document.querySelector('.js-item');
const cards = document.querySelectorAll('.js-item');


console.log(imgEl.dataset.type);
buttonContainer.addEventListener('click', onFilterButtonClick);

function onFilterButtonClick(evt) {
    if (!(evt.target.classList.contains('js-button'))) {
        return;
    }

    cards.forEach(item => {
        item.classList.remove('visually-hidden');
        
        if (evt.target.dataset.type !== item.dataset.type && evt.target.dataset.type !== "all") {
            item.classList.add('visually-hidden')
        }
    })
}
