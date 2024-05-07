import Banner from './componentes/Banners/Banner';
import Rodape from './componentes/Rodape/rodape';
import Formulario from './componentes/Formulario';
import { useState } from 'react';
import Tripulacao from './componentes/Tripulacao/Tripulacao';

function App() {

  const tripulacao = [
    {
      nome: 'Chapeús de Palha',
      corPrimaria: '#d96153',
      corSecundaria: '#fffaac'
    },
    {
      nome: 'Piratas do Kid',
      corPrimaria: '#828282',
      corSecundaria: '#fc370c'
    },
    {
      nome: 'Piratas do Barba Branca',
      corPrimaria: '#efb810',
      corSecundaria: '#d3d3d3'
    },
    {
      nome: 'Piratas do Roger',
      corPrimaria: '#fffaac',
      corSecundaria: '#a22c27'
    },
    {
      nome: 'Piratas Heart',
      corPrimaria: '#000000',
      corSecundaria: '#f0c505'
    },
    {
      nome: 'Piratas do Ruivo',
      corPrimaria: '#333333',
      corSecundaria: '#790614'
    },
    {
      nome: 'Cross Guild',
      corPrimaria: '#d96153',
      corSecundaria: '#02b9ea'
    },
    {
      nome: 'Piratas do Barba Negra',
      corPrimaria: '#000000',
      corSecundaria: '#FFFFFF'
    },



  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario nomesDaTripulacao={tripulacao.map(tripulacao => tripulacao.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {tripulacao.map(tripulacao => <Tripulacao
        key={tripulacao.nome}
        nome={tripulacao.nome}
        corPrimaria={tripulacao.corPrimaria}
        corSecundaria={tripulacao.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.tripulacao === tripulacao.nome)}
      />)}
      <Rodape />
    </div>
  );
}

export default App;
