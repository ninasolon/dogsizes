import React, { Component } from 'react'
import Language from '../components/home/Language'

export default class Home extends Component{
  componentDidMount(){
    document.getElementById('footer').classList.remove('footer--sizes')
  }
  
  render(){
    return(
      <div className='home--container'>
        <Language
          class='home--pt'
          title='Tá com dúvida no tamanho?'
          subtitle='Relaxa que a gente te ajuda!'
          btn='https://www.zeedog.com.br/arquivos/button-pt.png?v=636028946637270000'
          lang='pt'
        />
        <Language
          class='home--en'
          title='Not sure about the size?'
          subtitle={"No worries, we'll help you!"}
          btn='https://www.zeedog.com.br/arquivos/button-en.png?v=636028946644730000'
          lang='en'
        />
      </div>
    )
  }
}