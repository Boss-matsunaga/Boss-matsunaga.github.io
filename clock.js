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
    for (i = 0; i < 10; i++) {
        if (!(Seconds % 10 == i)) document.getElementById(i).style.backgroundColor = "white";
    }
}