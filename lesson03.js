const eng = "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday"
const rus = "Понедельник,Вторник,Среда,Четверг,Пятница,Суббота,Воскресенье"
const all = ["en",(eng).split(","),"ru",(rus).split(",")]
// if/else
function langIf(){
    const l=prompt("Choose language(en/ru):")
    if (l=="en"){
        console.log(eng)
    }
    else if (l=="ru"){
        console.log(rus)
    }
    else(console.log("wrong input, try again"))
} 
// case
function langCase(){
    const l=prompt("Choose language(en/ru):")
    switch(l){
        case "ru":
            console.log(rus)
            break
        case "en":
            console.log(eng)
            break
    }
}
// array
function langArr(){
    const l=prompt(("Choose language(en/ru):"))
    console.log(String(all[all.indexOf(l)+1]))
}

function Name(){
    const namePerson = prompt()
    if (namePerson == "Артём"){
        console.log("директор")
    }
    else if (namePerson == "Александр") {
        console.log("преподаватель")
    }
    else{
        console.log("студент")
    }
}

function homeWork() {
    const act = prompt("Выберите номер задания для проверки (1, 2):");
    
    switch (act) {
        case "1":
            const version = prompt("Какой вариант проверить?\n1)if\n2)case\n3)array\n:");
            
            switch (version) {
                case "if":
                    langIf();
                    break;
                case "case":
                    langCase();
                    break;
                case "array":
                    langArr();
                    break;
            }
            break;
            
        case "2":
            Name();
            break;
    }
}
homeWork();

