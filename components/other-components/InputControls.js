import React, { useState } from "react"

// target system power, solar eff, solar area override, band factor, area override flag

function InputControls(props) {
  const {
    setAreaBandCompareFactor,
    setAreaOverride,
    setAreaOverrideFlag,
    setPanelEff,
    setTargetSystemPower,
    setTempPeakSunSf,
    targetSystemPower,
    panelEff,
    tempPeakSunSf,
    areaBandCompareFactor,
    areaOverrideFlag,
    areaOverride,
    baselineSolarArea,
  } = props

  const [targetSystemPowerForm, setTargetSystemPowerForm] =
    useState(targetSystemPower) //kW

  const [tempPeakSunSfForm, setTempPeakSunSfForm] = useState(tempPeakSunSf)
  const [areaBandCompareFactorForm, setAreaBandCompareFactorForm] = useState(
    areaBandCompareFactor
  )

  const [areaOverrideFlagForm, setAreaOverrideFlagForm] =
    useState(areaOverrideFlag)
  const [areaOverrideForm, setAreaOverrideForm] = useState(areaOverride)
  const [panelEffForm, setPanelEffForm] = useState(panelEff)

  function handleSubmit(e) {
    e.preventDefault()
    setTargetSystemPower(targetSystemPowerForm)

    setAreaBandCompareFactor(areaBandCompareFactorForm)
    setAreaOverride(areaOverrideForm)
    setAreaOverrideFlag(areaOverrideFlagForm)
    setPanelEff(panelEffForm)
    setTempPeakSunSf(tempPeakSunSfForm)
  }

  return (
    <div className="section">
      <h2 className="title">Input controls</h2>

      <p>debug</p>
      <p>targetSystemPowerForm: {targetSystemPowerForm}</p>
      <p>areaBandCompareFactorForm: {areaBandCompareFactorForm}</p>

      <p>areaOverrideFlagForm: {areaOverrideFlagForm ? "true" : "false"}</p>
      <p>areaOverrideForm: {areaOverrideForm}</p>

      <p>tempPeakSunSfForm: {tempPeakSunSfForm}</p>
      <p>panelEffForm: {panelEffForm}</p>

      <br />
      <form onSubmit={handleSubmit}>
        <label>
          set target system power:{" "}
          <input
            name="systemPower"
            type="number"
            onChange={(e) => setTargetSystemPowerForm(e.target.value)}
            defaultValue={targetSystemPower}
          />
        </label>
        <br />

        <label>
          set peak sun hours:{" "}
          <input
            name="peakSunHours"
            type="number"
            onChange={(e) => setTempPeakSunSfForm(e.target.value)}
            defaultValue={tempPeakSunSf}
          />
        </label>
        <br />

        <label>
          set band compare:{" "}
          <input
            name="bandCompare"
            type="number"
            step="any"
            onChange={(e) => setAreaBandCompareFactorForm(e.target.value)}
            defaultValue={areaBandCompareFactor}
          />
        </label>
        <br />

        <label>
          set panel efficiency:{" "}
          <input
            name="panelEff"
            type="number"
            onChange={(e) => setAreaBandCompareFactorForm(e.target.value)}
            defaultValue={panelEff}
          />
        </label>
        <br />

        <label>
          override baseline solar panel area?{" "}
          <input
            name="overrideFlag"
            type="checkbox"
            onChange={(e) => setAreaOverrideFlagForm(e.target.checked)}
          />
        </label>
        <br />

        <label>
          set override solar panel area:{" "}
          <input
            name="areaOverride"
            type="number"
            onChange={(e) => setAreaOverrideForm(e.target.value)}
            defaultValue={baselineSolarArea}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default InputControls
