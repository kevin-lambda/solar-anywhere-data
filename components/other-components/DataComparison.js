import React from "react"
const ghiData = require("../../data/parseData.js")

function DataComparison(props) {
  // ! incoming variables
  const targetEnergy = 1000 //  kWh/day
  const solarEff = 0.2 //  %
  const solarArea = 1000 //  m^2

  const lessAreaFactor = 0.9
  const moreAreaFactor = 1.1

  const dataDays = ghiData.length
  const dataYears = (dataDays / 365).toFixed(1)

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

  return (
    <div className="section">
      <h2 className="title">Data section</h2>

      <h3 className="title is-5">variables</h3>
      <p>target energy kWh / day {targetEnergy}</p>
      <p>solar eff % {solarEff}</p>
      <p>solar area m^2 {solarArea}</p>
      <p>less Area Factor {lessAreaFactor}</p>
      <p>more Area Factor {moreAreaFactor}</p>

      <h3 className="title is-5">comparison</h3>
      <p>
        over data of {dataYears} years, these are the resulting days met or not
        met energy target
      </p>
      <p>
        more area factor: days demand met {moreCheck.demandMet}. days demand not
        met {moreCheck.demandNotMet}
      </p>
      <p>
        base area factor: days demand met {baseCheck.demandMet}. days demand not
        met {baseCheck.demandNotMet}
      </p>
      <p>
        less area factor: days demand met {lessCheck.demandMet}. days demand not
        met {lessCheck.demandNotMet}
      </p>
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
