import React from "react"

function page() {
  return (
    <div>
      <section className="hero hero-bg">
        <div className="hero-body pb-4">
          <p className="title">About</p>
        </div>
      </section>
      <section className="section">
        <h2 className="subtitle">Project</h2>
        <p>
          This is a learning project where I wanted to make a planning tool that
          simulates energy output of a solar energy project using historical
          data for 2020 to 2023 based in Inner Sunset neighborhood of San
          Francisco.
        </p>
        <br />
        <p>
          Because solar irradiation is variable, it can be a challenge to assess
          the potential energy output of a solar project from a given location.
          To solve this, the tool uses a given target system power, and creates
          an assumed baseline energy output and solar area. It uses these
          parameters and compares it to the historical data and results in data
          showing how many days would have met the baseline target energy
          output.
        </p>
        <br />
        <p>
          This project started as an effort to use solar data in a novel way.
          The goal is to solve a question or present data for a specific type of
          perspective. From that start, the function ended up being to project
          met or not met energy demand for a given solar project.
        </p>
        <br />
        <p>
          This project is built with Next.js, React, Bulma css, rechart. The
          data source is from public database of{" "}
          <a href="https://www.solaranywhere.com/" className="about-links">
            SolarAnywhere®
          </a>
          , of{" "}
          <a href="https://www.cleanpower.com/" className="about-links">
            Clean Power Research
          </a>
          .
        </p>
      </section>
      <section className="section">
        <h2 className="subtitle">About me</h2>
        <p>
          My name is{" "}
          <a href="https://kevin-lambda.github.io/" className="about-links">
            Kevin
          </a>{" "}
          and I'm a software developer with a background in aerospace mechanical
          engineering. You can get in touch through
          <span>
            {" "}
            <a
              href="mailto:kevin.quoct.lam+solarTool@gmail.com"
              className="about-links"
            >
              email
            </a>
          </span>{" "}
        </p>
      </section>
    </div>
  )
}

export default page
