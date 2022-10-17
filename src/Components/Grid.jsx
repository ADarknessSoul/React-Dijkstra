import { useEffect, useState } from "react"
import { Column } from "./Column"

export const Grid = ({numCol}) => {

  const arrCol = [];

  for(let i = 1; i <= numCol; i++) {

    arrCol.push(i.toString());

  }

  return (
    <>

      <div className="row">

          {

            arrCol.map( column => (

               <Column key={column} />

            ))

          }

      </div>


    </>
  )
}
