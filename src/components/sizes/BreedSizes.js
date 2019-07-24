import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class BreedSizes extends Component{
  render(){
    return(
      <div className={this.props.container}>
        <div className='sizes--small-container'>
          <div className='sizes--header'>
            <img className='sizes--disclaimer' src={this.props.disclaimer}/>
            <div className='sizes--text-container'>
              <div className='sizes--title'>
                <h2>{this.props.title}</h2>
                <p>{this.props.subtitle}</p>
              </div>
              <img className='sizes--img' src={'https://www.zeedog.com.br/arquivos' + this.props.image}/>
            </div>
            <Link to={{ pathname:'/breeds', state: { language:this.props.lang } }}><img className='btn--breeds' src={this.props.btnDogBreed}/></Link>
          </div>
          <table className={this.props.table}>
            <tbody>
              <tr className='table__row'>
                <td className='table__data'>
                  <span className='table__label'>{this.props.leash}</span>
                  <span className='table__size-span'>{this.props.sizeLeash}</span>
                  <img className='table__size-bg' src={this.props.sizeBg}/>
                </td>
                <td className='table__data'>
                  <span className='table__label'>{this.props.collar}</span>
                  <span className='table__size-span'>{this.props.sizeCollar}</span>
                  <img className='table__size-bg' src={this.props.sizeBg}/>
                </td>
              </tr>
              <tr className='table__row'>
                <td className='table__data'>
                  <span className='table__label'>{this.props.leashRuff}</span>
                  <span className='table__size-span'>{this.props.sizeLeashRuff}</span>
                  <img className='table__size-bg' src={this.props.sizeBg}/>
                </td>
                <td className='table__data'>
                  <span className='table__label'>{this.props.obedience}</span>
                  <span className='table__size-span'>{this.props.sizeObedience}</span>
                  <img className='table__size-bg' src={this.props.sizeBg}/>
                </td>
              </tr>
              <tr className='table__row'>
                <td className='table__data'>
                  <span className='table__label'>{this.props.stepin}</span>
                  <span className='table__size-span'>{this.props.sizeStepin}</span>
                  <img className='table__size-bg' src={this.props.sizeBg}/>
                </td>
                <td className='table__data'>
                  <span className='table__label'>{this.props.meshplus}</span>
                  <span className='table__size-span'>{this.props.sizeMeshPlus}</span>
                  <img className='table__size-bg' src={this.props.sizeBg}/>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}