import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
//iconn
import { FaArrowRight } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom/cjs/react-router-dom'
import audimiddel from '../Beleasing Img/audipng-removebg-preview.png'
import contact from '../Beleasing Img/contact.jpeg'
//icon
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Contact = () => {
  return (
    <div>
      {/*  */}
      <Container fluid className="bele-img-2">
        <Row className="m-0 justify-content-center ">
          <div className="col-4 pd fs-1 d-md-block d-none">
            <motion.h2
              className="text-white text-center fs-md-1 fs-6 mb-5 bg-color word p-4 ms-3"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              // whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255,255,255,0.5)" }}
              viewport={{ once: true }}
            >
              Need Help? We’re Just a Click Away!
            </motion.h2>
          </div>

          <div className='pd d-md-none d-block '>
            <h3 className='bg-color text-center text-white p-3 mx-5 my-3'>
              Need Help? We’re Just a Click Away!
            </h3>
          </div>
        </Row>
      </Container>

      {/*  */}
      <Container fluid className="overflow-hidden"> {/* ✅ Prevent Horizontal Scroll */}
        <Row className="align-items-center mx-0"> {/* ✅ Remove extra margin */}

          {/* Left Box - Slide from Left */}
          <motion.div
            className="col-lg-4 col-md-6 col-12 p-lg-5 p-3 text-md-start text-center"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h6 className="text-uppercase">Find Your Perfect Ride</h6>
            <h3><a href="" className="color fs-2">+1 234 567 8900</a></h3>
          </motion.div>

          {/* Middle Box - Fade In */}
          <motion.div
            className="col-lg-4 col-md-6 col-12 p-lg-5 p-3 text-md-start text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h6 className="text-uppercase">Which Car Suits You Best?</h6>
            <h3><a href="" className="color fs-2">driveorahelp@bnsteps.com</a></h3>
          </motion.div>

          {/* Right Box - Slide from Right */}
          <motion.div
            className="col-lg-4 col-12 p-lg-5 p-3 text-md-start text-center"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <ul className="d-flex mb-0 justify-content-center ps-0 ">
              {[
                { icon: <FaFacebookF />, className: "" },
                { icon: <FaTwitter />, className: "ps-5" },
                { icon: <FaYoutube />, className: "ps-5" },
                { icon: <FaLinkedinIn />, className: "ps-5" }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className={item.className}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link to="" className="fs-4 color">{item.icon}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </Row>
      </Container>



      {/*  */}
      <Container fluid className="bg-light mt-md-5 mt-3 pt-md-5 pt-3">
        <Row>

          {/* Left Box - Slide from Left */}
          <motion.div
            className="col-lg-6 col-12 pt-5 pb-lg-5"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-5">
              <h3 className="fs-2 mb-3">Unit 0X, DriveOra, 789 Fictional Ave, Brisbane, QLD 4000, Australia</h3>
              <span className="c-g">Monday - Friday: 8am - 5pm</span>
              <img className="mt-5 text-center" src={contact} width="100%" alt="" />
            </div>
          </motion.div>

          {/* Right Box - Slide from Right */}
          <motion.div
            className="col-lg-6 col-12 pt-lg-5 pb-5"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-5">
              <h3 className="fs-2 mb-3">WE’D LOVE TO HEAR <br /> FROM YOU!</h3>
              <div className="mt-5">
                <form>

                  {/* Input Fields - Fade In Effect */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="pb-3"
                  >
                    <input type="text" className="form-control" placeholder="Full Name" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-3"
                  >
                    <input type="text" className="form-control" placeholder="Phone*" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="mb-3"
                  >
                    <input type="email" className="form-control" placeholder="E-mail" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-4"
                  >
                    <textarea className="form-control" rows="3" placeholder="Your message"></textarea>
                  </motion.div>

                  {/* Button - Scale Animation */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    viewport={{ once: true }}
                  >
                    <Button variant="" className="b-color text-white rounded-0 border-0 ps-5 pe-5 pt-3 pb-3 mb-2">
                      Let’s Connect
                    </Button>
                  </motion.div>

                </form>
              </div>
            </div>
          </motion.div>

        </Row>
      </Container>



      {/* RENTING IS PURE CONVENIENCE */}
      <Container fluid className="pb-5 bg-light" style={{ overflowX: "hidden" }}>
        <Row className="align-items-center">
          {/* Left Side Text - Animate from Left */}
          <motion.div
            className="col-lg-4 col-md-6 col-12 text-center"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="fs-1">
              SMART RENTING, <br className="d-md-block d-none" />
              SMOOTH DRIVING
            </h2>
            <p className="mt-4 c-g">
              Drive your dream car effortlessly – easy booking, great prices, and zero hassle!
            </p>
            <Button
              href="/all-cars"
              variant=""
              className="b-color text-white rounded-0 border-0 ps-5 pe-5 pt-3 pb-3"
            >
              CHECK YOUR CAR <FaArrowRight className="ms-3" />
            </Button>
          </motion.div>

          {/* Middle Car Image - Animate from Bottom */}
          <motion.div
            className="col-lg-4 col-md-6 col-12"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img src={audimiddel} width="100%" alt="Luxury Audi Car with Advanced Technology & Performance" />
          </motion.div>

          {/* Right Side List - Animate from Right */}
          <motion.div
            className="col-lg-4 col-12"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <ul className="p-0">
              {[
                "Hassle-Free Maintenance & Full Service Coverage",
                "Easily Swap Your Car for the Latest Model",
                "No Hidden Fees – Transparent & Predictable Costs",
              ].map((item, index) => (
                <div key={index} className="d-flex align-items-center fw-bold fs-5 border-bottom_text pb-2">
                  <FaArrowCircleRight className="me-3" /> {item}
                </div>
              ))}
            </ul>
          </motion.div>
        </Row>
      </Container>


    </div>
  )
}

export default Contact;