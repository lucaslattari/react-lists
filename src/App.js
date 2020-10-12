import React from 'react';
import './App.css';

function Channel(props){
  return(
    <div className = "grid-item"
      style = {{
        backgroundColor: '#fff',
      }}>
      <h3>{props.name}</h3>
      <img src={props.avatar} alt={props.description} style={{
        maxWidth: '150px',
      }}/>
    </div>
  );
}

class ChannelList extends React.Component{
  constructor(props){
    super(props);
    this.state = {channels: this.props.channels};

    this.styleRedButton = {
        backgroundColor: '#f44336',
        border: 'none',
        color: 'white',
        padding: '15px 32px',
        marginBottom: "20px",
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
    }
  }

  deleteChannel = (index_channel) => {
    const temp_list_channels = this.state.channels.slice();
    temp_list_channels.splice(index_channel, 1);
    this.setState({channels: temp_list_channels});
  }

  render(){
    return(
      <div className="grid-container">
      {
        this.state.channels.map((c, index) => {
          return(
            <div key={index}>
              <Channel name={c.name} avatar={c.avatar} description={c.description} />
              <button type="button" style={this.styleRedButton} onClick={() => this.deleteChannel(index)}>
                DELETAR CANAL
              </button>
            </div>
          );
        })
      }
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ChannelList channels={[
          { avatar: "avatarUD.png", name: "Universo Discreto", description: "Computação" },
          { avatar: "avatarPB.jpg", name: "Peixe Babel", description: "Computação" },
          { avatar: "avatarPD.jpg", name: "Programação Dinâmica", description: "Computação" },
          { avatar: "avatarLOH.jpg", name: "Leitura Obrigahistória", description: "História" },
          { avatar: "avatarMDM.jpg", name: "Manual do Mundo", description: "Tecnologia e Ciência" },
          { avatar: "avatarNV1C.jpg", name: "Nunca Vi 1 Cientista", description: "Ciência em Geral" },
          { avatar: "avatarPIRULA.jpg", name: "Canal do Pirulla", description: "Ciência em Geral" },
          { avatar: "avatarBLABLA.jpg", name: "Bláblálogia", description: "Ciência em Geral" },
          { avatar: "avatarDEVANIL.jpg", name: "Alimente o Cérebro", description: "Ciências Humanas" },
        ]}/>
      </header>
    </div>
  );
}

export default App;
