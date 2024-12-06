import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeartPulse, faBolt, faShieldHalved} from '@fortawesome/free-solid-svg-icons'

function BotDetail({id,name,url,catchphrase,bclass,damage,health,armor,addBotArmy}) {
  return (
    <>
    <div key={id} className="card col-2" > 
        <img src={url}  className="card-img-top"alt='bot'/> 
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
        <button onClick={() => addBotArmy(id)} className="btn btn-success m-3">Enlist to BotArmy</button>
    </div>
    </>
  )
}

export default BotDetail