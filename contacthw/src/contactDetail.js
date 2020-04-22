import React, { useState, useEffect } from 'react'
import Directory from './directory.json'
import { Link } from 'react-router-dom'
import './contactDetail.css'



export default function ContactDetail(props) {
    const [contact, setContact] = useState({ name: {} })
    const [place, setPlace] = useState({ location: {} })
    const [item, setPhoto] = useState({ picture: {} })

    useEffect(() => {
        const id = props.match.params.id
        const user = Directory.find(item => id == item.id)
        setContact(user)
        setPlace(user)
        setPhoto(user)


    }, [props.match.params.id])
    return (
        <div className="detailscontact">
            <h3>Single View</h3>
    
                <img className="photo" src={item.picture.thumbnail} />


                <div className="contactdetails">
                    <ul>

                        <li>{contact.name.first} {contact.name.last}</li>
                        <li>{contact.email}</li>
                        <li>{contact.phone}</li>
                        <li>{place.location.city} {place.location.state}</li>
                        <Link to="/contacts/:id"></Link>
                    </ul>

                </div>
            </div>
        
    )
}



