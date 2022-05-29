import React,{useState} from 'react'

const Addfilm = (props) => {
const [input, setInput]=useState("")
const [input1, setInput1]=useState("")
const [input2, setInput2]=useState("")
const [list, setList]=useState([])

const [checked, setChecked]=useState(false)

const handleChange=(e)=>{
    setInput(e.target.value)
    console.log(input)
}
const handleChange1=(e)=>{
    setInput1(e.target.value)
    console.log(input1)
}
const handleChange2=(e)=>{
    setInput2(e.target.value)
    console.log(input1)
}
const handleAdd=(e)=>{
    e.preventDefault()
    if(input=="")
   {alert("Check your titre")
   return;}
   if(input1=="")
   {alert("Check your date")
   return;}
   if(input2=="")
   {alert("Check your URL")
   return;}
 setList([...list, {text:input, checked:checked,date:input1,url:input2}])
    console.log(list)
    props.add(input,checked,input1,input2);
    
    
}
  return (
    <div className="addfilm">
        <h1 >Add a Film Please</h1>
        <form>
           Titre <input  placeholder="Insert name of a movie" type="text" onChange={handleChange}/>
           date <input  placeholder="release date" type="text" onChange={handleChange1}/>
            URL<input placeholder="Insert URL"type="text" onChange={handleChange2}/>
            <button onClick={handleAdd}>ADD</button>
        </form>
       
    </div>
  )
}

export default Addfilm