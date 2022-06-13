import React from "react";

import Pagetitle from "../elements/Pagetitle";

import { Link } from "react-router-dom";
import File from "../../Dhruv-santilal-cv-2022-graduate-frontend.pdf";

let intro = `
  👋🏽 Hi, my name is Dhruv Santilal.
  `;
let education = `
  🎓 Graduated with a Bachelor's of Science in Computer Science with a FIRST CLASS HONOURS(1.1).
 `;
let passion = `
🌇 London based, with a passion for front-end development and software development and looking to work with Reactjs. 
 `;
let skills = `
📚 Most experienced within JavaScript [React.JS, Next.JS],  HTML, CSS/CSS frameworks [Tailwind, Bootstrap, Material UI and Sass ] and Java. `;
let future = `💻 Well familliar with working in a group using methodologies such as AGILE, SCRUM, Kanban, Github and various Code Testing methods.`;

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">
          {/* <div className='col-md-3'>
            <div className='text-center text-md-left'>
              <img
                src='images/IMG_0693-1-min-min-modified.png'
                alt={aboutContent.name}
                className='w-50'
              />
            </div>
            <div className='spacer d-md-none d-lg-none' data-height='30'></div>
          </div> */}

          <div className="col-md-9 triangle-left-md triangle-top-sm mx-auto">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-12">
                  <p className="text-justify">{intro}</p>
                  <p className="text-justify">{education}</p>
                  <p className="text-justify">{passion}</p>
                  <p className="text-justify">{skills}</p>
                  <p className="text-justify">{future}</p>
                  <div className="mt-3">
                    <Link
                      to={File}
                      target="_blank"
                      download
                      className="btn btn-default"
                    >
                      View CV
                    </Link>
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
      </div>
    </section>
  );
}

export default About;
