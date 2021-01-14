function somaData(){
    const dtini = document.getElementById('dtini').value
    const month = document.getElementById('month').value
    const result = moment(dtini).add(month, 'month').format("DD/MM/YYYY")
    $('#dtnew').val(result)
}

function somaDia(){
    const diaini = document.getElementById('diaini').value
    const day = document.getElementById('day').value
    const result = moment(diaini).add(day, 'days').format("DD/MM/YYYY")
    $('#dianew').val(result)
}

function enviar() {
    let fone = $('#fone').val();
    let text = $('#texto').val();
    $('#enviar').attr("href", "https://api.whatsapp.com/send?phone=55" + fone + "&text=" + text);
}

