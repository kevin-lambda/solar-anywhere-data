"use client"

import React, { useState, useEffect } from "react"
import { DataComparison, InputControls } from "../other-components"

function MainData() {
  //main vars
  const [targetSystemPower, setTargetSystemPower] = useState(400) //kW

  const [baselineSolarArea, setBaselineSolarArea] = useState(0) //m^2
  const [baselineTargetDailyEnergy, setBaselineTargetDailyEnergy] = useState(0) //kWh

  const [dataCompareObject, setDataCompareObject] = useState({})

  //assumptions
  const peakSolarIrradience = 1000 // w/m^2
  const oneSolarArrayArea = 1.96 //m^2 from 78in x 39in
  const numSolarArrays = parseInt(baselineSolarArea / oneSolarArrayArea)

  const [panelEff, setPanelEff] = useState(0.2)
  const [tempPeakSunSf, setTempPeakSunSf] = useState(5)
  const [areaBandCompareFactor, setAreaBandCompareFactor] = useState(0.1)

  // override variables
  const [areaOverrideFlag, setAreaOverrideFlag] = useState(false)
  const [areaOverride, setAreaOverride] = useState(0)
  // const [targetEnergyOverride, setTargetEnergyOverride] = useState(0)

  useEffect(() => {
    setBaselineSolarArea(
      getBaselineSolarArea(targetSystemPower, panelEff, peakSolarIrradience)
    )
    setBaselineTargetDailyEnergy(
      getBaselineTargetDailyEnergy(targetSystemPower, tempPeakSunSf)
    )
  }, [targetSystemPower])

  return (
    <div>
      <section className="hero">
        <div className="hero-body">
          <p className="title">Prospective solar farm energy analysis tool</p>
          <p className="subtitle">
            Given a system power, determine demand match of baseline energy
            output in comparison to historical data
          </p>
        </div>
      </section>

      <section className="section pb-1">
        <DataComparison
          baselineTargetDailyEnergy={baselineTargetDailyEnergy}
          baselineSolarArea={baselineSolarArea}
          panelEff={panelEff}
          areaBandCompareFactor={areaBandCompareFactor}
          areaOverrideFlag={areaOverrideFlag}
          areaOverride={areaOverride}
          numSolarArrays={numSolarArrays}
          targetSystemPower={targetSystemPower}
          // targetEnergyOverride={targetEnergyOverride}
        />
      </section>
      <section className="section pb-1">
        <InputControls
          setTargetSystemPower={setTargetSystemPower}
          setPanelEff={setPanelEff}
          setTempPeakSunSf={setTempPeakSunSf}
          setAreaBandCompareFactor={setAreaBandCompareFactor}
          setAreaOverrideFlag={setAreaOverrideFlag}
          setAreaOverride={setAreaOverride}
          // setTargetEnergyOverride={setTargetEnergyOverride}
          targetSystemPower={targetSystemPower}
          panelEff={panelEff}
          tempPeakSunSf={tempPeakSunSf}
          areaBandCompareFactor={areaBandCompareFactor}
          areaOverrideFlag={areaOverrideFlag}
          areaOverride={areaOverride}
          baselineSolarArea={baselineSolarArea}
          // targetEnergyOverride={targetEnergyOverride}
          baselineTargetDailyEnergy={baselineTargetDailyEnergy}
        />
      </section>

      {/* <section className="section">
        <h2 className="title">tbd money compare section</h2>
        <p>starting with target system power {targetSystemPower} kW</p>
        <p>assumed typical baseline solar Area {baselineSolarArea} m^2</p>
        <p>
          assumed typical baseline target daily total energy{" "}
          {baselineTargetDailyEnergy} kWh
        </p>
        <p>
          this would be approximately {numSolarArrays} solar arrays of typical
          commercial size of 78in x 39in
        </p>
      </section> */}
    </div>
  )
}

function getBaselineSolarArea(
  targetSystemPower,
  panelEff,
  peakSolarIrradience
) {
  return parseFloat(
    ((targetSystemPower * 1000) / (peakSolarIrradience * panelEff)).toFixed(1)
  )
}

function getBaselineTargetDailyEnergy(targetSystemPower, tempPeakSunSf) {
  return targetSystemPower * tempPeakSunSf
}

function getNumberArrays(baselineSolarArea, oneSolarArrayArea) {
  return parseInt(baselineSolarArea / oneSolarArrayArea)
}

export default MainData
