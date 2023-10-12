const date = new Date();
const month = date.getMonth();
const year = date.getFullYear();
let today = date.getDay();
document.getElementById("cal-month").innerHTML = date.toLocaleString('default', { month:'short' });
document.getElementById("cal-year").innerHTML = year;
makeFirstRow(daysInMonth(), computeFirstDay());
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
    //make the rest of the rows
    let start = 6 - dow +1;
    let rowNum = 2;
    for (rowNum; rowNum != 7; rowNum++){

        for (let dom = start.valueOf; dom <= start.valueOf() + 6; dom++){
            let rowId;
            switch (rowNum){
                case 2:
                    rowId = "row2";
                    break;
                case 3:
                    rowId = "row3";
                    break;
                case 4:
                    rowId = "row4";
                    break;
                case 5:
                    rowId = "row5";
                    break;
                case 6:
                    rowId = "row6";
                    break;
            }

            let td = document.createElement('td');
            if (dom == today){
                td.className = "active";
            }
            if (dom > numDays)
            {
                td.innerText = "";}
            else {
            td.innerHTML = dom.valueOf();
            document.getElementById(rowId).appendChild(td);
            }
            start = dom;
        }
    }
}

function makeFirstRow(numDays, dow){
    
    for (let i = 1; i < dow; i++){
        let cell = document.createElement('td');
        cell.innerText = "/";
        document.getElementById("row2").appendChild(cell);
    }
    for (let dom = 1; dom <= 8 - dow; dom++){
        let dayCell = document.createElement('td');
        if (dom == today){
            dayCell.className = "active";
        }
        dayCell.innerText = dom.valueOf();
        document.getElementById('row2').appendChild(dayCell);
        
    }
    
}

