/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
const Footer = () => {
  const date = new Date().getFullYear();
  const quickLinks01 = [
    {
      path:'#',
      display:'Marketing'
    },
    {
      path:'#',
      display:'Analylics'
    },
    {
      path:'#',
      display:'Commerce'
    },
  ]

  const quickLinks02 = [
    {
      path:'#',
      display:'Pricing'
    },
    {
      path:'#',
      display:'Documentation'
    },
    {
      path:'#',
      display:'Guides'
    },
  ]

  const quickLinks03 = [
    {
      path:'#about',
      display:'About'
    },
    {
      path:'#',
      display:'Job'
    },
    {
      path:'#blog',
      display:'Blog'
    },
  ]
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer_logo">
            <h2>Digency</h2>
            <p className="description">Grow with us</p>
            <p className="small_text description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non cumque similique, quibusdam accusantium voluptates voluptatem.</p>
          </div>

          <div className="footer_quick-links">
            <h3 className="quick_links-title">Solutions</h3>
            <ul className="quick_links">
              {
                quickLinks01.map((item,index)=>(
                  <li key={index} className="quick_link-item"><a href="#">{item.display}</a></li>
                ))
              }
            </ul>
          </div>

          <div className="footer_quick-links">
            <h3 className="quick_links-title">Support</h3>
            <ul className="quick_links">
              {
                quickLinks02.map((item,index)=>(
                  <li key={index} className="quick_link-item"><a href="#">{item.display}</a></li>
                ))
              }
            </ul>
          </div>

          <div className="footer_quick-links">
            <h3 className="quick_links-title">Company</h3>
            <ul className="quick_links">
              {
                quickLinks03.map((item,index)=>(
                  <li key={index} className="quick_link-item"><a href="#">{item.display}</a></li>
                ))
              }
            </ul>
          </div>
        </div>
        <p className="copyright">Copyright {date},developed by IMK.All rights reserved.{" "}</p>
      </div>
    </footer>
  )
}

export default Footer