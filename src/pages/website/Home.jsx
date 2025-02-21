import React from "react";
import { Link } from "react-router-dom";
import Contact from "../../componets/landingPages/Contact";
import aboutUsImg from "../../assets/images/landing-aboutus.png";
import WhyChooseUs from "../../componets/common/WhyChooseUs";
import ReactPlayer from "react-player";
import { homeBannerVideo } from "../../constant";
import OurServices from "../../componets/website/OurServices";
import EndlessOpportunitiesSection from "../../componets/common/EndlessOpportunitiesSection";
import UnlockEfficiency from "../../componets/common/UnlockEfficiency";

const Home = () => {
  return (
    <>
      <div id="banner" className="h-screen relative">
        <ReactPlayer
          url={homeBannerVideo}
          loop
          muted
          width="100%"
          height="100%"
          playsinline
          playing
          className="absolute"
        />
        <div className="bg-gradient-to-r to-black/50 from-transparent absolute w-full h-full"></div>
        <div className="pt-[3rem] wrapper flex items-center h-full">
          <div
            data-aos="fade-up"
            className="relative z-10 px-6 justify-center h-full text-white flex flex-col items-center gap-5 text-center md:max-w-[60rem] mx-auto"
          >
            <div className="rounded-text-box border-white/70 font-medium">
              IT Services
            </div>
            <h1 className="heading-1">
              Welcome to <span className="text-secondary">Code Bright</span>
              <br /> - Shaping the Future of <br />
              Digital Innovation
            </h1>
            <p className="desc">
              Expert IT services tailored to your business needs.
            </p>
            <Link to="/contact-us" className="primary-btn mt-2">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <section className="py-[5rem] bg-black text-white wrapper">
        <div
          data-aos="fade-right"
          className="gradient-rounded-text-box mx-auto lg:mx-0"
        >
          About Us
        </div>
        <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-right" className="flex h-full flex-col gap-7">
            <div className="flex flex-col gap-7 text-center lg:text-start">
              <h2 className="heading-2">
                Transforming Ideas into Impactful Technology Solutions
              </h2>
              <p className="desc">
                At Code bright, we are at the forefront of artificial
                intelligence innovation, dedicated to making cutting-edge AI
                accessible, intuitive, and transformative. Our mission is to
                empower businesses, developers and organizations with the tools,
                knowledge, and resources to harness the power of AI in practical
                and impacts ways.
                <br />
                <br />
                We specialize in creating AI-driven solutions that streamline
                operations, optimize decision-making, and unlock new
                possibilities across industries. Code bright offers
                comprehensive services designed to integrate seamlessly into
                your existing workflow. We believe in the transformative
                potential of AI and are committed to driving the future of
                intelligent technology.
              </p>
            </div>
            <div className="flex gap-5 mt-4 justify-center lg:justify-start">
              <Link to="/contact-us" className="primary-btn">
                Contact Us
              </Link>
              <Link to="/services" className="secondary-btn">
                Our Services
              </Link>
            </div>
          </div>
          <div data-aos="fade-left" className="h-full">
            <img
              src={aboutUsImg}
              className="object-contain max-h-[30rem]"
              alt=""
            />
          </div>
        </div>
      </section>
      <OurServices length={3} />
      <section className="py-[5rem] bg-black text-white">
        <div
          data-aos="fade-up"
          className="wrapper text-center flex flex-col gap-3"
        >
          <div className="gradient-rounded-text-box mx-auto mb-4">
            Who We Are
          </div>
          <h1 className="heading-2 bg-gradient-to-r from-primary max-w-[50rem] mx-auto to-secondary bg-clip-text text-transparent">
            Your Partner in Reliable and Responsive IT Services
          </h1>
          <p className="desc max-w-[50rem] mx-auto">
            Founded with a passion for technology and creativity, Parvesha
            Innovations has grown into a trusted partner for businesses seeking
            digital transformation. Our team of experienced developers,
            designers, and strategists are dedicated to building high-quality,
            innovative IT solutions tailored to meet the unique needs of each
            client.
          </p>
        </div>
      </section>

      {/* <Faqs /> */}
      <WhyChooseUs />
      <UnlockEfficiency />
      <EndlessOpportunitiesSection />
      <Contact />
    </>
  );
};

export default Home;
