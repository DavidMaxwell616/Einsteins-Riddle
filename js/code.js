const colors = ['', 'Blue', 'Green', 'Red', 'White', 'Yellow'];
const nationalities = ['', 'Brit', 'Dane', 'German', 'Norwegian', 'Swede'];
const drinks = ['', 'Beer', 'Coffee', 'Milk', 'Tea', 'Water'];
const cigarettes = ['', 'Blends', 'Blue Master', 'Dunhill', 'Pall Mall', 'Prince'];
const pets = ['', 'Birds', 'Cats', 'Dogs', 'Horses', 'Fish'];
const categories = ['color', 'nationality', 'drink', 'cigarette', 'pet'];
const groups = ['colors', 'nationalities', 'drinks', 'cigarettes', 'pets'];
const numHouses = 5;
const clues =
    [
        ['house-3', 'nationality-1', 'same'],
        ['nationality-5', 'pet-3', 'same'],
        ['nationality', '2-drink-4', 'same'],
        ['color-2', 'color-4', 'neighbor'],
        ['house-2', 'drink-2', 'same'],
        ['cigarette-4', 'pet-1', 'same'],
        ['house-5', 'cigarette-3', 'same'],
        ['house-3', 'drink-3', 'same'],
        ['nationality-4', 'house-1', 'same'],
        ['cigarette-1', 'pet-2', 'neighbor'],
        ['pet-4', 'cigarette-3', 'neighbor'],
        ['cigarette-2', 'drink-1', 'same'],
        ['nationality-3', 'cigarette-5', 'same'],
        ['nationality-4', 'color-1', 'neighbor'],
        ['cigarette-1', 'drink-5', 'neighbor'],
    ];

function BuildMenu(arr, category) {
    var options = "";
    arr.map((op, i) => {
        options += `<option value="${op}" id="${i}" style="border-radius: 5px;"">${op}</option>`
    });
    for (i = 1; i < 6; i++) {
        const elementId = "house-" + i + "-" + category;
        document.getElementById(elementId).innerHTML = options;
    }
}

function DisableValues(id, house) {
    var houseNumber = house.split('-')[1];
    for (i = 1; i < numHouses; i++) {
        if (i != houseNumber) {
            var e = document.getElementById(house.replace(houseNumber, i));
            for (let index = 0; index < categories; index++) {
                $(e.options[index]).prop('disabled', false);
            }
            $(e.options[id]).prop('disabled', true);
        }
    }
}

function CheckClues() {
    var valuesSelected = [];
    for (i = 1; i <= numHouses; i++) {
        for (let j = 0; j < categories.length; j++) {
            var houseName = "#house-" + i + "-" + categories[j];
            const id = $(houseName).find(":selected")[0].id.trim();
            if (id > 0)
                valuesSelected.push(["house-" + i, categories[j] + "-" + id]);
        }
    }
    for (let index = 0; index < clues.length; index++) {
        const clue = clues[index];
        for (i = 0; i < valuesSelected.length; i++) {
            const value = valuesSelected[i];
            if (clue[2] == 'same') {
                if ((clue[0] == value[0] && clue[1] == value[1]) || (clue[1] == value[0] && clue[0] == value[1])) {
                    document.getElementById('clue-' + (index + 1)).style.backgroundColor = 'Green';
                }
            }
            else if (clue[2] == 'neighbor') {
                console.log(clue, value);
            }
        }
    }
}