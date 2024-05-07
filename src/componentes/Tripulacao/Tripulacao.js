import './Tripulacao.css'
import Colaborador from '../Colaborador'

const Tripulacao = (props) => {
    const css = { backgroundColor: props.corSecundaria }

    return (

        <section className="tripulacao" style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador
                    corDeFundo={props.corPrimaria}
                    key={colaborador.nome}
                    nome={colaborador.nome}
                    funcao={colaborador.funcao}
                    imagem={colaborador.imagem}
                />)}
            </div>
        </section>
    )

}

export default Tripulacao