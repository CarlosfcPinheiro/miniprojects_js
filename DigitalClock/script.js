window.addEventListener('load', timeCauculator);

function timeCauculator(){
    var date = new Date();

    var day = date.getDay(); //get day of week value
    var hour = date.getHours();
    var minute = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hour >= 12 ? ampm = "PM" : ampm = "AM"; //ternary operator
    var dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('day').innerHTML = dayNames[day];
    document.getElementById('hour').innerHTML = hour + ':';
    document.getElementById('minute').innerHTML = minute + ':';
    document.getElementById('seconds').innerHTML = seconds;
    document.getElementById('ampm').innerHTML = ampm;

    setTimeout(timeCauculator, 200);
}