/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../../styles/blog.css'
import videoImg from '../../images/video.png'
import articeImg from '../../images/article.png'
import caseStudy from '../../images/case-study.png'
const Blog = () => {
  const blogData =[
    {
      imgUrl:videoImg,
      title:'Video',
      desc:'To know about work.Watch some video f....',
    },
    {
      imgUrl:articeImg,
      title:'Article',
      desc:'To know about work.Watch some video f....',
    },
    {
      imgUrl:caseStudy,
      title:'Case study',
      desc:'To know about work.Watch some video f....',
    }
  ]

  return (
    <section id="blog" className='blog'>
      <div className="container">
        <div className="blog_top-content">
          <h6 className="subtitle">Our blog</h6>
          <h2>
            Let's have a look from our
            <span className="highlight"> recent blog</span>
          </h2>
        </div>

        <div className="blog_wrapper">
          {
            blogData.map((item,index)=>(
              <div key={index} className="blog_item">
                <h3>{item.title}</h3>
                <div className="blog_img">
                  <img src={item.imgUrl} alt="" />
                </div>
                <p className="description blog_desc">{item.desc}</p>
                <a href="#" className="learn_more"><i class="ri-arrow-right-line"></i></a>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Blog