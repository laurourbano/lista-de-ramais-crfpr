const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sNome = document.querySelector('#m-nome')
const sDepartamento = document.querySelector('#m-departamento')
const sRamal = document.querySelector('#m-ramal')
const sEmail = document.querySelector('#m-email')
const btnSalvar = document.querySelector('#btnSalvar')


let itens
let id

function openModal(edit = false, index = 0) {
  modal.classList.add('active')

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')
    }
  }

  if (edit) {
    sNome.value = itens[index].nome
    sDepartamento.value = itens[index].departamento
    sRamal.value = itens[index].ramal
    sEmail.value = itens[index].email
    id = index
  } else {
    sNome.value = ''
    sDepartamento.value = ''
    sRamal.value = ''
    sEmail.value = ''
  }
  
}

function editItem(index) {

  openModal(true, index)
}

function deleteItem(index) {
  result = confirm('Deseja realmente excluir?');
  if(result==true){
    itens.splice(index, 1);
    setItensBD();
    loadItens();
  }else{
    return
  }
}

function insertItem(item, index) {
  let tr = document.createElement('tr')

  tr.innerHTML = `
    <td>${item.nome.toUpperCase()}</td>
    <td>${item.departamento.toUpperCase()}</td>
    <td>${Number(item.ramal)}</td>
    <td>${item.email.toLowerCase()}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `
  tbody.appendChild(tr)
}

btnSalvar.onclick = e => {
  
  if (sNome.value == '' || sDepartamento.value == '' || sRamal.value == '' || sEmail.value == '') {
    return
  }

  e.preventDefault();

  if (id !== undefined) {
    itens[id].nome = sNome.value
    itens[id].departamento = sDepartamento.value
    itens[id].ramal = sRamal.value
    itens[id].email = sEmail.value
  } else {
    itens.push({'nome': sNome.value, 'departamento': sDepartamento.value, 'ramal': sRamal.value, 'email': sEmail.value})
  }

  setItensBD()

  modal.classList.remove('active')
  loadItens()
  id = undefined
}

function loadItens() {
  itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })

}

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens()
