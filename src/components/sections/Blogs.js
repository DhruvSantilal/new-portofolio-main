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
    description:
      "Searches cryptocurrency prices and ranks, fetching data from an API.",
    githubURL: "https://github.com/DhruvSantilal/crypto-app",
    liveTest: "https://crypto-app-project.netlify.app/",

    Languages: (
      <p>
        <b>Languages: </b> [ Javascript, HTML, CSS]
      </p>
    ),
    tech: (
      <p>
        <b>Tech: </b> [ React.js, API, Axiosand React Hooks]
      </p>
    ),
    other: (
      <p>
        <b>Other: </b> [Github, Netlify ]<p className="text-white">.</p>
        <p className="text-white">.</p>
      </p>
    ),
  },
  {
    id: 2,
    title: "Next.js Todo App",
    image: "images/todo.png",
    category: "Next.js",
    description:
      "Todo List App using NEXT.JS and TAILWIND CSS styling and hosted with VERCEL.",
    githubURL: "https://github.com/DhruvSantilal/todo-nextjs",
    liveTest: "https://todo-nextjs-project.vercel.app/",

    Languages: (
      <p>
        <b>Languages: </b> [ Javascript, HTML, CSS]
      </p>
    ),
    tech: (
      <p>
        <b>Tech: </b> [ React.js, Next,js, Axiosand React Hooks]
      </p>
    ),
    other: (
      <p>
        <b>Other: </b> [Github, Vercel ]<p className="text-white">.</p>
        <p className="text-white">.</p>
      </p>
    ),
  },

  {
    id: 3,
    title: "IRecycle",
    image: "images/home-final.jpg",
    category: "Full-Stack",
    description:
      "FULL-STACK recycling website to help recycle unwanted items, working in a group project.",
    githubURL: "https://github.com/DhruvSantilal/IRecycle",
    liveTest: "https://github.com/DhruvSantilal/IRecycle",

    Languages: (
      <p>
        <b>Languages: </b> [ Javascript, HTML, CSS, JAVA, PHP]
      </p>
    ),
    tech: (
      <p>
        <b>Tech: </b> [ API, Java Springboot, SQL]
      </p>
    ),
    other: (
      <p>
        <b>Other: </b> [Github, Trello (Scrum Agile methodology), Testing
        tables]
      </p>
    ),
  },
  {
    id: 4,
    title: "Alternative - Final year project ",
    image: "images/alternative-all.png",
    category: "React-native",
    description:
      "Mobile application to search food recipes and nutrition facts to promotehealthy lifestyle.",
    githubURL: "https://github.com/DhruvSantilal/alternativeFYP",
    liveTest: "https://github.com/DhruvSantilal/alternativeFYP",

    Languages: (
      <p>
        <b>Languages: </b> [ Javascript, HTML, CSS]
      </p>
    ),
    tech: (
      <p>
        <b>Tech: </b> [ React Native, Spoonacular API, Axios, Firebase Auth,
        Expo and Android studio]
      </p>
    ),
    other: (
      <p>
        <b>Other: </b> [Kanban Agile Methodology, High level Testing(W/B),
        Trello, Github]
      </p>
    ),
  },
  {
    id: 5,
    title: "Covid-19 Tracker",
    image: "images/covid-tracker.png",
    category: "React",
    description:
      "Visualising covid-19 data with cards and charts using APIs and Material UI.",
    githubURL: "https://github.com/DhruvSantilal/covid19-tracker",
    liveTest: "https://covid19-tracker-tau-six.vercel.app/",

    Languages: (
      <p>
        <b>Languages: </b> [ Javascript, HTML, CSS]
      </p>
    ),
    tech: (
      <p>
        <b>Tech: </b> [ React.js, API, Axios, Material UI, Chart.js and React
        Hooks]
      </p>
    ),
    other: (
      <p>
        <b>Other: </b> [Github, Vercel]
        <p className="text-white">.</p>
      </p>
    ),
  },

  {
    id: 6,
    title: "2D Platformer Game",
    image: "images/2dplatformer.png",
    category: "Unity Game",
    description:
      "2D Platformer Game made in Unity as a bounty hunter to collect coins from 3 levels.",
    githubURL: "https://github.com/DhruvSantilal/2DPlatformerGame",
    liveTest: "https://github.com/DhruvSantilal/2DPlatformerGame",

    Languages: (
      <p>
        <b>Languages: </b> [ C#]
      </p>
    ),
    tech: (
      <p>
        <b>Tech: </b> [ Unity, Sprites, Scripts, Audio, Assets and AI]
      </p>
    ),
    other: (
      <p>
        <b>Other: </b> [Github]
        <p className="text-white">.</p>
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
            <div
              className="items-adjuster col col-lg-4 my-4 w-20 h-50"
              key={blogItem.id}
            >
              <Blog blogData={blogItem} />
            </div>
          ))}
          <div className="more-projects-btn-div">
            <a
              target="_blank"
              href="https://github.com/DhruvSantilal"
              className="btn btn-default btn-md d-fex btn-more-projects btn-dark bg-dark"
            >
              More Projects
            </a>
          </div>
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
