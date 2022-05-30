import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";

function Blog({ blogData }) {
  const {
    // id,
    category,
    description,
    title,
    date,
    author,
    image,
    frontend,
    Languages,
    tech,
    other,
    live,
    githubURL,
    liveTest,
  } = blogData;

  return (
    <ScrollAnimation
      animateIn="fadeInUp"
      animateOut="fadeInOut"
      animateOnce={true}
    >
      <div className="blog-item rounded bg-white shadow-dark">
        <div className="thumb img-fluid">
          <a>
            <span className="category">{category}</span>
          </a>

          <img className="img-fluid " src={image} alt="blog-title" />
        </div>
        <div className="details">
          <h4 className="my-0 title mb-2">{title}</h4>

          <p className="">{description}</p>
          <p className="">{Languages}</p>
          <p>{tech}</p>
          <p>{other}</p>
          <div className="d-flex justify-content-between  my-2">
            {live && <Link className="btn btn-default btn-md">Live</Link>}
            <a
              target="_blank"
              href={githubURL}
              className="btn btn-default btn-md"
            >
              Source Code
            </a>
            <a
              target="_blank"
              href={liveTest}
              className="btn btn-default btn-md btn-dark bg-dark"
            >
              Live test
            </a>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default Blog;
