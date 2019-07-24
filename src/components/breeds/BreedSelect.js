import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class BreedSelect extends Component{
  render(){
    return(
      <div className={this.props.container}>
      <div className='breeds--small-container'>
        <Link to='/'><img className='btn--home' src={this.props.btnHome}/></Link>
        <div>
          <h2>{this.props.title}</h2>
          <p>{this.props.subtitle}</p>
          <img onClick={this.props.showBreeds} className='btn--select' src={this.props.btnSelect}/>
          <div id='breeds' className='hide'>
            <div className='breeds--dropdown'>
              <input id='input' className='breeds--search' type='text' onKeyUp={this.props.filterBreeds}></input>
              <ul>{this.props.list}</ul>
            </div>
          </div>
        </div>
        <img className='breeds--disclaimer' src={this.props.disclaimer}/>
      </div>
    </div>
    )
  }
}