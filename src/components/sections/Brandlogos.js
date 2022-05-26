import React from "react";
import Pagetitle from "../elements/Pagetitle";

const brandlogoData = [
  {
    id: 1,
    image: "images/skills/icons8-javascript.svg",
    text: "Javascript",
  },
  {
    id: 2,
    image: "images/skills/icons8-html5.svg",
    text: "HTML",
  },
  {
    id: 3,
    image: "images/skills/icons8-css.svg",
    text: "CSS",
  },
  {
    id: 4,
    image: "images/skills/icons8-react.svg",
    text: "React",
  },
  {
    id: 5,
    image: "images/skills/icons8-next.svg",
    text: "Next.js",
  },
  {
    id: 6,
    image: "images/skills/icons8-sass.svg",
    text: "Sass",
  },
  {
    id: 7,
    image: "images/skills/icons9-mui.svg",
    text: "Material UI",
  },
  {
    id: 8,
    image: "images/skills/tailwind-css.svg",
    text: "Tailwind CSS",
  },
  {
    id: 9,
    image: "images/skills/icons8-gatsby.svg",
    text: "Gatsby",
  },
  {
    id: 10,
    image: "images/skills/icons8-bootstrap.svg",
    text: "Bootstrap",
  },
  {
    id: 11,
    image: "images/skills/icons8-java.svg",
    text: "Java",
  },
  {
    id: 12,
    image: "images/skills/icons8-nodejs.svg",
    text: "Node.js",
  },
];

function Brandlogos() {
  return (
    <div className="mt-5">
      <Pagetitle title="Technologies" />
      <div id="branglogos">
        <div className="container pt-3">
          <div className="row">
            {brandlogoData.map((brandlogo) => (
              <div className="col-md-3 col-3" key={brandlogo.id}>
                <div className="client-item mx-3">
                  <div className="inner p-4 my-3">
                    <img
                      src={brandlogo.image}
                      alt="client-name"
                      className="img-100"
                    />
                    <h3 className="fs-5 mt-2 ">{brandlogo.text}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brandlogos;
