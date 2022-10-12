const ListaService = require('../services/ListaService');

module.exports = {
  buscarTodos: async(req, res)=>{
    let json = {error:'', result:[]};

    let lista = await ListaService.buscarTodos();

    for(let i in carros){
      json.result.push({
        codigo: lista[i].codigo,
        nome: lista[i].nome,
        ramal: lista[i].ramal
      });
    }
    res.json(json);
  }
}