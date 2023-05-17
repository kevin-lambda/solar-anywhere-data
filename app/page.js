import { MainData } from "@/components/modules/index.js"

const ghiData = require("../data/parseData.js")
import { useCronitor } from "@cronitorio/cronitor-rum-nextjs"

export default function Home() {
  useCronitor("f4c9069f00c8476457862a431a63a453")

  return (
    <main>
      <MainData />
    </main>
  )
}
