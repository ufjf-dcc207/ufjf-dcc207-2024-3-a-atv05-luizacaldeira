import './App.css'
import Funcionarios from './Funcionarios';
import dados from'./dados.json'

/*Você tem a liberdade para escolher a exibição usando CSS, mas deve apresentar as datas e valores no formato local e calcular o salário total contando os abonos por dependentes durante o desenho da interface.*/


function App() {
  const funcionarios = dados.funcionarios;
  return(
    <div className='app'>
      {funcionarios.map((funcionario)=>(
        <Funcionarios 
          key = {funcionario.nome_completo}
          nome = {funcionario.nome_completo} 
          setor = {funcionario.setor} 
          data_admissao = {funcionario.data_admissao} 
          salario_base = {funcionario.salario_base} 
          dependentes = {funcionario.dependentes}/>
      ))}
    </div>
    
  );
    
}
export default App
