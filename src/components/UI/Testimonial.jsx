import React from 'react'
import Slider from 'react-slick'
import '../../styles/testimonial.css'
import ava1 from '../../images/ava-1.jpg'
import ava2 from '../../images/ava-2.jpg'
import ava3 from '../../images/ava-3.jpg'
const Testimonial = () => {

  const settings={
    dots:false,
    infinite:true,
    speed:100,
    autoplay:true,
    autoplaySpeed:2000,
    slidesToShow:1,
    slidesToScroll:1,
    swipeToSlide:true
  }
  return (
    <section>
      <div className="container">
        <div className="slider_content-top">
          <h6 className="subtitle">Testimonials</h6>
          <h2>Trusted by more <than>" "</than>
          <span className="highlight">5,000 customers</span></h2>
        </div>
        <div className="slider_wrapper">
        <Slider {...settings}>
          <div className="slider_item">
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, minima cum hic asperiores nisi ad eveniet sit! Maiores, porro ipsa?</p>
            <div className="customer_details">
              <div className="customer_img">
                <img src={ava1} alt="" />
              </div>
              <div>
                <h5 className="customer_name">john</h5>
                <p className="description">CEO, Workstation</p>
              </div>
            </div>
          </div>

          <div className="slider_item">
            <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde consectetur quam veritatis voluptatem asperiores aliquam inventore quaerat accusantium veniam error?</p>
            <div className="customer_details">
              <div className="customer_img">
                <img src={ava2} alt="" />
              </div>
              <div>
                <h5 className="customer_name">Mohammed</h5>
                <p className="description">CEO, WorkFlow</p>
              </div>
            </div>
          </div>

          <div className="slider_item">
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eius ex ipsum totam sunt suscipit dolorem minima perspiciatis quae ullam..</p>
            <div className="customer_details">
              <div className="customer_img">
                <img src={ava3} alt="" />
              </div>
              <div>
                <h5 className="customer_name">Reflica</h5>
                <p className="description">CEO, Citizen</p>
              </div>
            </div>
          </div>
        </Slider>
        </div>
      </div>
    </section>
  )
}

export default Testimonial