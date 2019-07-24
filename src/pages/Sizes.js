import React, { Component } from 'react'
import BreedSizes from '../components/sizes/BreedSizes'
import data from '../data/breeds'

export default class Sizes extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: data.filter((item)=>{return item.includes(this.props.location.state.breed)})
    }
  }

  componentDidMount(){
    document.getElementById('footer').classList.add('footer--sizes')
  }

  render(){
    const { language, breed } = this.props.location.state
    const { data } = this.state
    const breedsizes = data["0"][1]
    const { leash, collar, leash_ruff, obedience, stepin, meshplus } = breedsizes

    if(language==='pt'){
      return(
        <BreedSizes 
          lang='pt'
          container='sizes--container sizes--pt'
          disclaimer='https://www.zeedog.com.br/arquivos/disclaimer-br-breed.png?v=636028946631600000'
          title={breed}
          subtitle='Ou porte parecido'
          image={breedsizes.imageIpad}
          btnDogBreed='https://www.zeedog.com.br/arquivos/return-btn-2.png?v=636028946079400000'
          table='sizes--table table--pt'          
          leash='Guia'
          collar='Coleira'
          leashRuff='Guia com amortecedor'
          obedience='Coleira de obediência'
          stepin='Peitoral'
          meshplus='Peitoral mesh-plus'
          sizeLeash={leash['0']}
          sizeCollar={collar['0']}
          sizeLeashRuff={leash_ruff['0']}
          sizeObedience={obedience['0']}
          sizeStepin={stepin['0']}
          sizeMeshPlus={meshplus['0']}
          sizeBg='https://www.zeedog.com.br/arquivos/td-bg-1.png?v=636028945116730000'
        />
      )
    }

    else{
      return(
        <BreedSizes 
          lang='en'
          container='sizes--container sizes--en'
          disclaimer='https://www.zeedog.com.br/arquivos/disclaimer-en-breed.png?v=636029032841300000'
          title={breed}
          subtitle='Or similar size'
          image={breedsizes.imageIpad}
          btnDogBreed='https://www.zeedog.com.br/arquivos/return-btn-2-en.png?v=636028946083630000'
          table='sizes--table table--en'
          leash='Leash'
          collar='Collar'
          leashRuff='Shock absorbent leash'
          obedience='Obedience collar'
          stepin='Harness'
          meshplus='Mesh plus harness'
          sizeLeash={leash[1]}
          sizeCollar={collar[1]}
          sizeLeashRuff={leash_ruff[1]}
          sizeObedience={obedience[1]}
          sizeStepin={stepin[1]}
          sizeMeshPlus={meshplus[1]}
          sizeBg='https://www.zeedog.com.br/arquivos/td-bg-1-en.png?v=636028945125130000'
        />
      )
    }
  }
}