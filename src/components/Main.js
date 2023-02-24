import React from "react";
import design from "../assets/design.png";

function Main() {
  return (
    <main>
      <section className="section-one">
        <div className="container">
          <h1>Message</h1>
          <p className="message">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
            ipsum officia neque debitis consequatur reiciendis, adipisci
            consequuntur reprehenderit voluptatum maxime dicta, ratione nihil
            veniam totam delectus! Deleniti voluptate ab a dolore modi numquam
            veritatis cum, quibusdam impedit? Quam, nam nihil?
          </p>
          <div>
            <input className="link" type="button" value="Get Started" />
          </div>
        </div>
        <img className="design" src={design} alt="design" />
      </section>
      <section className="section-two">
        <h2>Reasons why you should join us?</h2>
        <div className="card">
          <p className="message">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
            ipsum officia neque debitis consequatur reiciendis, adipisci
            consequuntur reprehenderit voluptatum maxime dicta, ratione nihil
            veniam totam delectus! Deleniti voluptate ab a dolore modi numquam
            veritatis cum, quibusdam impedit? Quam, nam nihil?
          </p>
        </div>
        <div className="org-views">
          <div className="org-view">
            <p>nth Organization Registered</p>
            <input className="link" type="button" value="View Organization" />
          </div>
          <div className="org-view">
            <p>nth Organization Registered</p>
            <input className="link" type="button" value="View Organization" />
          </div>
        </div>
        <div>
          <input className="link" type="button" value="Get Started" />
        </div>
      </section>
    </main>
  );
}

export default Main;
