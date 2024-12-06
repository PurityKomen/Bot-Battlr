import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeartPulse, faBolt, faShieldHalved} from '@fortawesome/free-solid-svg-icons'

export default function BotArmy({id,name,url,catchphrase,bclass,damage,health,armor,handleDelete}) { 

  return (
    <div key={id} className="card col-2" >    
        <img src={url}  className="card-img-top"alt='im'/> 
        <div className="card-body" >
            <h5 className="card-title">{name}
               <small>{bclass} </small>  
            </h5>
            <p>
              <small>{catchphrase}</small>
            </p> 
          <div>
            <span><FontAwesomeIcon icon={faHeartPulse} beat></FontAwesomeIcon>
                {health}
            </span>

            <span><FontAwesomeIcon icon={faBolt} shake ></FontAwesomeIcon>
                {damage}
            </span>

            <span><FontAwesomeIcon icon={faShieldHalved} shake ></FontAwesomeIcon>
                {armor} 
            </span>
          </div>
        </div>
        <button onClick={() => handleDelete(id)} className="btn btn-danger">Remove</button>
    </div>
  )
}