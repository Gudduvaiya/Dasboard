import React from 'react'
import Firstsection from './Home/firstsection'
import Secondsection from './Home/secondsection'
import Thirdsection from './Home/thirdsection'
import "./Home/Home.css"

function Home() {
    return (
        <div>
            <>
            <div className='maindiv' style={{display:"flex", flexDirection:"column"}}>
                <Firstsection />
                <Secondsection />
                <Thirdsection/>
            </div>
            </>
        </div>
    )
}

export default Home
