import React from "react";
// import { Link } from 'react-router-dom';
import Blog from "../elements/Blog";
import Pagetitle from "../elements/Pagetitle";
import Brandlogos from "./Brandlogos";

const allBlogs = [
  {
    id: 1,
    title: "Alternative",
    image: "images/alternative-all.png",
    // filesource: "../../blogs/MERN-FullStack-Ecommerce.md",
    category: "React-native",
    // liveURL: "",
    githubURL: "https://github.com/DhruvSantilal/alternativeFYP",
    liveTest: "https://github.com/DhruvSantilal/alternativeFYP",
    frontend: "Front-End: [React.JS, Context.JS, Axios]",
    backend: "Back-End: [Express.JS, Node.JS, Mongoose.JS]",
    api: "APIs: [PayPal, Stripe]",
  },
  {
    id: 2,
    title: "Crypto App",
    image: "images/crypto-app.png",
    filesource: "../../blogs/MERN-FullStack-Ecommerce.md",
    category: "React",
    liveURL: "",
    githubURL: "https://github.com/DhruvSantilal/crypto-app",
    liveTest: "https://crypto-app-project.netlify.app/",
    frontend: "Front-End: [React.JS, Context.JS, Axios]",
    backend: "Back-End: [Spring, SpringBoot, SpringSecurity]",
    api: "APIs: N/A",
    live: false,
  },
  {
    id: 3,
    title: "Covid-19 Tracker",
    image: "images/covid-tracker.png",
    filesource: "../../blogs/MERN-FullStack-Ecommerce.md",
    category: "React",
    liveURL: "",
    githubURL: "https://github.com/DhruvSantilal/covid19-tracker",
    liveTest: "https://covid19-tracker-tau-six.vercel.app/",
    frontend: "Front-End: [React.JS, Context.JS, Axios]",
    backend: "Back-End: [Spring, SpringBoot, SpringSecurity]",
    api: "APIs: N/A",
    live: false,
  },
  {
    id: 4,
    title: "Next.js Simple website",
    image: "images/nextjs.png",
    filesource: "../../blogs/MERN-FullStack-Ecommerce.md",
    category: "Next.js",
    liveURL: "",
    githubURL: "https://github.com/DhruvSantilal/nextjs-project",
    liveTest: "https://simple-nextjs-project-api-fetching.vercel.app/",
    frontend: "Front-End: [React.JS, Context.JS, Axios]",
    backend: "Back-End: [Spring, SpringBoot, SpringSecurity]",
    api: "APIs: N/A",
    live: false,
  },
  {
    id: 5,
    title: "IRecycle",
    image: "images/home-final.jpg",
    filesource: "../../blogs/MERN-FullStack-Ecommerce.md",
    category: "Full-Stack",
    liveURL: "",
    githubURL: "https://github.com/DhruvSantilal/2DPlatformerGame",
    liveTest: "https://github.com/DhruvSantilal/2DPlatformerGame",
    frontend: "Front-End: [React.JS, Context.JS, Axios]",
    backend: "Back-End: [Spring, SpringBoot, SpringSecurity]",
    api: "APIs: N/A",
    live: false,
  },
  {
    id: 6,
    title: "2D Platformer Game",
    image: "images/2dplatformer.png",
    filesource: "../../blogs/MERN-FullStack-Ecommerce.md",
    category: "Unity Game",
    liveURL: "",
    githubURL: "https://github.com/DhruvSantilal/2DPlatformerGame",
    liveTest: "https://github.com/DhruvSantilal/2DPlatformerGame",
    frontend: "Front-End: [React.JS, Context.JS, Axios]",
    backend: "Back-End: [Spring, SpringBoot, SpringSecurity]",
    api: "APIs: N/A",
    live: false,
  },
];

function Blogs() {
  return (
    <section id="blog">
      <div className="container w-100">
        <Pagetitle title="Latest Projects" />
        <div className="row blog-wrapper container w-100">
          {allBlogs.map((blogItem) => (
            <div className=" col col-lg-4 my-4 w-20 " key={blogItem.id}>
              <Blog blogData={blogItem} />
            </div>
          ))}
        </div>
        <Brandlogos />
        <div className="text-center">
          <div className="spacer" data-height="30"></div>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
