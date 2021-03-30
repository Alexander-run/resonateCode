import React, { useEffect, useState } from 'react';
import './contact.css';
import { useHTTPContacts, useViewPort } from './hooks.js';

export default function Contact(){
    // Hook For Ajax data request
    const { contactUsers } = useHTTPContacts();
    // Hook For responsive layout   
    const { width } = useViewPort();
    const breakpoint=620;
    // Layout for desktop PC
    const deskPCLayout = <div className='body_deskPC'>
        {contactUsers.map((item,key)=>{
            return (
                <div className='deskPC_block'> 
                    <div>
                        <h3>{item.name}</h3>  
                    </div>
                    <div>
                        <ul style={{"listStyle":"none"}}>
                            <li className="item"><span>Username: </span>{item.username}</li>
                            <li className="item"><span>Email: </span>{item.email}</li>
                            <li className="item"><span>Phone: </span>{item.phone}</li>
                            <li className="item"><span>Website: </span>
                                <a title="personal web" href={"http://www."+item.website}
                                    target="blank">
                                    {item.website}</a></li>
                            <li className="item"><span>Address: </span>
                                <a title="see on google map" href={`https://www.google.com/maps/@${item.address.geo.lat},${item.address.geo.lng},16z`}
                                    target="blank">
                                    {item.address.suite+" "+item.address.street+", "+item.address.city}</a></li>
                            <li className="item"><span>Zipcode: </span>{item.address.zipcode}</li>
                            <li className="item"><span>Company: </span>{item.company.name}</li> 
                            <li className="item"><span>- catchphrase: </span>{item.company.catchPhrase}</li> 
                            <li className="item"><span>- business: </span>{item.company.bs}</li>                                
                        </ul>     
                    </div>          
                </div>
        );})}
    </div>    
    // Layout for Mobile Phone 
    const mobileLayout = <div className='body_mobile'>
    {contactUsers.map((item,key)=>{
        return (
            <div className='mobile_block'> 
                <div>
                    <h3>{item.name}</h3>  
                </div>
                <div>
                    <ul style={{"listStyle":"none"}}>
                        <li className="item"><span>Username: </span><p>{item.username}</p></li>
                        <li className="item"><span>Email: </span><p>{item.email}</p></li>
                        <li className="item"><span>Phone: </span><p>{item.phone}</p></li>
                        <li className="item"><span>Website: </span>
                            <p><a title="personal web" href={"http://www."+item.website}
                                target="blank">
                                {item.website}</a></p></li>
                        <li className="item"><span>Address: </span>
                            <p><a title="see on google map" href={`https://www.google.com/maps/@${item.address.geo.lat},${item.address.geo.lng},16z`}
                                target="blank">
                                {item.address.suite+" "+item.address.street+", "+item.address.city}</a></p></li>
                        <li className="item"><span>Zipcode: </span><p>{item.address.zipcode}</p></li>
                        <li className="item"><span>Company: </span><p>{item.company.name}</p></li> 
                        <li className="item"><span>catchphrase: </span><p>{item.company.catchPhrase}</p></li> 
                        <li className="item"><span>business: </span><p>{item.company.bs}</p></li>                                
                    </ul>     
                </div>          
            </div>
    );})}
</div>

    return(
        width < breakpoint ? 
        <div className='body'>{mobileLayout}</div>
        :
        <div className='body'>{deskPCLayout}</div>
    );
}