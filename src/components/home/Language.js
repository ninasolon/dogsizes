import React from 'react'
import { Link } from 'react-router-dom'

export default function Language(props){
  return(
    <div className={props.class}>
      <div className='lang--container'>
        <p>{props.lang}</p>
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>
        <Link to={{ pathname:'/breeds', state: { language:props.lang } }}><img src={props.btn}/></Link>
      </div>
    </div>
  )
}