import React from 'react' 
export default function selectQuestion({name, radio, id}) {


  const  handleRadio = (e) => {
      radio(e.target.value, id)
  }

    return (
        <section className="py-24 md:py-10 flex flex-col"> 
        <h1 className="text-gray-900 text-xl font-semibold pt-12 pb-8 md:pt-2">{name}</h1>
        <div className="flex">
          <div className="relative  px-2">
            <input type="radio" name="optionsRadios" id="no" value="no" onClick={handleRadio}/>
              <label className="flex flex-col justify-center items-center" htmlFor="no">
                <img src={require('../static/no-answer.png')} alt="no answer"/> 
                
              </label>
          </div>
          <div className="relative px-2">
            <input type="radio" name="optionsRadios" id="yes" value="yes" onClick={handleRadio} />
              <label className="flex flex-col justify-center items-center" htmlFor="yes">
              <img src={require('../static/yes_answer.png')} alt="yes answer"/> 
              </label>
          </div> 
        </div>
    </section>
    )
}
