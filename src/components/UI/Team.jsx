import React from 'react'
import '../../styles/team.css'
import team01 from '../../images/team-01.png'
import team02 from '../../images/team-02.png'
import team03 from '../../images/team-03.png'
import team04 from '../../images/team-04.png'
const Team = () => {

  const teamMembers = [
    {
      imgUrl : team01,
      name: 'Courtny Hurry',
      position : 'Product Developer'
    },
    {
      imgUrl : team02,
      name: 'Imrul',
      position : 'Front-end Developer'
    },
    {
      imgUrl : team03,
      name: 'Kayes',
      position : 'Back-end Developer'
    },
    {
      imgUrl : team04,
      name: 'Sifat',
      position : 'Devops Developer'
    }
  ]
  return (
    <section id="our_team">
      <div className="container">
        <div className="team_content">
          <h6 className="subtitle">Our Team</h6>
          <h2>Meet with <span className="highlight">our team</span></h2>
        </div>

        <div className="team_wrapper">
          {teamMembers.map((item,index)=>(
            <div key={index} className="team_item">
              <div className="team_img">
                <img src={item.imgUrl} alt=''/>
              </div>
              <div className="team_details">
                <h4>{item.name}</h4>
                <p className="description">{item.position}</p>
                <div className="team_member-social">
                  <span><i className='ri-linkedin-line'></i></span>
                  <span><i className='ri-twitter-line'></i></span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Team