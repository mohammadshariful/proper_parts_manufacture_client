import React from "react";

const MyPortfolio = () => {
  return (
    <div className="w-[90%] mx-auto my-10">
      <div className="card w-full bg-base-100 shadow px-4">
        <div className="card-body">
          <h2 className="text-xl lg:text-2xl">
            <span className="text-3xl">I'm</span>
            <span className="text-success ml-1">Mohammad Shariful Islam</span>
          </h2>
          <h3 className="overflow-auto">
            Email : mohammadsharifulislam64@gmail.com
          </h3>
          <h2 className="font-bold text-xl">Education : </h2>
          <p>
            I have completed diploma Engineering at Kishoreganj Polytechnic
            Institute.2016-2020.Kishoreganj,Dhaka.
          </p>
          <h2 className="font-bold text-xl">Skill Highlight : </h2>
          <p>I have skilled list of technoloy bellow : </p>
          <ul className="list-disc">
            <li>HTML</li>
            <li>CSS3</li>
            <li>Bootsrap</li>
            <li>React Bootsrap</li>
            <li>Tailwind Css</li>
            <li>Javascript</li>
            <li>React Js</li>
            <li>React Hooks</li>
            <li>Firebase</li>
          </ul>
          <h3 className="text-lg">Comfortable of Technology</h3>
          <ul className="list-disc">
            <li>Node Js</li>
            <li>MongoDB</li>
          </ul>
          <div className="project">
            <h2 className="font-bold text-xl">Project : </h2>
            <p>
              I have completed to many projects.sample list of project bellow.
            </p>
            <ul className="list-decimal">
              <li>
                <h3 className="font-bold">Car Warehouse</h3>
                <a
                  className="text-success"
                  href="https://car-rev-68abf.web.app/"
                >
                  Website Link
                </a>
              </li>
              <li>
                <h3 className="font-bold">Dexter Fitness</h3>
                <a
                  className="text-success"
                  href="https://dexter-fitness.web.app/"
                >
                  Website Link
                </a>
              </li>
              <li>
                <h3 className="font-bold">Todo Application</h3>
                <a
                  className="text-success"
                  href="https://todo-application-40d91.web.app/login"
                >
                  Website Link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
