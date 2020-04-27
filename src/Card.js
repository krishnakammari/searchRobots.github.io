import React from 'react';

const Card=(props)=>{
    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-3'>
            <img alt='robo' src='https://robohash.org/test'/>
            <div>
            
            
            <h1>{props.name}</h1>
            </div>

        </div>
    );
}
export default Card;