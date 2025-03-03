import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom/cjs/react-router-dom'
//icon
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";


const Footer = () => {
  return (
    <div>
      <Container fluid className="bg-dark-blue pt-5 pb-4 overflow-hidden">
        {/* Top Section (Logo & Social Icons) */}
        <Row className="align-items-center pb-3 mb-3">
          {/* Logo & Text - Animate from Left */}
          <motion.div
            className="col-md-6 col-12 d-flex align-items-center justify-content-center"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h1 className="fs-14 ms-3 mb-0 word text-white" style={{ fontFamily: "MyCustomFont" }}>DriveOra</h1>
          </motion.div>

          {/* Social Media Icons - Animate from Right */}
          <motion.div
            className="col-md-6 col-12 d-flex justify-content-center mt-md-0 mt-3"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <ul className="d-flex mb-0 me-3">
              <li><Link to="" className="text-white"><FaFacebookF /></Link></li>
              <li><Link to="" className="text-white ps-4"><FaTwitter /></Link></li>
              <li><Link to="" className="text-white ps-4"><FaYoutube /></Link></li>
              <li><Link to="" className="text-white ps-4"><FaLinkedinIn /></Link></li>
            </ul>
          </motion.div>
        </Row>

        {/* Footer Links - Animate from Bottom */}
        <Row className="pt-md-5 pt-3 text-center">
          {[
            {
              title: "About",
              links: ["About", "Contact us", "Accessibility", "Carreers", "Request brochure"]
            },
            {
              title: "Leasing & Finance",
              links: ["Apply for credit", "Reward & Finance programs", "End of lease options"],
              subTitle: "Help & Support",
              subLinks: ["Roadside assistance", "Navigation", "FAQ"]
            },
            {
              title: "Owners",
              links: ["Benefits", "Pay my bill", "Drivers website"],
              subTitle: "Our Brand",
              subLinks: ["Motorsports", "Safety technology", "Luxury to buy"]
            },
            {
              title: "Service & Warranty",
              links: ["Maintenance schedule", "Find a dealer", "Beleasing tire center", "Service by Beleasing", "Warranty coverage"]
            }
          ].map((section, index) => (
            <motion.div
              className="col-md-3 col-sm-6 col-12 mt-md-0 mt-4"
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="mb-2 text-white">{section.title}</p>
              <ul className="mb-0 ps-0">
                {section.links.map((link, i) => (
                  <li key={i} className="mb-2"><Link to="" className="text-white">{link}</Link></li>
                ))}
              </ul>

              {section.subTitle && (
                <>
                  <p className="mb-2 text-white">{section.subTitle}</p>
                  <ul className="ps-0 mb-0">
                    {section.subLinks.map((subLink, i) => (
                      <li key={i} className="mb-2"><Link to="" className="text-white">{subLink}</Link></li>
                    ))}
                  </ul>
                </>
              )}
            </motion.div>
          ))}
        </Row>
      </Container>

    </div>
  )
}

export default Footer;