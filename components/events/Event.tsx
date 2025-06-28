'use client'

import { TProps } from "@/types/types"
import Active from "./Active"
import UnActive from "./UnActive"



function Event({ id, img, title, info, link, onClicked, active }: TProps) {
  return (
    <>
      {
        id == active ?

          <Active
            img={img}
            title={title}
            info={info}
            link={link}
          />
          :
          <UnActive
            id={id}
            img={img}
            title={title}
            onClicked={onClicked} />
      }
    </>
  )
}

export default Event