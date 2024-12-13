import Dependentes from "./Dependentes";
import { dependentesProps } from "./Dependentes";
import './App.css'

interface funcionariosProps {
    nome:string,
    setor:string,
    data_admissao:string,
    salario_base: number,
    dependentes:dependentesProps[]
}


export default function Funcionarios({nome,setor,data_admissao,salario_base,dependentes}:funcionariosProps){
    const data = new Date(data_admissao);
    return(
        <div className="funcionarios">
            <h3>Nome Completo:</h3>
            <p>{nome}</p>
            <h3>Setor:</h3>
            <p>{setor}</p>
            <h3>Data Admissão:</h3>
            <p>{data.toLocaleDateString()}</p>
            <h3>Salário Base:</h3>
            <p>R$ {salario_base},00</p>
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
        ) : ( <h4>Funcionário não possui dependentes.</h4> )
        }
        </div>
    );
}