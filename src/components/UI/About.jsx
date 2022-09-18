import React from 'react'
import '../../styles/about.css'
import aboutImg from '../../images/about-us.jpg'
const About = () => {

  const chooseData = [
    {
      icon:'ri-wifi-line',
      title:'First working process',
      desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim ipsam aliquid consectetur. Vero eaque dolorem ratione tenetur facere alias labore?'
    },
    {
      icon:'ri-team-line',
      title:'Dedicated Team',
      desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim ipsam aliquid consectetur. Vero eaque dolorem ratione tenetur facere alias labore?'
    },
    {
      icon:'ri-wifi-line',
      title:'24/7 Hours support',
      desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim ipsam aliquid consectetur. Vero eaque dolorem ratione tenetur facere alias labore?'
    }
  ]

  return (
    <section id="about">
      <div className="container">
        <div className="about_wrapper">
          <div className="about_content">
            <h6 className='subtitle'>Why choose us</h6>
            <h2>Specialist in aviding clients on</h2>
            <h2 className='highlight'>financial challenges</h2>
            <p className="description about_content-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, obcaecati quo commodi consectetur praesentium quod consequatur ad nostrum ea. Qui, placeat totam? Nostrum, fugit atque sed quidem ipsa sapiente accusantium!</p>
            <div className="choose_item-wrapper">
            {
              chooseData.map((item,index)=>(
                <div key={index} className="choose_us-item">
                  <span className="choose_us-icon">
                  <i class={item.icon}></i>
                  </span>
                  <div>
                    <h4 className="choose_us-title">{item.title}</h4>
                    <p className="description">{item.desc}</p>
                  </div>
                </div>
              ))
            }
            </div>
          </div>
          <div className="about_img">
            <img src={aboutImg} alt="about img"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About