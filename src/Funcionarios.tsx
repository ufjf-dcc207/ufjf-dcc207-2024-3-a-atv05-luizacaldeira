import Dependentes from "./Dependentes";
import { dependentesProps } from "./Dependentes";
import './App.css'

interface funcionariosProps {
    nome:string,
    setor:string,
    data_admissao:string,
    salario_base: number,
    dependentes:dependentesProps[],
}


export default function Funcionarios({nome,setor,data_admissao,salario_base,dependentes}:funcionariosProps){
    const data = new Date(data_admissao);
    let salarioTotal = salario_base;

    for (let i = 0; i < dependentes.length; i++){
        salarioTotal += dependentes[i].abono_salarial;
    }

    return(
        <div className="funcionarios"> 
            <div className="titulo"><h2>Informações do Funcionário:</h2></div>
            <div className="nome">
                <h3>Nome Completo:</h3>
                <p>{nome}</p>
            </div>
            <div className="setor">
                <h3>Setor:</h3>
                <p>{setor}</p>  
            </div>
            <div className="data">
                <h3>Data Admissão:</h3>
                <p>{data.toLocaleDateString()}</p>
            </div>
            <div className="salbase">
                <h3>Salário Base:</h3>
                <p>R$ {salario_base},00</p>
            </div>
            <div className="dependentes">
                {dependentes.length > 0 ? (
                    <>
                        <h3>Dependentes:</h3>
                            {dependentes.map((dependente) => (
                            <Dependentes
                                key={dependente.nome}
                                nome={dependente.nome}
                                data_nascimento={data.toLocaleDateString()}
                                abono_salarial={dependente.abono_salarial}
                            />
                        ))}
                    </>
                ) : ( <h4>Funcionário não possui dependentes.</h4> )}
            </div>
        <div className="saltotal">
            <h3>Salário Total:</h3>
            <h4>R$ {salarioTotal},00</h4>
        </div>
    </div>
    );
}