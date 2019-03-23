import React, { Component } from "react";
import "./css/pure-min.css";
import "./css/side-menu.css";
import $ from 'jquery';

class App extends Component {


  constructor(){
    super();
    this.state = {lista : []};
  }

  componentWillMount() {
    $.ajax({
      url:"http://localhost:3004/autores",
      dataType: 'json',
      success:function(resposta){
        this.setState({lista:resposta})
      }.bind(this)
    }
  );
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
            <h1>CADASTRO DE AUTORES</h1>
          </div>
          <div className="content" id="content">
          <h3 class="content-subhead">Formulario de cadastro de autores.</h3>
            <div className="pure-form pure-form-aligned">
              <form className="pure-form pure-form-aligned">
                <div className="pure-control-group">
                  <label htmlFor="nome">Nome</label>
                  <input id="nome" type="text" name="nome" value="" />
                </div>
                <div className="pure-control-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" name="email" value="" />
                </div>
                <div className="pure-control-group">
                  <label htmlFor="senha">Senha</label>
                  <input id="senha" type="password" name="senha" />
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
