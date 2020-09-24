import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCheck } from "@fortawesome/free-solid-svg-icons";



export default function checkCompleted({complete}) {
 
    return ( 
            <section className="py-24  md:py-32"> 
              <div className="flex justify-center">
              <div className="flex justify-center w-32 h-32 items-center bg-green-200 rounded-full">
                <FontAwesomeIcon className="text-6xl text-green-400" icon={faCheck} />
              </div>
              </div>
              <h1 className="text-gray-900 text-4xl text-center font-bold pt-12 pb-8" >Health Check Complete</h1>
          </section> 
    )
}
