import React from 'react';
import{ Link } from 'react-router-dom';
export function MenuBtn(){
    return(
        <div>
            <Link to="/menu">
                <button type="button" className='btn btn-danger btn-lg'>Notre menu complet</button>           
            </Link>
        </div>
        
    )

}