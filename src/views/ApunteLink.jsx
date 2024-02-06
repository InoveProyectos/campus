import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { recursoAPI } from "../api/recursoAPI"


function ApunteLink() {
  const { courseCode, uidx, type } = useParams();
  const [status, setStatus] = useState("")


  useEffect( () =>{
    if(courseCode && uidx && type) {
      setStatus("ABRIENDO ENLACE...")
      recursoAPI.getByType(courseCode, uidx, type).then((data) => {
        if(data['is_dasabled'] == true) {
          setStatus("Este enlace no se encuentra disponible aún")
          return  
        }
        if(data['url']) {
          window.location.replace(data['url'])
          setStatus("Aguarde mientras es redireccionado al enlace")
        } else {
          setStatus(`No se ha podido encontrar el enlace "${type}" para la unidad "${uidx}" del curso "${courseCode}"`)
        }
        
      }).catch( error => {
        setStatus("Falló la redirección, vuelva a intentar o contacte con los profes")

      });
    }
    else {
      setStatus("ERROR....ENLACE INVÁLIDO")
    }

  }, [])

  return (
      <div style=
        {{width:"100%", display:"flex", flexDirection:"column", gap:"20px"}}
      >
        <p>{status}</p>
      </div>
  )
}

export default ApunteLink