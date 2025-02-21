import React from "react";
import {
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
  aboutUsPageImg,
  whyChooseUsContent,
} from "../../constant";
import UnlockEfficiency from "../../componets/common/UnlockEfficiency";
import OurServices from "../../componets/website/OurServices";
import Testimonials from "../../componets/common/Testimonials";

const AboutUs = () => {
  return (
    <>
      <div
        data-aos="fade-down"
        className="h-[40vh] sm:h-[55vh] md:h-[70vh] relative"
      >
        <img
          src={aboutUsBanner}
          className="object-cover object-[100%_0%] h-full w-full"
          alt=""
        />
      </div>
      <div className="pt-[5rem] text-white text-center">
        <div className="wrapper flex flex-col items-center gap-5 mb-[5rem]">
          <div data-aos="fade-up" className="gradient-rounded-text-box">
            About Us
          </div>
          <div className="mt-[3rem] grid md:grid-cols-2 gap-5">
            <div
              data-aos="fade-right"
              className="h-full flex items-center overflow-hidden rounded-lg"
            >
              <img
                src={aboutUsPageImg}
                className="scale-125 max-h-[26rem] w-full object-cover"
                alt="about us"
              />
            </div>
            <div data-aos="fade-left" className="h-full">
              <h2 className="heading-2 text-start mb-3">About Us</h2>
              <p className="desc text-start">
                About Us At Code Bright, we are passionate about delivering
                innovative technology solutions that help businesses thrive in
                today’s fast-paced digital world. Our goal is to empower
                organizations by creating customized solutions that address
                unique challenges, enhance customer experiences, and open new
                avenues for growth. We take pride in being a reliable partner
                that brings ideas to life through expertise, creativity, and a
                commitment to excellence.
                <br />
                <br />
                We’re not just a technology provider—we’re a team of skilled
                professionals who collaborate closely with clients to solve
                complex problems and drive meaningful change. Whether we’re
                crafting a custom website or developing immersive mobile apps,
                our focus is always on delivering results that matter.
                <br />
              </p>
            </div>
          </div>
          <div className="mt-[3rem] flex flex-col gap-8">
            <div>
              <h1 className="heading-2 text-center mb-3">Our Vision</h1>
              <p className="mt-5">
                Our vision is clear: to lead the way in shaping the future of
                technology and its impact on businesses globally. We strive to
                be a driving force for digital transformation, helping companies
                unlock their full potential through innovation. We believe in
                the power of technology to create lasting value for businesses,
                no matter their size or industry. <br />
                <br />
                At the core of our vision is a belief in collaboration,
                integrity, and progress—values that guide us as we develop
                transformative solutions for our clients and help them stay
                ahead of the curve in an ever-changing digital landscape.
              </p>
            </div>
            <div>
              <h1 className="heading-2 text-center mb-3"> Our Mission</h1>
              <p className="mt-5">
                The mission of Code Bright is simple: to provide businesses with
                the digital tools and solutions they need to succeed. We are
                committed to offering top-tier technology services that not only
                address the challenges of today but also pave the way for a
                prosperous future. Our focus is on delivering high-quality,
                customized solutions that drive efficiency, improve performance,
                and help businesses stay competitive in an increasingly digital
                world.
                <br />
                <br />
                We view technology as a strategic asset, and our goal is to
                ensure that every solution we provide is perfectly aligned with
                the objectives of our clients, making their digital journey
                smoother, smarter, and more impactful.
              </p>
            </div>
          </div>
          <h2 data-aos="fade-up" className="heading-2 mt-[4rem]">
            Magic Behind Our IT Solutions
          </h2>
          <p data-aos="fade-up" className="desc max-w-[50rem]">
            We begin by conducting a comprehensive needs assessment to
            understand your specific requirements, challenges, and goals.
          </p>
          <div className="pt-[3rem]">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col-reverse sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div
                  data-aos="fade-right"
                  className="rounded-xl p-5 bg-gradient-to-r from-primary/60 to-primary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Innovation at Heart
                  </h6>
                  <p className="desc mt-2">
                    At Code Bright, innovation is our driving force. We
                    constantly explore emerging technologies and trends to
                    create future-ready solutions that push the boundaries of
                    what’s possible. We aim to deliver solutions that not only
                    solve today’s challenges but anticipate the needs of
                    tomorrow.
                  </p>
                </div>
                <div data-aos="fade-left" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg1}
                    alt="Innovation at Heart"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div data-aos="fade-right" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg2}
                    alt="Client-Centric Approach"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
                <div
                  data-aos="fade-left"
                  className="rounded-xl p-5 bg-gradient-to-r from-secondary/60 to-secondary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Client-Centric Approach
                  </h6>
                  <p className="desc mt-2">
                    We understand that every business is unique, and so are its
                    challenges and goals. We take a highly personalized
                    approach, tailoring each project to align perfectly with
                    your specific needs. From startups to enterprises, we work
                    closely with our clients, building long-term partnerships
                    grounded in trust, transparency, and mutual success.
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse sm:grid text-start grid-cols-2 gap-10 sm:gap-5 max-w-5xl mx-auto">
                <div
                  data-aos="fade-right"
                  className="rounded-xl p-5 bg-gradient-to-r from-primary/60 to-primary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Commitment to Excellence
                  </h6>
                  <p className="desc mt-2">
                    Quality and reliability are at the core of everything we do.
                    We pride ourselves on delivering world-class digital
                    products that are robust, scalable, and secure. Every
                    project undergoes rigorous quality assurance, ensuring that
                    we exceed expectations and industry standards at every turn.
                  </p>
                </div>
                <div data-aos="fade-left" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg3}
                    alt="Commitment to Excellence"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div data-aos="fade-right" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg4}
                    alt="Innovation with Purpose"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
                <div
                  data-aos="fade-left"
                  className="rounded-xl p-5 bg-gradient-to-r from-secondary/60 to-secondary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Innovation with Purpose
                  </h6>
                  <p className="desc mt-2">
                    Technology without purpose is meaningless. At VKM Techno
                    Solutions, we believe in leveraging technology to create
                    meaningful impact—whether it’s streamlining processes,
                    enhancing customer experiences, or driving growth. Our
                    solutions are designed to transform businesses, help them
                    scale, and lead in their industries.
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div
                  data-aos="fade-right"
                  className="rounded-xl p-5 bg-gradient-to-r from-primary/60 to-primary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    End to End Solutions
                  </h6>
                  <p className="desc mt-2">
                    We offer a complete suite of services, providing holistic
                    support from concept to deployment and beyond. Our goal is
                    to be your trusted partner throughout your entire digital
                    journey—whether it’s building your online presence,
                    automating your operations, or creating immersive
                    experiences for your customers.
                  </p>
                </div>
                <div data-aos="fade-left" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg5}
                    alt="End to End Solutions"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="wrapper mt-[5rem]">
          <h2 data-aos='fade-up' className="heading-2">Why Choose Code Bright?</h2>
          <ul className="mt-[2rem] flex flex-col gap-3 list-disc list-outside text-start">
          {whyChooseUsContent.map((item) => (
            <li data-aos='fade-up' key={item.id} className="text-primary">
            <span className="font-raleway font-bold">{item.title}:</span>{" "}
            <span className="desc text-white ml-1">{item.desc}</span>
            </li>
            ))}
            </ul>
        </div> */}
      </div>
      <UnlockEfficiency />
      {/* <OurServices length={3} /> */}
      <Testimonials />
    </>
  );
};

export default AboutUs;
