import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <ul className='ulx'>
        <Link to='/Home'><li>Home</li></Link>
        
        <Link to='/addfilm'><li>ADD A Film</li></Link>
        
        <Link to='/acc'><li>Favories Films</li></Link>

    </ul>
  )
}

export default Header