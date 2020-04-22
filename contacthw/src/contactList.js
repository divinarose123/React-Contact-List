import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Directory from './directory.json'
import './contactList.css'




 function ContactList()  {
    const [list] = useState(Directory)
    return (
      <div className="yellowbook">
          
          <h3 className="listview">List View</h3>
          <h2 className="mypeeps">My Peeps</h2>
        {list.map(item =>  {
          return <ul className="listOfContacts"><li><img className="picture" src={item.picture.thumbnail}/><Link to={`/contacts/${item.id}`}>{item.name.first} {item.name.last}</Link></li></ul>
        })}
    
   </div>  
    )   
}



export default ContactList;