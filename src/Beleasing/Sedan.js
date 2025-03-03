import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
//icon
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom/cjs/react-router-dom';

import { motion } from "framer-motion";
import audimiddel from '../Beleasing Img/audipng-removebg-preview.png'
import { FaLink } from "react-icons/fa";



import bmwcommodoipsum from '../Beleasing Img/BMW_COMMODO_IPSUM.jpeg'
import fordenimnibhlitora from '../Beleasing Img/fordenimnibhlitora.jpeg'
import lamborghinirutrumlibero from '../Beleasing Img/LAMBORGHINI RUTRUM LIBERO.jpeg'
import MercedesMATTIS from '../Beleasing Img/MERCEDES MATTIS ARCU MAXIMUS.jpeg'
import BMWM4 from '../Beleasing Img/BMW 543HP 2025 M4 .jpeg'

const cars = [
  {
    name: "FORD ENIM NIBH LITORA",
    price: "$3,500.00",
    link: "/ford-enim-nibh-litora",
    img: fordenimnibhlitora,
  },
  {
    name: "LAMBORGHINI RUTRUM LIBERO",
    price: "$13,200.00",
    link: "/lamborghini-rutrum-libero",
    img: lamborghinirutrumlibero,
  },
  {
    name: "BMW COMMODO IPSUM",
    price: "$1,990.00",
    link: "/bmw-commodo-ipsum",
    img: bmwcommodoipsum,
  },
  {
    name: "MERCEDES MATTIS ARCU MAXIMUS",
    price: "$3,800.00",
    link: "/mercedes-mattis-arcu-maximus",
    img: MercedesMATTIS,
  },
  {
    name: "BMW CUBILIA CLASS",
    price: "$2,115.00",
    link: "/bmw-cubilia",
    img: BMWM4,
  },
];





const Sedan = () => {
  return (
    <div>


      <Container fluid className="overflow-hidden">
        <Row className="align-items-center">

          {/* Text Section */}
          <motion.div
            className="col-md-7 col-12 order-md-1 order-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="fs-1">SEDAN</h2>
            <p className="c-g">
              Ipsum lacus quis risus nisl enim. Dignissim non gravida vitae maecenas auctor mus volutpat <br />
              vitae.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="col-md-5 col-12 order-md-2 order-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              className="mt-4"
              src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-category3.webp"
              width="100%"
              alt="Sedan"
            />
          </motion.div>

        </Row>
      </Container>


      {/* CHOOSE FROM 1,200 NEW CARS */}
      <Container fluid className="pt-md-3 pt-3 mt-md-5 mt-3 bg-light pb-5 overflow-hidden">
        <Row className="mt-5 g-lg-4 g-2">
          {cars.map((car, index) => (
            <motion.div
              key={index}
              className="col-lg-4 col-md-6 col-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white pb-4 position-relative hov-link">
                <Link to={car.link}>
                  <img src={car.img} width="100%" alt={car.name} />
                </Link>
                <Link to={car.link} className="link-pos bg-white p-2 rounded-circle">
                  <FaLink className="text-dark" />
                </Link>
                <div className="pt-4 ms-4 me-4">
                  <h5>{car.name}</h5>
                  <p className="c-g">{car.price}</p>
                  <div className="d-flex border-top pt-3 align-items-center justify-content-between">
                    <p className="mb-0">Check details</p>
                    <Link to={car.link}>
                      <FaArrowRight className="text-dark" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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

export default Sedan;
