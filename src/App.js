import React, { Component } from "react";
import "./css/pure-min.css";
import "./css/side-menu.css";
import $ from 'jquery';


class App extends Component {

  constructor(){
    super();
    this.state = {lista : [], nome: '', email: '', senha: ''};
    this.EnviaForm = this.EnviaForm.bind(this);
    this.setNome = this.setNome.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setSenha = this.setSenha.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url:"http://localhost:3004/autores",
      dataType: 'json',
      success:function(resposta){
        this.setState({lista:resposta})
      }.bind(this)
    }
  );
  }

  // http://cdc-react.herokuapp.com/api/autores

  EnviaForm(evento){
    evento.preventDefault();
    console.log("dados sendo enviados")
    $.ajax ({
      url:"http://localhost:3004/autores",
      contentType: 'application/json',
      dataType:'json',
      type:'post',
      data: JSON.stringify({nome:this.state.nome, email:this.state.email, senha:this.state.senha }),
      success: function(resposta){
        console.log("enviado com sucesso");
        this.setState({lista:resposta})
      }.bind(this),
      error: function(resposta){
          console.log("erro");
      }.bind(this)
    })

  }

  setNome(evento){
    this.setState({nome:evento.target.value});
  }
  
  setEmail(evento){
    this.setState({email:evento.target.value});
  }
  
  setSenha(evento){
    this.setState({senha:evento.target.value});
  }
  
  render() {
    return (
      <div id="layout">
        <a href="#menu" id="menuLink" class="menu-link">
          <span />
        </a>
        <div id="menu">
          <div class="pure-menu">
            <a class="pure-menu-heading" href="#">
              YURI MELLO
            </a>
            <ul class="pure-menu-list">
              <li class="pure-menu-item">
                <a href="#" class="pure-menu-link">
                  Home
                </a>
              </li>
              <li class="pure-menu-item">
                <a href="#" class="pure-menu-link">
                  Autor
                </a>
              </li>
              <li class="pure-menu-item">
                <a href="#" class="pure-menu-link">
                  Livro
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div id="main">
          <div class="header">
            <h1>Cadastro de Autores</h1>
          </div>
          <div className="content" id="content">
          <h3 class="content-subhead">Formulario de cadastro de autores.</h3>
            <div className="pure-form pure-form-aligned">
              <form className="pure-form pure-form-aligned" onSubmit={this.EnviaForm.bind(this)} method="post">
                <div className="pure-control-group">
                  <label htmlFor="nome">Nome</label>
                  <input id="nome" type="text" name="nome" value={this.state.nome}  onChange={this.setNome}/>
                </div>
                <div className="pure-control-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" name="email" value={this.state.email} onChange={this.setEmail} />
                </div>
                <div className="pure-control-group">
                  <label htmlFor="senha">Senha</label>
                  <input id="senha" type="password" name="senha"  value={this.state.senha} onChange={this.setSenha}/>
                </div>
                <div className="pure-control-group">
                  <label />
                  <button
                    type="submit"
                    className="pure-button pure-button-primary"
                  >
                    Gravar
                  </button>
                </div>
              </form>
            </div>
            <h3 class="content-subhead">Lista de autores adicionados.</h3>
            <div>
              <table className="pure-table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>email</th>
                  </tr>
                </thead>
                <tbody>
                    {
                      this.state.lista.map(function(Autor){
                        return (
                          <tr>
                            <td>{Autor.nome}</td>
                            <td>{Autor.email}</td>
                          </tr>
                        );
                      })                     
                    }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
