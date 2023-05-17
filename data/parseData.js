const dataAll = require("./rawData.js")

function getAllGhi(data) {
  let ghiArray = []
  data.map((element) => {
    ghiArray.push(element.ghi)
  })
  return ghiArray
}

const ghiArray = getAllGhi(dataAll)

module.exports = ghiArray
