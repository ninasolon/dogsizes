import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import data from '../data/breeds'
import BreedSelect from '../components/breeds/BreedSelect'

export default class Breeds extends Component{
  constructor(props){
    super(props);
    this.state = {
      list: [],
    }
  }

  componentDidMount(){
    document.getElementById('footer').classList.remove('footer--sizes')
    this.setState({
      list: data
    })
  }

  showBreeds(){
    document.getElementById('breeds').classList.toggle('show')
  }

  filterBreeds(){
    const input = document.getElementById('input').value
    let filter = data.filter((item)=>{
      const array = item[1].pt_name + item[1].en_name
      return array.toLowerCase().includes(input.toLowerCase())
    })
    this.setState({
      list: filter
    })
  }

  render(){ 
    const { language } = this.props.location.state
    if(language==='pt'){
      return(
        <BreedSelect
          container='breeds--container breeds--pt'
          btnHome='https://www.zeedog.com.br/arquivos/return-btn.png?v=636032284184500000'
          title='Descubra o tamanho ideal'
          subtitle='Veja o que cachorros da mesma raça usam'
          showBreeds={this.showBreeds}
          btnSelect='https://www.zeedog.com.br/arquivos/dropdown-balloon-pressed.png?v=636029917058570000'
          list={
            (this.state.list).map((item)=>{
              return( <Link to={{ pathname:'/sizes', state: { language:'pt', breed:item[1].pt_name } }}><li>{item[1].pt_name}</li></Link> )
            })
          }
          filterBreeds={()=>{this.filterBreeds()}}
          disclaimer='https://www.zeedog.com.br/arquivos/disclaimer-br.png?v=636039278972230000'
        />
      )
    }

    else{
      return(
        <BreedSelect
          container='breeds--container breeds--en'
          btnHome='https://www.zeedog.com.br/arquivos/return-btn-en.png?v=636029923748900000'
          title='Find out what sizes fit your dog best'
          subtitle=''
          showBreeds={this.showBreeds}
          btnSelect='https://www.zeedog.com.br/arquivos/dropdown-balloon-en.png?v=636029917040670000'
          list={
            (this.state.list).map((item)=>{
              return( <Link to={{ pathname:'/sizes', state: { language:'en', breed:item[1].en_name } }}><li>{item[1].en_name}</li></Link> )
            })
          }
          filterBreeds={()=>{this.filterBreeds()}}
          disclaimer='https://www.zeedog.com.br/arquivos/disclaimer-en.png?v=636028946623970000'
        />
      )
    }
  }
}