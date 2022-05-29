import React,{useState} from 'react'
const Home = (props) => {
    const [list1, setList1]=useState([])
    const [input, setInput]=useState("")

const handleChangeur=(e)=>{
    setInput(e.target.value)
    console.log(input)
    
    if (props.list.find(element => element.titre ==input))
 {
         alert(" This Film "+input+" Does exist") }




}
    return (
        <div className='addfilm'>
Research  <input  placeholder=" Research a film" name="t1" type="text" onChange={handleChangeur}/>
            <ul className='ulx'>
        {props.list.map(el=><div>
           <li> <h2 className='h'>Titre: <i>{el.titre}</i>  </h2>
           <h4>date de sortie: {el.date}</h4>
           <img className="card-img-top" src={el.url} alt={el.title} />
        
           <button onClick={(e)=>{el.checked=true 
            
            if(el.checked==true) 
            { 
                setList1([...list1, {titre:el.titre}] ) 
           
            props.add(el.titre,el.date);
            }
            console.log(el.checked)  }}>ADD To Favorites List</button></li></div>)}

</ul></div>)
}
export default Home