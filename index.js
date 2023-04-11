function saturdayFun(fun = "roller-skate") {
    return (`This Saturday, I want to ${fun}!`);
}
saturdayFun();

function mondayWork(work = 'go to the office') {
    return (`This Monday, I will ${work}.`)
}

mondayWork();

function wrapAdjective(character = '*') {
    const compliment = function(special = 'special') {
        return "You are " + character + special + character + "!";
    };
    return compliment;
}
