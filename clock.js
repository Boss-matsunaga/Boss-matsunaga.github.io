function DspClk() {
    DD = new Date();
    Year = DD.getYear() + 1900;
    Month = DD.getMonth() + 1;
    Day = DD.getDate();

    Hours = DD.getHours();
    Minutes = DD.getMinutes();
    Seconds = DD.getSeconds();

    dayOfWeek = DD.getDay();	// 曜日(数値)
    dayOfWeekStr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];	// 曜日(日本語表記)
    dayName = dayOfWeekStr[dayOfWeek];

    document.getElementById("time").innerHTML = Year + "/" + ("0" + Month).slice(-2) + "/" + ("0" + Day).slice(-2) + "(" + dayName + ")" + " " + ("0" + Hours).slice(-2) + ":" + ("0" + Minutes).slice(-2) + ":" + ("0" + Seconds).slice(-2);

    document.getElementById(Seconds % 10).style.backgroundColor = "salmon";
    /*for (i = 0; i < 10; i++) {
        if (!(Seconds % 10 == i)) document.getElementById(i).style.backgroundColor = "white";
    }*/
    var flag = 0;
    if(Hours == 9 && Minutes < 30){
        flag = 1;
        white_bg(flag);
        clear(flag);
    }
    else if(Hours == 9 && Minutes >=30){
        flag = 2;
        white_bg(flag);
        clear(flag);
    }
    else if(Hours == 10 && Minutes < 30){
        flag = 3;
        white_bg(flag);
        clear(flag);
    }
    else if(Hours == 10 && Minutes >= 30){
        flag = 4;
        white_bg(flag);
        clear(flag);
    }
    else if(Hours == 11 && Minutes < 30){
        flag = 5;
        white_bg(flag);
        clear(flag);
    }
    else if(Hours == 11 && Minutes >= 30){
        flag = 6;
        white_bg(flag);
        clear(flag);         
    }
    else if(Hours == 12){
        flag = 13;
        white_bg(flag);
        clear(flag);          
    }
    else if(Hours == 13 && Minutes < 30){
        flag = 7;
        white_bg(flag);
        clear(flag);
    }
    else if(Hours == 13 && Minutes >= 30){
        flag = 8;
        white_bg(flag);
        clear(flag);
    }
    else if(Hours == 14 && Minutes < 30){
        flag = 9;
        white_bg(flag);
        clear(flag);
    }
    else if(Hours == 14 && Minutes >= 30){
        flag = 10;
        white_bg(flag);
        clear(flag);
    }
    else if(Hours == 15 && Minutes < 30){
        flag = 11;
        white_bg(flag);
        clear(flag);
    }
    else if(Hours == 15 && Minutes >= 30){
        flag = 12;
        white_bg(flag);
        clear(flag);
    }
    else{
        flag = 0;
        clean(flag);
    }
}

function white_bg(flag){
    for(var i = 1; i < 6; i++){
        document.getElementById(flag + "-" + i).style.backgroundColor = "#FF0000";
    }
}

function clean(flag){
    for(var i = 1; i < 14; i++){
        for(var j = 0; j < 6; j++){
            if(i != flag){
                document.getElementById(i+"-"+j).style.backgroundColor = "#FFFFFF";
            }
            document.getElementById(i+"-0").style.backgroundColor = "#F7FE2E";
        }
    }
}