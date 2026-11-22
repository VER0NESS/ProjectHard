"use strict"
const week = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fr", "Sat"]
const todayIndex = new Date().getDay() //0-6
for (let i = 0; i < week.length; i++) {
    const isWeekend = i === 0 || i === 6
    const isToday = i === todayIndex
    if (isWeekend && isToday) {
        document.write(`<b><i>${week[i]}</i></b><br>`)
    } else if (isWeekend) {
        document.write(`<b>${week[i]}</b><br>`)
    } else if (isToday) {
        document.write(`<i>${week[i]}</i><br>`)
    } else {
        document.write(`${week[i]}<br>`)
    }
}


const now = new Date();        
// Создаём объект с текущей датой и временем
const dayNumber = now.getDay(); 
// Получаем число от 0 до 6 (например, сегодня в воскресенье вернёт 0)
console.log(dayNumber); // 0
