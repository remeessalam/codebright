import React from "react";
import { useKeenSlider } from "keen-slider/react";
// import profileImg1 from "../../assets/images/profileimg-1.png";
// import profileImg2 from "../../assets/images/profileimg-2.png";
import { FaUserCircle } from "react-icons/fa";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";

const reviews = [
  {
    id: 1,
    icon: <FaUserCircle className="text-3xl" />,
    name: "Jessica Smith",
    role: "Marketing Director, Innovative Solutions Corp",
    desc: "Partnering with Code Bright was a turning point for our online presence. They took the time to really understand our vision and delivered a stunning, high-performing website that is not only visually appealing but also incredibly functional. Since launching the site, we’ve seen a significant increase in traffic and engagement. It’s been a key factor in helping us achieve our business goals.",
  },
  {
    id: 2,
    icon: <FaUserCircle className="text-3xl" />,
    name: "John Stevens",
    role: "CEO, TechGear",
    desc: "When we decided to revamp our e-commerce site, we knew we needed a team that could deliver a seamless shopping experience. Code Bright exceeded our expectations. Their attention to detail, design expertise, and ability to integrate advanced e-commerce tools has transformed our platform. We’ve already seen an uptick in sales and customer satisfaction.",
  },
  {
    id: 3,
    icon: <FaUserCircle className="text-3xl" />,
    name: "Mary Roberts",
    role: "Operations Manager, GlobalTech Innovations",
    desc: "The mobile app Code Bright developed for us has been a game-changer for our internal operations. The app is intuitive, easy to use, and has drastically increased efficiency among our staff. We’ve already seen improvements in workflow and productivity across the board. The development process was smooth, and their team provided excellent support every step of the way.",
  },
  {
    id: 4,
    icon: <FaUserCircle className="text-3xl" />,
    name: "David Lee",
    role: "Founder, NextGen Fitness",
    desc: "We reached out to Code Bright for a customer-facing mobile app, and they delivered beyond our expectations. The design is clean, the user experience is seamless, and the app’s performance is outstanding. Our customers love it, and we’ve seen stronger engagement with our brand. We’re looking forward to continuing to work with their team for future updates.",
  },
  {
    id: 5,
    icon: <FaUserCircle className="text-3xl" />,
    name: "Emma Phillips",
    role: "Marketing Director, HomeStyle Decor",
    desc: "The AR solution Code Bright developed for our retail business has been a huge success. It allows our customers to visualize how products will look in their homes before purchasing, which has greatly improved customer satisfaction and reduced returns. Their team’s creativity and technical expertise were crucial in bringing this idea to life.",
  },
  {
    id: 6,
    icon: <FaUserCircle className="text-3xl" />,
    name: "Mark Taylor",
    role: "HR Director, Advanced Manufacturing Ltd.",
    desc: "We worked with Code Bright to create a VR-based training program for our employees, and the results have been incredible. The virtual training environment allows our team to practice in a safe and realistic setting. It's improved training outcomes and significantly reduced on-the-job errors. Their work has taken our training programs to a whole new level.",
  },
  {
    id: 7,
    icon: <FaUserCircle className="text-3xl" />,
    name: "Samantha Harris",
    role: "Supply Chain Manager, FoodPro Distributors",
    desc: "Integrating blockchain into our supply chain with the help of Code Bright has been a game-changer. We now have greater transparency and security, which has helped build trust with our partners and customers. Their team guided us every step of the way, ensuring a smooth implementation and a highly efficient solution.",
  },
  {
    id: 8,
    icon: <FaUserCircle className="text-3xl" />,
    name: "Oliver Williams",
    role: "CTO, FinTech Solutions",
    desc: "The blockchain solution Code Bright developed for our financial platform has transformed our approach to secure transactions. Their expertise in blockchain technology allowed us to build a system that is both secure and scalable. It’s been a major asset to our business and has opened up new opportunities for us in the digital financial space.",
  },
  {
    id: 9,
    icon: <FaUserCircle className="text-3xl" />,
    name: "Lily Thompson",
    role: "Game Producer, Arcade Studio",
    desc: "The team at Code Bright exceeded our expectations when it came to developing our game. From the initial concept to the final release, they were incredibly thorough, ensuring the game was not only fun but also optimized for performance across various platforms. The game has been a big hit with players, and we’re excited to collaborate with them on future updates.",
  },
  {
    id: 10,
    icon: <FaUserCircle className="text-3xl" />,
    name: "James Peterson",
    role: "Creative Director, Interactive Entertainment",
    desc: "We had an idea for a custom 3D game, and Code Bright brought it to life in ways we hadn’t even imagined. Their attention to detail, innovative approach, and ability to turn our vision into a fully functional game were impressive. Our game has created a lot of buzz in the industry, and it’s helping boost our brand’s visibility.",
  },
  {
    id: 11,
    icon: <FaUserCircle className="text-3xl" />,
    name: "Sophia Mitchell",
    role: "Chief Technology Officer, Skyline Solutions",
    desc: "Migrating to the cloud was a big step for our company, but Code Bright made the entire process smooth and hassle-free. They guided us through every phase and ensured the transition was seamless. The cloud has given us greater flexibility and scalability, and we’re now able to collaborate more efficiently. It’s been a significant improvement for our business.",
  },
  {
    id: 12,
    icon: <FaUserCircle className="text-3xl" />,
    name: "Aaron Grant",
    role: "IT Director, RetailTech",
    desc: "We turned to Code Bright to help us transition to a cloud-based infrastructure, and it’s been a decision we haven’t looked back on. Their team handled the entire migration process with ease, and since then, we’ve experienced a significant boost in both data security and operational efficiency. We’re more agile than ever, thanks to their expertise.",
  },
];

const Testimonials = () => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 2,
        spacing: 20,
      },
      breakpoints: {
        "(max-width: 1024px)": {
          slides: {
            perView: 1,
            spacing: 20,
          },
        },
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  // Button click handler
  const handleNextClick = () => {
    if (instanceRef.current) {
      instanceRef.current.next(); // Move to the next slide
    }
  };

  const handlePrevClick = () => {
    if (instanceRef.current) {
      instanceRef.current.prev(); // Move to the prev slide
    }
  };
  return (
    <div className="py-[5rem]">
      <div className="wrapper flex flex-col items-center gap-7">
        <div className="gradient-rounded-text-box" data-aos="fade-up">
          Testimonials
        </div>
        <h2
          className="heading-2 text-white mb-2 text-center"
          data-aos="fade-up"
        >
          Our Clients' Experiences
        </h2>
        <div ref={sliderRef} className="keen-slider" data-aos="fade-up">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="keen-slider__slide min-h-[18rem] justify-between text-white p-7 bg-[#101010] rounded-xl flex flex-col gap-4"
            >
              <p className="italic desc">{item.desc}</p>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  {item.icon}
                  {/* <img
                    src={item.profileImg}
                    alt={item.name}
                    className="h-[2.5rem] min-w-[2.5rem] max-w-[2.5rem] rounded-full object-cover"
                  /> */}
                  <div className="flex flex-col h-full">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          data-aos="fade-up"
          className="flex justify-center items-center gap-10 mt-2"
        >
          <button
            className="text-primary text-5xl hover:text-primary/70 transition-all duration-200"
            onClick={handlePrevClick}
            aria-label="Previous slide"
          >
            <IoArrowBackCircleOutline />
          </button>
          <button
            className="text-primary text-5xl hover:text-primary/70 transition-all duration-200"
            onClick={handleNextClick}
            aria-label="Next slide"
          >
            <IoArrowForwardCircleOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
