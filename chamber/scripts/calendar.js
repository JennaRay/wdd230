const date = new Date();
const month = date.getMonth();
const year = date.getFullYear();
const days = document.querySelector('.days');
let today = date.getDay();
document.getElementById("cal-month").innerHTML = month.toLocaleString('en-us', {month: 'long'});
document.getElementById("cal-year").innerHTML = year;
makeCalendar(daysInMonth(), computeFirstDay());

function daysInMonth(m = month, y = year){
    if ((m + 1) in [1, 3, 5, 7, 8, 10, 12]){
        return 31;
    }
    else if ((m + 1) in [4, 6, 9, 11]) {
        return 30;
    }
    else {
        if (checkLeapYear(y)){
            return 29;
        }
        else {
            return 28;
        }
    }
}

function computeFirstDay(m = month, y = year){
    let firstDay = 1;

    for (let i = 1754; i <= y; i++){
        if (checkLeapYear(i)){
            firstDay += 2;
        }
        else {
            firstDay += 1;
        }
        if (firstDay >= 7){
            firstDay -= 7;
        }
    }
    firstDay += 1;
    if (firstDay >= 7){
        firstDay -= 7;
    }
    
    for (let i = 1; i >= m; i++){
        firstDay += (Math.floor(daysInMonth(i, year)) - (Math.floor(daysInMonth(i, year)/7)*7));
        if (firstDay>= 7){
            firstDay -= 7;
        }
    }

    return firstDay;
}

function checkLeapYear(y = year){
    if (y % 400 == 0){
        return true;
    }
    else if (y % 100 == 0 && y % 400 != 0){
        return false;
    }
    else if (y % 4 == 0 && y % 100 != 0){
        return true;
    }
    else{ return false;}
}

function makeCalendar(numDays, dow){
    let numRows = Math.ceil((numDays - (6 - dow))/7);
    //make first row
    makeFirstRow(numDays, dow);
    //make the rest of the rows
    let start = 6 - dom +1;
    for (let i = 1; i <= numRows; i++){
        let tr = document.createElement('tr');
        for (i = start; i <= start + 6; i++){
            let td = document.createElement('td');
            if (dom == today){
                td.className = "active";
            }
            if (i > numDays)
            {
                td.innerHTML = "";
            }
            else {
            td.innerHTML = i.valueOf();
            tr.appendChild(td);}
        }
        days.appendChild(tr);
    }
}

function makeFirstRow(numDays, dow){
    let fr = document.createElement('tr');
    for (let i = 1; i <= dow; i++){
        let td = document.createElement('td');
        td.innerHTML = "";
        fr.appendChild(td);
    }
    for (let dom = 1; dom <= 6 - dow; dom++){
        let td = document.createElement('td');
        if (dom == today){
            td.className = "active";
        }
        td.innerHTML = dom.valueOf();
        fr.appendChild(td);
    }
    days.appendChild(fr);
}

