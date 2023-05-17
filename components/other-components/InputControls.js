"use client"

import React, { useState } from "react"

function InputControls(props) {
  const {
    setAreaBandCompareFactor,
    setAreaOverride,
    setAreaOverrideFlag,
    setPanelEff,
    setTargetSystemPower,
    setTempPeakSunSf,
    setTargetEnergyOverride,
    targetSystemPower,
    panelEff,
    tempPeakSunSf,
    areaBandCompareFactor,
    areaOverrideFlag,
    areaOverride,
    baselineSolarArea,
    targetEnergyOverride,
    baselineTargetDailyEnergy,
  } = props

  const [targetSystemPowerForm, setTargetSystemPowerForm] =
    useState(targetSystemPower)

  const [tempPeakSunSfForm, setTempPeakSunSfForm] = useState(tempPeakSunSf)
  const [areaBandCompareFactorForm, setAreaBandCompareFactorForm] = useState(
    areaBandCompareFactor
  )

  const [areaOverrideFlagForm, setAreaOverrideFlagForm] =
    useState(areaOverrideFlag)
  const [areaOverrideForm, setAreaOverrideForm] = useState(areaOverride)
  const [energyOverrideForm, setEnergyOverrideForm] = useState(
    baselineTargetDailyEnergy
  )
  const [panelEffForm, setPanelEffForm] = useState(panelEff)

  function handleSubmit(e) {
    e.preventDefault()
    setTargetSystemPower(targetSystemPowerForm)

    setAreaOverrideFlag(areaOverrideFlagForm)

    setPanelEff(panelEffForm)
    setAreaOverride(areaOverrideForm)
    // setTargetEnergyOverride(parseFloat(energyOverrideForm))
    setTempPeakSunSf(tempPeakSunSfForm)
    setAreaBandCompareFactor(areaBandCompareFactorForm)
  }

  return (
    <div className="section box">
      <h2 className="title">Input controls</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Target system power (kW) </label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  name="systemPower"
                  type="number"
                  onChange={(e) => setTargetSystemPowerForm(e.target.value)}
                  defaultValue={targetSystemPower}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Comparison band (%)</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  name="bandCompare"
                  type="number"
                  step="any"
                  onChange={(e) => setAreaBandCompareFactorForm(e.target.value)}
                  defaultValue={areaBandCompareFactor}
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="checkbox">
              <strong>Override baseline assumptions</strong>
            </label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input
                  className="checkbox"
                  name="overrideFlag"
                  type="checkbox"
                  onChange={(e) => setAreaOverrideFlagForm(e.target.checked)}
                />
              </div>
            </div>
          </div>
        </div>
        {areaOverrideFlagForm ? (
          <>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Solar panel area (m^2)</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      name="areaOverride"
                      type="number"
                      onChange={(e) => setAreaOverrideForm(e.target.value)}
                      defaultValue={baselineSolarArea}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Panel efficiency (%)</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      name="panelEff"
                      type="number"
                      step="any"
                      onChange={(e) => setPanelEffForm(e.target.value)}
                      defaultValue={panelEff}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <fieldset disabled>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Solar panel area (m^2)</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      name="areaOverride"
                      type="number"
                      onChange={(e) => setAreaOverrideForm(e.target.value)}
                      defaultValue={baselineSolarArea}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="field is-horizontal mb-3">
              <div className="field-label is-normal">
                <label className="label">Panel efficiency (%)</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      name="panelEff"
                      type="number"
                      step="any"
                      onChange={(e) => setPanelEffForm(e.target.value)}
                      defaultValue={panelEff}
                    />
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
        )}

        {/* <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Peak sun (hours)</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  name="peakSunHours"
                  type="number"
                  onChange={(e) => setTempPeakSunSfForm(e.target.value)}
                  defaultValue={tempPeakSunSf}
                />
              </div>
            </div>
          </div>
        </div> */}
        {/* <label>
          set override target daily energy:
          <input
            name="dailyEnergyOverride"
            type="number"
            onChange={(e) => setEnergyOverrideForm(e.target.value)}
            defaultValue={baselineTargetDailyEnergy}
          />
        </label>
        <br /> */}

        <div className="field is-horizontal">
          <div className="field-label"></div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input
                  className="button is-primary"
                  type="submit"
                  value="Accept"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default InputControls
