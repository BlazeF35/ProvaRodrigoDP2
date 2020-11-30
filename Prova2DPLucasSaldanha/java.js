start();

function start() {
    let btn = document.getElementById('addConta');
    btn.onclick = function() {
        let descricao = document.getElementById('descricao');
        let valor = document.getElementById('valor');
        let data = document.getElementById('data');
        let tipo = document.getElementById('tipo');

        if (isValidForm(descricao, valor, data, tipo)) {
            addNewMateria(descricao.value, valor.value, data.value, tipo.value);
            clearFields(materia, nota, data, tipo);
        }
    };
}

function isValidForm(descricao, valor, data, tipo) {
    let isValid = true;
    if (descricao.value.trim() === '') {
        alert('Por favor, informe a descrição');
        isValid = false;
    } else if (valor.value.trim() === '') {
        alert('Por favor, informe o valor');
        isValid = false;
    }else if (data.value.trim() === '') {
        alert('Por favor, informe a data');
        isValid = false;
    }else if (tipo.value.trim() === '') {
        alert('Por favor, informe o tipo');
        isValid = false;{
    }

    return isValid;
}

function addNewConta(descricao, valor, data, tipo) {
    let table = document.getElementById('contas');
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.innerHTML = descricao;
    let td2 = document.createElement('td');
    td2.innerHTML = valor;
    let td3 = document.createElement('td');
    td3.innerHTML = data;
    let td4 = document.createElement('td');
    td4.innerHTML = tipo;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3)
    tr.appendChild(td4)
    table.tBodies[0].appendChild(tr);
}

function clearFields(descricao, valor, data, tipo) {
    descricao.value = '';
    valor.value = '';
    data.value = '';
    tipo.value = '';
    descricao.focus();
}

}