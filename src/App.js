import './App.css';
import { Component } from 'react';
import Article from './components/Article';

class App extends Component {
  state = {
    nom: "pull",
    prix: "32€"
  }
  render(){
    return (
      <div>
        <Article prix="35€" nom="Pantalon"></Article>
        <Article prix="29€" nom="Chemise"></Article>
        <Article prix={this.state.prix} nom={this.state.nom}></Article>
      </div>
    )
  }
}

export default App;
