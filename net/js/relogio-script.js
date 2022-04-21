setInterval(() =>
{
    var horas = document.getElementById('horas')
    var minutos = document.getElementById('min')
    var segundos = document.getElementById('seg')
    var ampm = document.getElementById('ampm')

    var hh = document.getElementById('hh')
    var mm = document.getElementById('mm')
    var ss = document.getElementById('ss')

    var hr_dot = document.querySelector('.hr_dot')
    var min_dot = document.querySelector('.min_dot')
    var seg_dot = document.querySelector('.seg_dot')


    var h = new Date().getHours()
    var m = new Date().getMinutes()
    var s = new Date().getSeconds()
    var am = h >= 12 ? "PM" : "AM"

    if (h > 12) // CONVERTER 24H PARA 12H
    {
        h = h - 12
    }

    h = (h < 10) ? "0" + h : h // ADD 0 PARA UM NUMERO SOZINHO
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s

    horas.innerHTML = h + '<br><span>Horas</span>'
    minutos.innerHTML = m + '<br><span>Minutos</span>'
    segundos.innerHTML = s + '<br><span>Segundos</span>'
    ampm.innerHTML = am

    hh.style.strokeDashoffset = 440 - (440 * h) / 12; // HORAS
    mm.style.strokeDashoffset = 440 - (440 * m) / 60; // MINUTOS
    ss.style.strokeDashoffset = 440 - (440 * s) / 60; // SEGUNDOS

    hr_dot.style.transform = `rotate(${h * 30}deg)`
    min_dot.style.transform = `rotate(${m * 6}deg)`
    seg_dot.style.transform = `rotate(${s * 6}deg)`

});

