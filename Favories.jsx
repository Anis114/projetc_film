import React,{useState} from 'react'



const Favories = (props) => {
   
    

    return (
        <div className='addfilm'>

<ul className='ulx'>
            {props.list1.map((el)=><div><li ><h2>Titre: <i>{el.titre}</i></h2></li>
            <h4>date de sortie: {el.date}</h4>
            </div>
            )}
            </ul>
      
 

</div>)
}
export default Favories