import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import { useState } from 'react'
import './Formulario.css'

const Formulario = (props) => {


    const [nome, setNome] = useState('')
    const [funcao, setFuncao] = useState('')
    const [imagem, setImagem] = useState('')
    const [tripulacao, setTripulacao] = useState('Chapeús de palha')


    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            funcao,
            imagem,
            tripulacao
        })
        setNome('')
        setFuncao('')
        setImagem('')
        setTripulacao('')
    }
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados pra criar o card do personagem</h2>
                <CampoTexto

                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o nome do personagem"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />

                <CampoTexto

                    obrigatorio={true}
                    label="Função"
                    placeholder="Digite a função na tripulação"
                    valor={funcao}
                    aoAlterado={valor => setFuncao(valor)}

                />
                <CampoTexto

                    obrigatorio={true}
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Tripulação"
                    itens={props.nomesDaTripulacao}
                    valor={tripulacao}
                    aoAlterado={valor => setTripulacao(valor)}

                />
                <Botao> Criar card </Botao>
            </form>
        </section>
    )
}

export default Formulario