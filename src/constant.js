import logoImg from "./assets/logo/logo.png";
import whyChooseUsIcon1 from "./assets/images/ph_target-light.png";
import whyChooseUsIcon2 from "./assets/images/mage_light-bulb.png";
import whyChooseUsIcon3 from "./assets/images/tdesign_user-talk.png";
import whyChooseUsIcon4 from "./assets/images/healthicons_ui-secure-outline.png";
import whyChooseUsPng from "./assets/images/whychooseus-png.png";
import faqPng from "./assets/images/faq-character.png";
import appDevBanner from "./assets/images/app-dev-banner.jpg";
import webDevBanner from "./assets/images/web-landing-banner.jpg";
import webLandingAbout from "./assets/images/web-landing-about1.png";
import appLandingAbout from "./assets/images/app-landing-about.png";
import endlessOpportunitiesImg1 from "./assets/images/section-8-img-1.png";
import endlessOpportunitiesImg2 from "./assets/images/section-8-img-2.png";
import endlessOpportunitiesImg3 from "./assets/images/section-8-img-3.png";
import homeBannerVideo from "./assets/videos/home-banner.mp4";
import defaultBanner from "./assets/images/banner.jpg";
import aboutUsBanner from "./assets/images/about-us-banner.jpg";
import aboutUsGridImg1 from "./assets/images/aboutus-png1.png";
import aboutUsGridImg2 from "./assets/images/aboutus-png2.png";
import aboutUsGridImg3 from "./assets/images/aboutus-png3.png";
import aboutUsGridImg4 from "./assets/images/aboutus-png4.png";
import aboutUsGridImg5 from "./assets/images/aboutus-png5.png";
import aboutUsPageImg from "./assets/images/about-us-pageImg.jpg";
import { ReactComponent as EcommerceIcon } from "./assets/svgs/ecommerce.svg";
import { ReactComponent as SocialMediaIcon } from "./assets/svgs/socialmedia.svg";
import { ReactComponent as LandingPageIcon } from "./assets/svgs/landingpage.svg";
import { ReactComponent as CustomWebsiteIcon } from "./assets/svgs/customwebsite.svg";
import { ReactComponent as IosIcon } from "./assets/svgs/iosdevelopment.svg";
import { ReactComponent as AndroidIcon } from "./assets/svgs/androiddevelopment.svg";
import { ReactComponent as FlutterIcon } from "./assets/svgs/flutterdevelopment.svg";
import { ReactComponent as HybridAppIcon } from "./assets/svgs/hybridappdevelopment.svg";
// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "./assets/web-development-portfolio/5ghomes.png";
import BayutImg from "./assets/web-development-portfolio/bayut.png";
import ColdCreekcapImg from "./assets/web-development-portfolio/cold creekcap.png";
import EmergencyMusicImg from "./assets/web-development-portfolio/emergency music .png";
import FlatiornImg from "./assets/web-development-portfolio/flatiorn.png";
import MavenImg from "./assets/web-development-portfolio/maven.png";
import MenissaCateringsImg from "./assets/web-development-portfolio/menissa caterings.png";
import MethodistImg from "./assets/web-development-portfolio/methodist.png";
import ThinkRealityImg from "./assets/web-development-portfolio/think reality.png";

// Import all images at the top (App Development)
import DubaiTravelGuideImg from "./assets/app-development-portfolio/dubai travel guide.png";
import EloraHairPalourImg from "./assets/app-development-portfolio/elora hair palour.png";
import EvansFrancisImg from "./assets/app-development-portfolio/evans francis.png";
import HouseOfDeliverenceImg from "./assets/app-development-portfolio/house of deliverence.png";
import MybitsShopImg from "./assets/app-development-portfolio/mybitsshop.png";
import NamazImg from "./assets/app-development-portfolio/namaz.png";
import PoteaImg from "./assets/app-development-portfolio/potea.png";
import RentopBikeAndCarImg from "./assets/app-development-portfolio/rentop bike and car.png";
import { lazy } from "react";
const Home = lazy(() => import("./pages/website/Home"));
const Services = lazy(() => import("./pages/website/Services"));
const ContactUs = lazy(() => import("./pages/website/ContactUs"));
const AboutUs = lazy(() => import("./pages/website/AboutUs"));

export {
  logoImg,
  whyChooseUsPng,
  whyChooseUsIcon1,
  whyChooseUsIcon2,
  whyChooseUsIcon3,
  whyChooseUsIcon4,
  faqPng,
  appDevBanner,
  webDevBanner,
  webLandingAbout,
  appLandingAbout,
  endlessOpportunitiesImg1,
  endlessOpportunitiesImg2,
  endlessOpportunitiesImg3,
  homeBannerVideo,
  defaultBanner,
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
  aboutUsPageImg,
};

// company details
export const companyDetails = {
  phone: "+91-6786437376",
  whatsapp: "6786437376",
  address:
    " Unit 101, Oxford Towers, 139, HAL Old Airport Rd Kodihalli, Bangalore, Kartnataka, India,560008",
  email: "abc@xyz.com",
};

// website routes
export const routes = [
  {
    name: "Home",
    path: "/",
    component: <Home />,
  },
  {
    name: "Services",
    path: "/services",
    component: <Services />,
  },
  {
    name: "About Us",
    path: "/about-us",
    component: <AboutUs />,
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    component: <ContactUs />,
  },
];

export const faqs = [
  {
    id: 1,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 2,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 3,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 4,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 5,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerence Websites",
    icon: EcommerceIcon,
    description:
      "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: SocialMediaIcon,
    description:
      "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: LandingPageIcon,
    description:
      " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: CustomWebsiteIcon,
    description:
      "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: IosIcon,
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: AndroidIcon,
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: FlutterIcon,
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: HybridAppIcon,
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    title: "Web Development",
    desc: "Your website is the face of your business in the digital world. It’s crucial that it not only looks good but also functions seamlessly to meet your business goals. At Code Bright, we design and build custom websites that provide an exceptional user experience while serving as powerful marketing and operational tools for your business.",
    detailContent: `Your website is the face of your business in the digital world. It’s crucial that it not only looks good but also functions seamlessly to meet your business goals. At Code Bright, we design and build custom websites that provide an exceptional user experience while serving as powerful marketing and operational tools for your business.

What We Offer:
 Custom Website Design & Development: Whether you need a simple site or a complex, feature-rich platform, we create websites that reflect your brand and connect with your audience.
 E-commerce Solutions: We design secure and user-friendly e-commerce platforms that allow you to sell products online effortlessly, helping you grow your digital presence and reach more customers.
 Mobile-Responsive Design: Our websites are fully optimized for all devices, ensuring a consistent experience across desktops, tablets, and smartphones.
 Content Management Systems (CMS): We integrate user-friendly CMS platforms so you can manage and update your content with ease.
 Search Engine Optimization (SEO): We help improve your website’s visibility in search engines, driving organic traffic and boosting your online presence.
 Web Application Development: We build custom web applications that streamline your business processes, enhance productivity, and provide tailored functionality to meet your needs.

Our goal is to create websites that not only look great but also perform well, helping your business grow in the digital landscape.`,
  },
  {
    id: 2,
    title: "Mobile App Development",
    desc: "In today’s world, mobile apps are essential for connecting with customers and providing value on the go. At Code Bright, we develop powerful, user-friendly mobile apps for iOS, Android, and cross-platform solutions, designed to meet the needs of both your business and your customers.",
    detailContent: `In today’s world, mobile apps are essential for connecting with customers and providing value on the go. At Code Bright, we develop powerful, user-friendly mobile apps for iOS, Android, and cross-platform solutions, designed to meet the needs of both your business and your customers.

Our Mobile App Services Include:
 Native iOS & Android Development: We specialize in creating high-quality native apps that are optimized for performance, functionality, and user experience on iOS and Android devices.
 Cross-Platform Development: Using frameworks like React Native and Flutter, we develop apps that work across both iOS and Android platforms, saving you time and resources while delivering a great user experience.
 App Design & UX/UI: We design beautiful, intuitive interfaces that make your app a joy to use, ensuring a seamless experience for your users.
 App Testing & Quality Assurance: Every app we build undergoes rigorous testing to ensure it performs flawlessly and is free of bugs.
 App Maintenance & Support: After launch, we offer ongoing maintenance to keep your app running smoothly and up-to-date with the latest features.

We focus on delivering mobile experiences that not only meet your business objectives but also create lasting engagement with your users.`,
  },
  {
    id: 3,
    title: "VR & AR Development",
    desc: "Virtual Reality (VR) and Augmented Reality (AR) are revolutionizing the way businesses engage with their audiences. Whether it’s providing immersive product experiences or enhancing training programs, we specialize in creating customized VR and AR solutions that take your business to new heights.",
    detailContent: `Virtual Reality (VR) and Augmented Reality (AR) are revolutionizing the way businesses engage with their audiences. Whether it’s providing immersive product experiences or enhancing training programs, we specialize in creating customized VR and AR solutions that take your business to new heights.

Our VR & AR Services Include:
 Virtual Tours & Experiences: Let your customers experience your products or services in an entirely new way with interactive, immersive virtual tours—ideal for real estate, education, tourism, and more.
 AR for Retail & Product Demos: Using AR, we help businesses bring their products to life through interactive demos, allowing customers to experience and visualize items before making a purchase.
 Training & Simulation: We create VR-based training simulations that allow employees to learn new skills in a realistic yet risk-free environment.
 Custom VR/AR Solutions: Whether for marketing, education, or customer engagement, we design tailored VR and AR solutions that meet your specific business needs.

Our goal is to help businesses harness the power of VR and AR to create unforgettable experiences that engage, educate, and entertain.`,
  },
  {
    id: 4,
    title: "Blockchain Development",
    desc: "Blockchain technology is transforming industries by providing secure, transparent, and decentralized solutions that remove intermediaries and enhance trust. At Code Bright, we design and develop blockchain systems that offer enhanced security, transparency, and reliability for a range of business applications.",
    detailContent: `Blockchain technology is transforming industries by providing secure, transparent, and decentralized solutions that remove intermediaries and enhance trust. At Code Bright, we design and develop blockchain systems that offer enhanced security, transparency, and reliability for a range of business applications.

Our Blockchain Services Include:
 Custom Blockchain Solutions: We develop blockchain applications tailored to your business, offering security, transparency, and efficiency in areas like supply chain management, financial services, and more.
 Smart Contract Development: We build smart contracts that automate and enforce agreements securely, reducing the need for intermediaries and minimizing risks.
 Decentralized Applications (DApps): We create decentralized applications that run on blockchain networks, providing users with secure and transparent solutions for a variety of industries.
 Cryptocurrency Development: If you’re looking to launch a cryptocurrency or a secure token system, we provide expertise in blockchain and crypto development to ensure your success.
 Blockchain Integration: We help integrate blockchain into your existing systems, improving efficiency, transparency, and security across your business operations.

By leveraging the power of blockchain, we help businesses adopt the latest technologies to improve security, streamline processes, and build trust with customers.`,
  },
  {
    id: 5,
    title: "Game Development",
    desc: "The gaming industry is booming, and creating a unique, engaging experience is key to success. At Code Bright, we specialize in building games that captivate players and provide memorable experiences. Whether it’s a mobile game, a VR experience, or a complex console game, we have the expertise to bring your ideas to life.",
    detailContent: `The gaming industry is booming, and creating a unique, engaging experience is key to success. At Code Bright, we specialize in building games that captivate players and provide memorable experiences. Whether it’s a mobile game, a VR experience, or a complex console game, we have the expertise to bring your ideas to life.

Our Game Development Services Include:
 2D & 3D Game Development: From simple 2D games to complex 3D experiences, we have the expertise to create games that engage players and keep them coming back for more.
 Cross-Platform Game Development: We design and build games that can be enjoyed on multiple platforms, whether it’s mobile, console, or PC.
 Game Design & Mechanics: We create intuitive game mechanics and compelling gameplay that keep players entertained while ensuring smooth performance and an immersive experience.
 Quality Assurance & Testing: We thoroughly test every aspect of the game to ensure it’s free of bugs, performs well, and delivers the best possible experience to players.
 Post-Launch Support: Our work doesn’t end when the game is launched. We offer ongoing support to ensure your game remains fresh with regular updates, bug fixes, and new features.

We create games that entertain, challenge, and immerse players, helping your game stand out in an increasingly competitive market.`,
  },
  {
    id: 6,
    title: "Cloud Computing Services",
    desc: "Cloud computing is essential for businesses that want to scale, collaborate, and stay agile in today’s fast-paced world. At Code Bright, we offer cloud solutions that help you save on infrastructure costs, improve accessibility, and ensure data security. Whether you need to migrate to the cloud, manage your cloud infrastructure, or improve business continuity, we’ve got you covered.",
    detailContent: `Cloud computing is essential for businesses that want to scale, collaborate, and stay agile in today’s fast-paced world. At Code Bright, we offer cloud solutions that help you save on infrastructure costs, improve accessibility, and ensure data security. Whether you need to migrate to the cloud, manage your cloud infrastructure, or improve business continuity, we’ve got you covered.

Our Cloud Computing Services Include:
 Cloud Migration: We help businesses transition from on-premise systems to cloud platforms, ensuring a seamless migration with minimal disruption to your operations.
 Cloud Infrastructure Management: Our team handles the management and optimization of your cloud infrastructure, ensuring that it’s secure, scalable, and performs at its best.
 Private & Public Cloud Solutions: We design cloud solutions tailored to your needs, whether you require the security of a private cloud or the flexibility of a public cloud service.
 Hybrid Cloud Solutions: For businesses that require both on-premise and cloud resources, we offer hybrid cloud solutions that provide the best of both worlds.
 Cloud Security: We implement robust security protocols to safeguard your data and applications in the cloud, with proactive monitoring and threat detection.
 Disaster Recovery: Our disaster recovery solutions ensure that your data is backed up and your business can quickly recover from unexpected disruptions.

With our cloud services, you’ll be able to scale your business efficiently, reduce costs, and ensure that your operations remain flexible and secure.`,
  },
];

// about us page why choose content
export const whyChooseUsContent = [
  {
    title: "Customized Solutions for Every Business",
    desc: "We believe in a tailored approach because every business is unique. We take time to understand your goals and create custom digital solutions that align perfectly with your vision.",
  },
  {
    title: "Cutting-Edge Technology",
    desc: "Our team is equipped with the latest tools and technologies to bring your project to life, ensuring that you stay ahead in the ever-changing digital space.",
  },
  {
    title: "Security and Reliability",
    desc: "At Code Bright, we take security seriously. Our solutions are built with stringent security protocols to safeguard your business data and protect it from cyber threats.",
  },
  {
    title: "Long-Term Partnerships",
    desc: "We’re not just a service provider; we’re your strategic partner. From conceptualization to deployment and ongoing support, we’re with you every step of the way, ensuring your success in the digital landscape.",
  },
  {
    title: "Agility and Innovation",
    desc: "As technology evolves, so do we. We continuously adapt to the latest trends and innovations to deliver products that not only meet your current needs but are scalable for the future.",
  },
];

// portfolio images (web development)

export const webPortfolio = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: BayutImg,
    title: "Bayut",
    link: "https://www.bayut.com",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 4,
    img: EmergencyMusicImg,
    title: "Emergency Music",
    link: "https://www.figma.com/proto/GwlIMQuIuFevhOEp8moALy/emergence-music-distribuBon?page-id=6298%3A7215&type=design&node-id=6298-7776&viewport=407%2C314%2C0.11&t=QCtz7M4USn6gI1CG-1&scaling=min-zoom",
  },
  {
    id: 5,
    img: FlatiornImg,
    title: "Flatiorn",
    link: "",
  },
  {
    id: 6,
    img: MavenImg,
    title: "Maven",
    link: "",
  },
  {
    id: 7,
    img: MenissaCateringsImg,
    title: "Menissa Caterings",
    link: "https://messinascatering.com",
  },
  {
    id: 8,
    img: MethodistImg,
    title: "Methodist",
    link: "",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
];

export const appPortfolio = [
  {
    id: 1,
    img: DubaiTravelGuideImg,
    title: "Dubai Travel Guide",
    link: "https://play.google.com/store/apps/details?id=com.eBps.dubai.travel.guide&pcampaignid=web_share",
  },
  {
    id: 2,
    img: EloraHairPalourImg,
    title: "Elora Hair Palour",
    link: "https://play.google.com/store/apps/details?id=app.barbera.io&pcampaignid=web_share",
  },
  {
    id: 3,
    img: EvansFrancisImg,
    title: "Evans Francis",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.evansfrancis&pcampaignid=web_share",
  },
  {
    id: 4,
    img: HouseOfDeliverenceImg,
    title: "House of Deliverence",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.hod&pcampaignid=web_share",
  },
  {
    id: 5,
    img: MybitsShopImg,
    title: "Mybits Shop",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 6,
    img: NamazImg,
    title: "Namaz",
    link: "https://play.google.com/store/apps/details?id=com.iccbrossard.prayerBmes&pcampaignid=web_share",
  },
  {
    id: 7,
    img: PoteaImg,
    title: "Potea",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImg,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];
