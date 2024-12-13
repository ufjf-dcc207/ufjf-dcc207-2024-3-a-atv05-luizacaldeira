import Dependentes from "./Dependentes";
import { dependentesProps } from "./Dependentes";

interface funcionariosProps {
    nome:string,
    setor:string,
    data_admissao:string,
    salario_base: number,
    dependentes:dependentesProps[]
}


export default function Funcionarios({nome,setor,data_admissao,salario_base,dependentes}:funcionariosProps){
    return(
        <div>
            <h3>{nome}</h3>
            <h3>{setor}</h3>
            <h3>{salario_base}</h3>
            <h3>{data_admissao}</h3>
            {dependentes.map((dependente)=>(
                <Dependentes nome={dependente.nome} data_nascimento={dependente.data_nascimento} abono_salarial={dependente.abono_salarial} />

            ))}
        </div>
    );
}