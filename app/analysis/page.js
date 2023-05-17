import React from "react"

function page() {
  return (
    <div>
      <section className="hero hero-bg">
        <div className="hero-body pb-4">
          <p className="title">Analysis Documentation</p>
        </div>
      </section>
      <section className="section">
        <h2 className="subtitle">Data</h2>
        <ul>
          <li>
            Daily energy data is from{" "}
            <a href="https://www.solaranywhere.com/" className="about-links">
              Solar Anywhere
            </a>
            , by{" "}
            <a href="https://www.cleanpower.com/" className="about-links">
              Clean Power Research
            </a>
            .
          </li>
          <li>
            Data is from the grid location in the Inner Sunset neighborhood of
            San Francisco at coordinates{" "}
            <a
              href="https://goo.gl/maps/vNqaCoiZqkycJyr18"
              className="about-links"
            >
              37.762129, -122.467662
            </a>{" "}
            in high resolution mode.
          </li>
          <li>
            The available data range gathered is from January 1, 2020 to April
            1, 2023
          </li>
          <li>
            The solar data type used is Global Horizontal Irradiance (GHI) W/m
            <sup>2</sup>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </section>
      <section className="section">
        <h2 className="subtitle">Methodology & Assumptions</h2>
        <ul>
          <li>
            - The raw data came in hourly intervals of GHI power measurements.
            This was converted into daily energy by summing 24 hours of GHI
            power data. This results in effectively the total energy potential
            for a given day.
          </li>
          <li>
            - The target system size was primarily used to get the baseline
            energy output expected from a solar project. With a given target
            system size power, it was divided by peak solar irradiance and panel
            efficiency. This results in the baseline solar area needed to
            produce the system target power.
          </li>
          <li>
            - Then the baseline solar area is multiplied by the peak sun hours
            to get a baseline target daily energy output.
          </li>
          <li>
            - Finally, the baseline target daily energy output is compared
            against the actual daily energy potential. This results in a model
            simulating the performance of a solar project and showing how many
            days the project would or would not meet energy demand.
          </li>
        </ul>
        <br />
        <ul>
          <li>
            Peak solar irradiance = 1000 W/m
            <sup>2</sup> <sub>[1]</sub>
          </li>
          <li>
            Typical Solar Panel efficiency = 20% <sub>[2]</sub>
          </li>
          <li>
            Peak Sun hours in San Francisco = 5 hours <sub>[3]</sub>
          </li>
          <li>
            Typical commercial solar panel array size = 78" x 39" <sub>[4]</sub>
          </li>
          <li></li>
          <li></li>
        </ul>
      </section>
      <section className="section">
        <h2 className="subtitle">Citations </h2>
        <ul>
          <li>
            [1] Wikimedia Foundation. (2023, May 9). Solar irradiance.
            Wikipedia.
            <a href="https://en.wikipedia.org/wiki/Solar_irradiance#:~:text=On%20a%20clear%20day%2C%20solar,%2D100%20W%2Fm2">
              https://en.wikipedia.org/wiki/Solar_irradiance#:~:text=On%20a%20clear%20day%2C%20solar,%2D100%20W%2Fm2
            </a>
          </li>
          <li>
            [2] Photovoltaic energy factsheet. Center for Sustainable Systems.
            (n.d.).
            <a href="https://css.umich.edu/publications/factsheets/energy/photovoltaic-energy-factsheet#:~:text=PV%20conversion%20efficiency%20is%20the,that%20is%20converted%20to%20electricity.&text=Though%20most%20commercial%20panels%20have,cells%20with%20efficiencies%20approaching%2050%25.">
              https://css.umich.edu/publications/factsheets/energy/photovoltaic-energy-factsheet#:~:text=PV%20conversion%20efficiency%20is%20the,that%20is%20converted%20to%20electricity.&text=Though%20most%20commercial%20panels%20have,cells%20with%20efficiencies%20approaching%2050%25.
            </a>
          </li>
          <li>
            [3] San Francisco. TurbineGenerator. (2018, July 2).
            <a href="https://www.turbinegenerator.org/solar/california/san-francisco/">
              https://www.turbinegenerator.org/solar/california/san-francisco/
            </a>
          </li>
          <li>
            [4] Team, A. S. (2022, March 4). 4 differences between commercial
            and residential solar power. A1A Solar.
            <a href="https://a1asolar.com/4-differences-between-commercial-and-residential-solar-power/#:~:text=Size%20%E2%80%94%20On%20average%2C%20commercial%20solar,78%20inches%20by%2039%20inches.">
              https://a1asolar.com/4-differences-between-commercial-and-residential-solar-power/#:~:text=Size%20%E2%80%94%20On%20average%2C%20commercial%20solar,78%20inches%20by%2039%20inches.
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default page
