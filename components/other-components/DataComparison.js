import React from "react"
const ghiData = require("../../data/parseData.js")

function DataComparison() {
  console.log("========== data comparison")

  // ! incoming variables
  const targetEnergy = 1000 //  kWh/day
  const solarPanelEff = 0.2 //  %
  const solarPanelArea = 1000 //  m^2

  // convert to solar panel effective output kWh per day from measured raw data of GHI irradience
  let effectiveSolarOutputData = ghiData.map((element) => {
    return Math.round(((element * solarPanelArea) / 1000) * solarPanelEff)
  })

  // count how much met or not met
  checkDemandMeet(targetEnergy, effectiveSolarOutputData)

  return <div>DataComparison</div>
}

function convertGhiToEffectiveSolarOutput(
  ghiData,
  solarPanelArea,
  solarPanelEff
) {
  let effectiveSolarOutputData = ghiData.map((element) => {
    return Math.round(((element * solarPanelArea) / 1000) * solarPanelEff)
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

  console.log("demandMet: ", demandCountObj.demandMet)
  console.log("demandNotMet: ", demandCountObj.demandNotMet)

  return demandCountObj
}

export default DataComparison
