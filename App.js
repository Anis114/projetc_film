
import './App.css';

import Addfilm from './components/Addfilm';
import Home from './components/Home';
import React from 'react';
import {useState} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/Header';
import Favories from './components/Favories';
function App() {
  const [list, setList]=useState([]);
  setList( [...list,
    {titre: 'Bonjour, monde', checked:false ,date:'1990/20/1',url:'https://commons.wikimedia.org/wiki/File:RMS_Titanic_3.jpg?uselang=fr'},
    {titre: 'Bonjour, monde', checked:false ,date:'1990/20/1',url:'https://commons.wikimedia.org/wiki/File:RMS_Titanic_3.jpg?uselang=fr'},
    {titre: 'Bonjour, monde', checked:false ,date:'1990/20/1',url:'https://commons.wikimedia.org/wiki/File:RMS_Titanic_3.jpg?uselang=fr'}])
  const [list1, setList1]=useState([]);
  const AddAnecdote=(x,y,z,w)=>{
    setList([...list, {titre:x,checked:y,date:z,url:w}])
  } 
  const Acclist=(z,w)=>{
    setList1([...list1, {titre:z,date:w}])
  }
  return (
    <BrowserRouter>
       <div className="App">
     <Header/>
      <Switch>
      <Route path='/Home'>
      <Home list={list} add={Acclist}/>
      </Route>
      <Route   exact path='/addfilm'>
      <Addfilm   add={AddAnecdote} />
      </Route>
      <Route path='/acc'>
      <Favories list1={list1}/>
      </Route>
      
  
    </Switch>
     
     </div>
     </BrowserRouter>

   
  );
}

export default App;
