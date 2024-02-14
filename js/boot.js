const colors = ['', 'Blue', 'Green', 'Red', 'White', 'Yellow'];
const nationalities = ['', 'Brit', 'Dane', 'German', 'Norwegian', 'Swede'];
const drinks = ['', 'Beer', 'Coffee', 'Milk', 'Tea', 'Water'];
const cigarettes = ['', 'Blends', 'Blue Master', 'Dunhill', 'Pall Mall', 'Prince'];
const pets = ['', 'Birds', 'Cats', 'Dogs', 'Horses', 'Fish'];
const categories = ['color','nationality','drink','cigarette','pet'];
const groups = ['colors','nationalities','drinks','cigarettes','pets'];
const numHouses = 5;
const clues =
{
    1: ['house-3','nationality-1','same'],
    2: ['nationality-5','pet-3','same'],
    3: ['nationality','2-drink-4','same'],
    4: ['house-2','house-4','neighbor'],
    5: ['house-2','drink-2','same'],
    6: ['cigarette-4','p1-same'],
    7: ['house-5-c3-same'],
    8: ['house-3-d3-same'],
    9: ['nationality-4','house1','same'],
    10:['cigarette-1','pet-2','neighbor'],
    11:['pet-4','cigarette-3','neighbor'],
    12:['cigarette-2','drink-1','same'],
    13:['nationality-3','cigarette-5','same'],
    14:['nationality-4','house-1','neighbor'],
    15:['cigarette-1','drink-5','neighbor'],
};

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

function DisableValues(id, house)
{
    var houseNumber = house.split('-')[1];
    for (i = 1; i < numHouses; i++) {
        if(i!=houseNumber)
        {
            var e = document.getElementById(house.replace(houseNumber,i));
            for (let index = 0; index < categories; index++) {
                 $(e.options[index]).prop('disabled', false);
            }
            $(e.options[id]).prop('disabled', true);
        }
    }
}

function CheckClues(id, house)
{
}