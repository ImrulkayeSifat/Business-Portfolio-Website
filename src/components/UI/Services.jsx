import React from 'react'
import '../../styles/services.css'

const serviceData = [
  {
    icon:'ri-apps-line',
    title: 'App Development',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    icon:'ri-code-s-slash-line',
    title: 'Web Designer',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    icon:'ri-landscape-line',
    title: 'DevOps',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    icon:'ri-landscape-line',
    title: 'Digital Marketing',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  }
]

const Services = () => {
  return (
    <section id="service">
      <div className="container">
        <div className="services_top-content">
          <h6 className='subtitle'> Our Services</h6>
          <h2>Save time managing our business with</h2>
          <h2 className='highlight'>our best services</h2>
        </div>

        <div className="service_item-wrapper">
          {serviceData.map((item,index)=>(
            <div key={index} className="services_item">
              <span className="service_icon"><i class={item.icon}></i></span>
              <h3 className="service_title">{item.title}</h3>
              <p className="description">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services