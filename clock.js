function clockRouner() {
    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();

    var p = "AM";
    if (hour > 12) {
        hour -= 12;
        var p = "PM";
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        hour = "0" + minute;
    }
    if (second < 10) {
        hour = "0" + second;
    }

    var clock = hour + ":" + minute + ":" + second + "   " + p;
    document.getElementById("clock").textContent = clock;


    setTimeout(clockRouner, 1000);
}
clockRouner();