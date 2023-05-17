"use client"

import React, { useState } from "react"
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts"
const ghiData = require("../../data/parseData.js")

function DataComparison(props) {
  const {
    baselineTargetDailyEnergy,
    baselineSolarArea,
    panelEff,
    areaBandCompareFactor,
    areaOverrideFlag,
    areaOverride,
    numSolarArrays,
    targetSystemPower,
  } = props

  let targetEnergy = baselineTargetDailyEnergy //  kWh/day
  let solarEff = panelEff //  %
  let solarArea = 0 //  m^2

  if (areaOverrideFlag) {
    solarArea = areaOverride //m^2
    // let parsedTargetEnergy = parseFloat(targetEnergyOverride)
    // targetEnergy = parsedTargetEnergy
  } else {
    solarArea = baselineSolarArea //  m^2
    // let parsedTargetEnergy = parseFloat(baselineTargetDailyEnergy)
    // targetEnergy = parsedTargetEnergy
  }

  let areaBandFactor = parseFloat(areaBandCompareFactor)

  let lessAreaFactor = parseFloat(1 - areaBandFactor)
  let moreAreaFactor = parseFloat(1 + areaBandFactor)

  let dataDays = ghiData.length
  let dataYears = (dataDays / 365).toFixed(1)

  let baseOutput = convertGhiToEffectiveSolarOutput(
    ghiData,
    solarArea,
    solarEff
  )
  let moreOutput = convertGhiToEffectiveSolarOutput(
    ghiData,
    solarArea * moreAreaFactor,
    solarEff
  )
  let lessOutput = convertGhiToEffectiveSolarOutput(
    ghiData,
    solarArea * lessAreaFactor,
    solarEff
  )

  let baseCheck = checkDemandMeet(targetEnergy, baseOutput)
  let moreCheck = checkDemandMeet(targetEnergy, moreOutput)
  let lessCheck = checkDemandMeet(targetEnergy, lessOutput)

  const data = [
    {
      name: `${lessAreaFactor}%`,
      Days: lessCheck.demandMet,
    },
    {
      name: "Baseline",
      Days: baseCheck.demandMet,
    },
    {
      name: `${moreAreaFactor}%`,
      Days: moreCheck.demandMet,
    },
  ]

  return (
    <div className="section box">
      <div className="columns">
        <div className="column is-three-fifths">
          <h3 className="title is-5 has-text-centered">
            Energy output days met vs Solar Area (m<sup>2</sup>)
          </h3>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 0,
                right: 5,
                left: 10,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis
                tickCount={6}
                type="number"
                domain={[0, 1250]}
                label={{
                  value: `Days`,
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <ReferenceLine
                y={1186}
                label="Total Days"
                stroke="red"
                strokeDasharray="3 3"
              />
              <Tooltip />
              <Bar dataKey="Days" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="column is-two-fifths pl-5">
          <h3 className="title is-5 has-text-centered">Inputs & stats</h3>
          <p>
            Target system power:{" "}
            <span className="is-underlined">{targetSystemPower} kW</span>
          </p>
          <p>
            Comparison Band:{" "}
            <span className="is-underlined">
              {lessAreaFactor}% to {moreAreaFactor}%
            </span>
          </p>
          <br />
          <p>
            Target solar area:{" "}
            <span className="is-underlined">
              {solarArea} m<sup>2</sup>
            </span>
          </p>
          <p>
            Solar panel efficiency:{" "}
            <span className="is-underlined">{solarEff}%</span>
          </p>
          <br />
          <p>
            Target energy:{" "}
            <span className="is-underlined">{targetEnergy} kWh / day</span>
          </p>
          <br />
          <p>
            Model simulated with data over:{" "}
            <span className="is-underlined">{dataYears} years</span>,{" "}
            <span className="is-underlined">1186 days</span>
          </p>
          <p>
            Number of solar arrays size 78" x 39":{" "}
            <span className="is-underlined">{numSolarArrays}</span>
          </p>
          <p>
            Peak solar irradiance:{" "}
            <span className="is-underlined">
              1000 W/m<sup>2</sup>
            </span>
          </p>
          <p>
            Peak sun amount: <span className="is-underlined">5 hours</span>
          </p>
        </div>
      </div>
    </div>
  )
}

function convertGhiToEffectiveSolarOutput(ghiData, solarArea, solarEff) {
  let effectiveSolarOutputData = ghiData.map((element) => {
    return Math.round(((element * solarArea) / 1000) * solarEff)
  })
  return effectiveSolarOutputData
}

function checkDemandMeet(targetEnergy, effectiveSolarOutputData) {
  let demandCountObj = {
    demandMet: 0,
    demandNotMet: 0,
  }

  for (const element of effectiveSolarOutputData) {
    if (element >= targetEnergy) {
      demandCountObj.demandMet++
    } else {
      demandCountObj.demandNotMet++
    }
  }

  return demandCountObj
}

export default DataComparison
