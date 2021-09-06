import React from 'react'
import Intro from './Intro'
import Chart from './Chart'
import Invest from './Invest'
import FAQs from './FAQs'
import Team from './Team'
import Contact from './Contact'
import Reviews from './Reviews'

const Main = () => {
    return (
        <div>
            <Intro />
            <Chart />
            <Invest />
            <Reviews />
            <FAQs />
            <Team />
            <Contact />
        </div>
    )
}

export default Main
