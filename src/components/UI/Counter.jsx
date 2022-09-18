import React from 'react'
import '../../styles/counter.css'

const counterData = [
  {
    number:'5k+',
    text:'clients'
  },
  {
    number:'15+',
    text:'running projects'
  },
  {
    number:45,
    text:'projects completed'
  }
]
const Counter = () => {
  return (
    <section className='counter' id="projects">
      <div className="container">
        <div className="counter_wrapper">
          {
            counterData.map((item,index)=>(
              <div key={index} className="counter_item">
                <div className="counter_number">{item.number}</div>
                <div className="counter_title">{item.text}</div>
              </div>
            ))
          }

        </div>
      </div>
    </section>
  )
}

export default Counter