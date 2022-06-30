import { useState } from 'react'
import './mainBlock.css'

const MainBlock = ({ clickButtonFunc, content, display, color }) => {


    const [ number, setNumber ] = useState(469)
    if (!display) {
        return ''
    }
    const plusNumber = () => {
        setNumber(number + 1)
    }
    const minusNumber = () => {
        setNumber(Math.max(number - 1 , 0))
        // setNumber(Math.round(Math.max(number - 1 , 0) / 100) * 100)

    }
    return (
        <div className={`main-block ${color = 'red' ? 'red' : ''}`}>
                <div className='container' style={{ borderBottom: '5px solid blue', borderTop: '2px dashed yellow'}}>
                    Main block {content} {number}
                    <div onClick={plusNumber}>+</div>
                    <div>{number}</div>
                    <div onClick={minusNumber}>-</div>
                    <button onClick={clickButtonFunc}>aaaaaa</button>
                </div>
            </div>
    )
}

export default MainBlock