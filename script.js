const fetchData = async () => {
  try {
    const response = await fetch('db.json');
    const data = await response.text();
    const dataArray = JSON.parse(data);

    const tableBody = document.querySelector('tbody');

    dataArray.forEach((item) => {
      const row = document.createElement('tr');

      const nomeCell = document.createElement('td');
      nomeCell.textContent = item.nome;
      row.appendChild(nomeCell);

      const departamentoCell = document.createElement('td');
      departamentoCell.textContent = item.departamento;
      row.appendChild(departamentoCell);

      const ramalCell = document.createElement('td');
      ramalCell.textContent = item.ramal;
      row.appendChild(ramalCell);

      const emailCell = document.createElement('td');
      emailCell.textContent = item.email;
      row.appendChild(emailCell);

      const editarCell = document.createElement('td');
      editarCell.innerHTML = `<button id="editar-${item.id}">Editar</button>`;
      row.appendChild(editarCell);

      const excluirCell = document.createElement('td');
      excluirCell.innerHTML = `<button id="excluir-${item.id}">Excluir</button>`;
      row.appendChild(excluirCell);

      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();

const modalContainer = document.querySelector('.modal-container');
const modal = document.querySelector('.modal');

const openModal = () => {
  modalContainer.style.display = 'block';
};

const closeModal = () => {
  modalContainer.style.display = 'none';
};

const btnSalvar = document.getElementById('btnSalvar');

btnSalvar.addEventListener('click', (event) => {
  event.preventDefault();

  const nome = document.getElementById('m-nome').value;
  const departamento = document.getElementById('m-departamento').value;
  const ramal = document.getElementById('m-ramal').value;
  const email = document.getElementById('m-email').value;

  // Save data to db.json file

  closeModal();
});
