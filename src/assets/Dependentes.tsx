

export interface dependentesProps {
    nome: string,
    data_nascimento: string,
    abono_salarial:number
}

export default function Dependentes({nome,data_nascimento,abono_salarial}:dependentesProps){
    return (
        <div>
            <h3>{nome}</h3>
            <h3>{data_nascimento}</h3>
            <h3>{abono_salarial}</h3>
        </div>
    );
}