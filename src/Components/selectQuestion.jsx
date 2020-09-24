import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFrown, faGrin } from "@fortawesome/free-regular-svg-icons";
export default function selectQuestion({name, radio, id}) {


  const  handleRadio = (e) => {
      radio(e.target.value, id)
  }

    return (
        <section className="py-24 md:py-32 flex flex-col justify-center items-center"> 
        <h1 className="text-gray-900 text-2xl font-bold pt-12 pb-8">{name}</h1>
        <div className="flex">
          <div className="relative  px-1">
            <input type="radio" name="optionsRadios" id="no" value="no" onClick={handleRadio}/>
              <label className="flex flex-col justify-center items-center border p-5 rounded-lg w-32 h-32" htmlFor="no">
                <FontAwesomeIcon className="text-6xl text-green-500" icon={faFrown} />
                <span className="font-semibold text-2xl text-green-500">NO</span>
              </label>
          </div>
          <div className="relative px-1">
            <input type="radio" name="optionsRadios" id="yes" value="yes" onClick={handleRadio} />
              <label className="flex flex-col justify-center items-center border p-5 rounded-lg w-32 h-32" htmlFor="yes">
                <FontAwesomeIcon className="text-6xl text-red-500" icon={faGrin} />
                <span className="font-semibold text-2xl text-red-500">YES</span>
              </label>
          </div> 
        </div>
    </section>
    )
}
