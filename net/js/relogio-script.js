setInterval(() =>
{
    var horas = document.getElementById('horas')
    var minutos = document.getElementById('min')
    var segundos = document.getElementById('seg')
    var ampm = document.getElementById('ampm')

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

    horas.innerHTML = h
    minutos.innerHTML = m
    segundos.innerHTML = s
    ampm.innerHTML = am
});

