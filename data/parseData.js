// import { data } from "./dataObj.js"

const dataAll = require("./rawData.js")

function getAllGhi(data) {
  let ghiArray = []
  data.map((element) => {
    ghiArray.push(element.ghi)
  })
  // console.log(ghiArray)
  return ghiArray
}

const ghiArray = getAllGhi(dataAll)

module.exports = ghiArray
