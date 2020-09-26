import React from 'react'
 

export default function checkCompleted({complete}) {
     
    const date = new Date();  
    const month = date.toLocaleString('default', { month: 'short' }); 
    const year = date.getFullYear()  
    const day = date.getDate();
    const dates = month + " " + day + ", " + year;
    return ( 
            <section className="py-24  md:py-10 my-3"> 
              <div className="flex justify-center">
              <div className="flex justify-center w-32 h-32 items-center">
                 <img src={require('../static/check.png')} alt="check"/> 
              </div>
              </div>
              <h1 className="text-gray-900 text-2xl text-center font-bold pt-12 pb-4" >Health Check Pass</h1>
              <p className="text-lg font-semibold text-center">{dates}</p>
          </section> 
    )
}
