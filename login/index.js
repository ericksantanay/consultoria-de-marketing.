function Clicou(requered) {
    const ip = document.getElementById('inome').value
    const ip2 = document.getElementById('iemail').value
    let r  = document.getElementById('res')
    
    if (ip,ip2 == '') {
        alert('DIGITE NO CAMPO ABAIXO.')
    }else {
    document.body.style.color = 'green'
    r.innerText = ('Enviado !!')
    }
}