import React from "react";
// import { Link } from 'react-router-dom';
import Blog from "../elements/Blog";
import Pagetitle from "../elements/Pagetitle";
import Brandlogos from "./Brandlogos";
const languages = "Languages";

const allBlogs = [
  {
    id: 1,
    title: "Crypto App",
    image: "images/crypto-app.png",
    category: "React",
    description: "Search up crypto currency prices, volume and rank.",
    githubURL: "https://github.com/DhruvSantilal/crypto-app",
    liveTest: "https://crypto-app-project.netlify.app/",
    Languages: (
      <p>
        <b>Languages: </b> [ HTML. CSS. JS]
      </p>
    ),
    tech: (
      <p>
        <b>Tech: </b> [ Spring, SpringBoot, SpringSecurity]
      </p>
    ),
    other: (
      <p>
        <b>Other: </b> N/A
      </p>
    ),
  },
  {
    id: 2,
    title: "Next.js Todo App",
    image: "images/todo.png",
    category: "Next.js",
    description: "simple nextjs application with routes and crypto API.",
    githubURL: "https://github.com/DhruvSantilal/todo-nextjs",
    liveTest: "https://todo-nextjs-project.vercel.app/",
    Languages: (
      <p>
        <b>Languages: </b> [ HTML. CSS. JS]
      </p>
    ),
    tech: (
      <p>
        <b>Tech: </b> [ Spring, SpringBoot, SpringSecurity]
      </p>
    ),
    other: (
      <p>
        <b>Other: </b> N/A
      </p>
    ),
  },

  {
    id: 3,
    title: "IRecycle",
    image: "images/home-final.jpg",
    category: "Full-Stack",
    description: "Full-stack recycling website to recycle unwanted items.",
    githubURL: "https://github.com/DhruvSantilal/IRecycle",
    liveTest: "https://github.com/DhruvSantilal/IRecycle",
    Languages: (
      <p>
        <b>Languages: </b> [ HTML. CSS. JS]
      </p>
    ),
    tech: (
      <p>
        <b>Tech: </b> [ Spring, SpringBoot, SpringSecurity]
      </p>
    ),
    other: (
      <p>
        <b>Other: </b>
        N/A
      </p>
    ),
  },
  {
    id: 4,
    title: "Alternative",
    image: "images/alternative-all.png",
    category: "React-native",
    description:
      "Mobile application to search food recipes and nutrition facts.",
    githubURL: "https://github.com/DhruvSantilal/alternativeFYP",
    liveTest: "https://github.com/DhruvSantilal/alternativeFYP",
    Languages: (
      <p>
        <b>Languages: </b> [ HTML. CSS. JS]
      </p>
    ),
    tech: (
      <p>
        <b>Tech: </b> [ Spring, SpringBoot, SpringSecurity]
      </p>
    ),
    other: (
      <p>
        <b>Other: </b> N/A
      </p>
    ),
  },
  {
    id: 5,
    title: "Covid-19 Tracker",
    image: "images/covid-tracker.png",
    category: "React",
    description: "visualising covid-19 data with cards and charts.",
    githubURL: "https://github.com/DhruvSantilal/covid19-tracker",
    liveTest: "https://covid19-tracker-tau-six.vercel.app/",
    Languages: (
      <p>
        <b>Languages: </b> [ HTML. CSS. JS]
      </p>
    ),
    tech: (
      <p>
        <b>Tech: </b> [ Spring, SpringBoot, SpringSecurity]
      </p>
    ),
    other: (
      <p>
        <b>Other: </b> N/A
      </p>
    ),
  },

  {
    id: 6,
    title: "2D Platformer Game",
    image: "images/2dplatformer.png",
    category: "Unity Game",
    description:
      "2D Platformer Game made in Unity as bounty hunter to collect coins.",
    githubURL: "https://github.com/DhruvSantilal/2DPlatformerGame",
    liveTest: "https://github.com/DhruvSantilal/2DPlatformerGame",
    Languages: (
      <p>
        <b>Languages: </b> [ HTML. CSS. JS]
      </p>
    ),
    tech: (
      <p>
        <b>Tech: </b> [ Spring, SpringBoot, SpringSecurity]
      </p>
    ),
    other: (
      <p>
        <b>Other: </b> N/A
      </p>
    ),
  },

  // {
  //   id: 5,
  //   title: "Next.js Simple website",
  //   image: "images/nextjs.png",
  //   category: "Next.js",
  //   description: "simple nextjs application with routes and crypto API.",
  //   githubURL: "https://github.com/DhruvSantilal/nextjs-project",
  //   liveTest: "https://simple-nextjs-project-api-fetching.vercel.app/",
  //   Languages: "Languages: [HTML. CSS. JS]",
  //   tech: "Tech: [Spring, SpringBoot, SpringSecurity]",
  //   other: "Other: N/A",
  // },
];

function Blogs() {
  return (
    <section id="blog">
      <div className="container w-100">
        <Pagetitle title="Latest Projects" />
        {/* blogs */}
        <div className="row blog-wrapper container ps-5 pe-5">
          {allBlogs.map((blogItem) => (
            <div className="items-adjuster col col-lg-4 my-4 w-20 h-50" key={blogItem.id}>
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
