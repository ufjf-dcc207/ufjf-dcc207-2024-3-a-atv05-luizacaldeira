import './App.css'

export interface dependentesProps {
    nome: string,
    data_nascimento: string,
    abono_salarial:number
}

export default function Dependentes({nome,data_nascimento,abono_salarial}:dependentesProps){
    const data = new Date(data_nascimento);
    return (
        <div className='dependentes'>
            <p>Nome Dependente: {nome} </p>
            <p>Data Nascimento: {data.toLocaleDateString()}</p>
            <p>Abono Salarial: R${abono_salarial},00</p>
        </div>
    );
}