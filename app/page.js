// import { data } from "@/data/dataObj"
import { MainData } from "@/components/modules/index.js"

const ghiData = require("../data/parseData.js")

export default function Home() {
  // console.log("hello from page")
  // console.log(ghiData)

  return (
    <main>
      <MainData />
    </main>
  )
}
