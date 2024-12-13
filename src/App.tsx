import './App.css'
import Funcionarios from './assets/Funcionarios';
import dados from'./dados.json'


function App() {
  const funcionarios = dados.funcionarios;
  return(
    <div>
      {funcionarios.map((funcionario)=>(
        <Funcionarios nome = {funcionario.nome_completo} setor={funcionario.setor}/>
      ))}
    </div>
    
  );
    
}
export default App
