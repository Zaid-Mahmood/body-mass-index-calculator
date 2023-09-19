import { useState } from "react"
import "../Styles/Measurement.css"
function MeasurementSection() {

  const [values, setValues] = useState({
    metricHeight: false,
    metricWeight: false,
    imperialHeight: false,
    imperialWeight: false
  })
  const [checked, setChecked] = useState('metric')

  //check the checkbox which is checked imperial or metric 
  const changeHandler = (e) => {
    setChecked(e.target.value)
  }

  // input handler
  const inputHandler = (field, value) => {
    console.log({ ...values })
    setValues({ ...values, [field]: value })
  }


  // metric BMI value
  const metricBmiChanger = () => {
    let metricValue = values.metricWeight / (values.metricHeight * values.metricHeight);
    let updatedValue = metricValue * 10000
    return updatedValue.toFixed(1)
  }

  // imperial BMI value
  const imperialBmiChanger = () => {
    let imperialValue = values.imperialWeight / (values.imperialHeight * values.imperialHeight)
    let updatedValue = 703 * imperialValue
    return updatedValue.toFixed(1)
  }

  return (
    <div className="mainBody">
      <div className="container-fluid w-100 mainDiv">
        <div className="flex-grow-1 mainCard">
          <div>
            <h4>Enter your details below</h4>

            <div className="flexItems">

              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="metric" checked={checked === "metric"} onChange={changeHandler} />
                <label className="form-check-label fw-bold" for="flexRadioDefault1">
                  Metric
                </label>
              </div>
              <div className="form-check imperialRadioBtn">
                <input className="form-check-input" type="radio" value="imperial" name="flexRadioDefault" id="flexRadioDefault2" checked={checked === "imperial"} onChange={changeHandler} />
                <label className="form-check-label fw-bold" for="flexRadioDefault2">
                  Imperial
                </label>
              </div>
            </div>


            <div className="flexItems">
              <p className="text-secondary"><small> Height</small></p>
              <p className="weightTag text-secondary"><small> Weight</small></p>
            </div>

            {checked === "metric" ?
              <div className="flexItems">
                <div className="inputTabs">
                  <input type="number" placeholder="0" onChange={(e) => inputHandler('metricHeight', e.target.value)} value={values.metricHeight} />
                  <span className="text-primary fw-bold measuringUnit">cm</span>
                </div>
                <div className="inputTabs weightUnit">
                  <input type="number" placeholder="0" onChange={(e) => inputHandler('metricWeight', e.target.value)} value={values.metricWeight} />
                  <span className="text-primary fw-bold measuringUnit">kg</span>
                </div>
              </div>
              :
              <div className="flexItems">
                <div className="inputTabs">
                  <input type="number" placeholder="0" onChange={(e) => inputHandler("imperialHeight", e.target.value)} value={values.imperialHeight} />
                  <span className="text-primary fw-bold measuringUnit">inch</span>
                </div>
                <div className="inputTabs weightUnit">
                  <input type="number" placeholder="0" onChange={(e) => inputHandler("imperialWeight", e.target.value)} value={values.imperialWeight} />
                  <span className="text-primary fw-bold measuringUnit">lbs</span>
                </div>
              </div>}

            <div className="Result py-4">
              {(values.metricHeight && values.metricWeight !== 0) && (checked === "metric") ?
                <button className="bmiResult btn btn-primary text-start w-100 py-4 rounded-end-pill"> <h3> Your BMI is ...</h3><br />{metricBmiChanger()}</button>
                : (values.imperialHeight && values.imperialWeight !== 0) && (checked === "imperial") ?
                  <button className="bmiResult btn btn-primary text-start w-100 py-4 rounded-end-pill"> <h3> Your BMI is ...</h3><br />{imperialBmiChanger()}</button>
                  : <button className="bmiResult btn btn-primary text-start w-100 py-4 rounded-end-pill"> <h2> Welcome! </h2><br /><small> Enter your height and weight and you'll see your BMI result here </small></button>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MeasurementSection
