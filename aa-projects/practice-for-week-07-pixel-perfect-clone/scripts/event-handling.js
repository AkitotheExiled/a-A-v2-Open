
window.addEventListener('DOMContentLoaded', () => {
    handleFilterAnimations();
    filterTextHandler();

})

function handleFilterAnimations() {
    const filterMenu = document.getElementById('filter');
    const svgDiv = document.getElementById('svgToFlip');
    const disText = document.getElementById('displayText');
    let selected;
    filterMenu.addEventListener('click', event => {
        selected = event.target;

        let selectionText = document.getElementById('filterSelectionText');

        selectionText.classList.toggle('hidden');
        filterMenu.classList.toggle('widen--filter');
        svgDiv.classList.toggle('flip--svg');
        disText.classList.toggle('push--left');

    })
}

function filterTextHandler() {
    const filterMenu = document.getElementById('filter');
    const options = document.getElementsByClassName('column__item');
    let selected;
    let idOfParent
    let importantTextToWatch = ['Albums', 'Artists', 'Lyrics'];
    for (let option of options) {
        option.addEventListener('click', event => {

            selected = event.target;
            let parent = selected.parentElement;
            idOfParent = parent.id;

            removeSelectedFromClass(parent.childNodes, 'selected');
            event.target.classList.add('selected');

            if (idOfParent === 'songs') {
                let elementsToHide = document.getElementsByClassName('to-be-hidden');

                if (importantTextToWatch.includes(selected.textContent.trim())) {
                   for (let child of elementsToHide) {
                    child.classList.add('hidden');
                    filterMenu.classList.add('short--filter');
                   }
                } else {
                    for (let child of elementsToHide) {
                        child.classList.remove('hidden');
                        filterMenu.classList.remove('short--filter');
                       }
                }
            }
            let textToChange = document.getElementsByClassName('text__' + idOfParent)[0];
            console.log(selected.textContent);
            if (selected.textContent.trim() === "All") {
                textToChange.textContent = "All Genres";
            } else {
                textToChange.textContent = selected.textContent.trim();
            }

        })
    }
}

function removeSelectedFromClass(listToSearch, selected) {
    for (let item of listToSearch) {
        if (item.nodeName === 'DIV') {
            item.classList.remove(selected);

        }
    }
}
