const colors = ['','Blue','Green','Red','White','Yellow'];
const nationalities = ['','Brit','Dane','German','Norwegian','Swede'];
const drinks = ['','Beer','Coffee','Milk','Tea','Water'];
const cigarettes = ['','Blends','Blue Master','Dunhill','Pall Mall','Prince'];
const pets = ['','Bird','Cats','Dogs','Horses','Fish'];

function BuildMenu(arr,category)
    {
        var options="";
        arr.map((op,i)=>{
            options+=`<option value="${op}" id="${i}" style="border-radius: 5px;"">${op}</option>`
            });
            for(i=1;i<6;i++)
            {
            document.getElementById("house-"+ i + "-" + category).innerHTML=options;
            }
        }
