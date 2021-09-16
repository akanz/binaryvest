import React, { Suspense, lazy } from 'react'
// import Contact from '../home/Contact'
// import Learn from './Learn'
import Package from './Package'

const Contact = lazy(()=> import('./Learn')),
      Learn = lazy(()=> import('./Learn'));

const Education = () => {
    return (
        <div>
            <Package />
            <Suspense fallback={<div/>}>
            <Learn />
            <Contact />
            </Suspense>
        </div>
    )
}

export default Education
