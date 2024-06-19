function updateTime() {
    var daysOfWeek = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    var monthsOfYear = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    var now = new Date();
    var dayOfWeek = daysOfWeek[now.getDay()];
    var dayOfMonth = now.getDate();
    var month = monthsOfYear[now.getMonth()];
    var year = now.getFullYear();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var semester = "";


    if (now.getMonth() >= 1 && now.getMonth() < 4) {
        semester = "1º Bimestre";
    } else if (now.getMonth() >= 4 && now.getMonth() < 7) {
        semester = "2º Bimestre";
    } else if (now.getMonth() >= 8 && now.getMonth() < 10) {
        semester = "3º Bimestre";
    } else {
        semester = "4º Bimestre";
    }

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var timeString = dayOfWeek + ', ' + dayOfMonth + ' de ' + month + ' de ' + year + ' - ' + semester + ' - ' + hours + ':' + minutes + ':' + seconds;

    document.getElementById('clock').innerText = timeString;
}

setInterval(updateTime, 1000);

updateTime();










