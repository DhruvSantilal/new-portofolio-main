import React from "react";

import Pagetitle from "../elements/Pagetitle";

import { Link } from "react-router-dom";
import File from "../../dhruv-santilal-2022-frontend.pdf";

let intro = `
  👋🏽 Hi, my name is Dhruv Santilal
  `;
let education = `
  🎓 Soon to be a grad with a Bachelor's of Science in Computer Science - First (June 2022) 
 `;
let passion = `
🌇 London based, with a passion for software development and cloud technologies 
 `;
let skills = `
📚 Most experienced within JavaScript [React.JS, Redux, Node.JS, Express.JS] and Java [Spring, Springboot] and currently pursuing AWS Solutions Architect Certification `;
// let future = `💻 As for my future, I am looking for offers as a Full-Stack Developer within a diverse team at a company that will push me to learn and hone in on my abilities further`;

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
