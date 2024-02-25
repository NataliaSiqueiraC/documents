function contar(){
    var inicio = document.getElementById('txti')
    var final = document.getElementById('txtf') 
    var paso = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (inicio.value.length  == 0 || final.value.length == 0 || paso.value.length == 0){
        window.alert('Faltam dados')
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(inicio.value)
        var f = Number(final.value)
        var p = Number(paso.value)

        if (i < f) {
        for(var c = i; c <= f; c += p) {
            res.innerHTML += `${c} `
        }
    } else {
         for(var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} `
            }
        }  
    }
}