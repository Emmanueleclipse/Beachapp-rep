import React from 'react'

export default function Home() {
    return (
        <section className="py-24 md:py-32">
        <img src={require('../static/logo.png')} className="w-20"/>
            <h1 className="text-gray-900 text-4xl font-bold pt-12 pb-8">Covid 19 Health Check</h1>
            <p className="text-gray-900 text-base">Please Answer the following questions related to your health and covid 19.</p>
        </section> 
    )
}
