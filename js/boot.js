const colors = ['', 'Blue', 'Green', 'Red', 'White', 'Yellow'];
const nationalities = ['', 'Brit', 'Dane', 'German', 'Norwegian', 'Swede'];
const drinks = ['', 'Beer', 'Coffee', 'Milk', 'Tea', 'Water'];
const cigarettes = ['', 'Blends', 'Blue Master', 'Dunhill', 'Pall Mall', 'Prince'];
const pets = ['', 'Birds', 'Cats', 'Dogs', 'Horses', 'Fish'];
const clues =
{
    1: 'h3-n1-same',
    2: 'n5-p3-same',
    3: 'n2-d4-same',
    4: 'h2-h4-neighbor',
    5: 'h2-d2-same',
    6: 'c4-p1-same',
    7: 'h5-c3-same',
    8: 'h3-d3-same',
    9: 'n4-h1-same',
    10: 'c1-p2-neighbor',
    11: 'p4-c3-neighbor',
    12: 'c2-d1-same',
    13: 'n3-c5-same',
    14: 'n4-h1-neighbor',
    15: 'c1-d5-neighbor',
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

function DisableValues(val,house)
{
    for (i = 1; i < 6; i++) {
        if(i!=val)
        {
            var e = document.getElementById(house.replace(val,i));
            $(e.options[val]).prop('disabled', true);
        }
            //            console.log(document.getElementById(house.replace(val,i).option[value='1']));
        // $(house+'-'+type+'.'+ 'option[value='+id+']').prop('disabled', true);
    }
}
