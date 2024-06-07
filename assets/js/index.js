const form = document.getElementById('formulario')

form.addEventListener('submit', function (e){
    e.preventDefault();
    
    const peso = parseFloat(document.getElementById('peso').value.replace(',', '.'));
    const altura = parseFloat(document.getElementById('altura').value.replace(',', '.'));

    if (isNaN(peso) || isNaN(altura)) {
        alert('Por favor, insira números válidos para peso e altura.');
        return;
    }

    const imc = getImc (peso, altura)

    const valor = document.getElementById("valor");
    let descricao = " ";
    
    valor.classList.add('atencao')

if ( imc < 18.5 ) {
    descricao = 'Abaixo do Peso'
} else if ( imc >= 18.5 && imc <= 25 ) {
    descricao = 'Peso Normal'
    valor.classList.remove('atencao')
    valor.classList.add('normal')
} else if ( imc >= 25 && imc <= 30 ) {
    descricao = 'Acima do Peso'
} else if ( imc >= 30 && imc <= 35 ) {
    descricao = 'Obesidade Grau 1'
} else if ( imc >= 35 && imc <= 40 ) {
    descricao = 'Obesidade Grau 2'
} else {
    descricao = 'Obesidade Grau 3'
}

function getImc(peso, altura){
    const imc = peso / altura **2 
    return imc.toFixed(2)
}

    valor.textContent = imc.replace('.',',')
    document.getElementById('descricao').textContent = descricao
});

