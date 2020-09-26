import React from 'react'

export default function Home() {
    return (
        <section className="py-16 md:flex items-start">
            <div className="-ml-3">
                <img src={require('../static/logo.png')} className="w-32" alt="img"/>
            </div>
            <div>
            <h1 className="text-gray-900 text-4xl font-bold pt-12 pb-8 md:pt-0 md:pl-5 md:pr-5 ">Covid 19 Health Check</h1>
            <p className="text-gray-900 text-base md:pl-5 md:pr-12"> Please answer the following questions related to your health and Covid 19.</p>
            </div>
        </section> 
    )
}
