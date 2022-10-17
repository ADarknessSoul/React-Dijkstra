import { useEffect, useState } from "react"
import { Column } from "./Column"

export const Grid = ({row}) => {

  return (
    <>

      <div className="row">

          {

// row.map((node, nodeIdx) => {
//   const {row, col, isFinish, isStart, isWall} = node;
//   return (
//     <Node
//       key={nodeIdx}
//       col={col}
//       isFinish={isFinish}
//       isStart={isStart}
//       isWall={isWall}
//       mouseIsPressed={mouseIsPressed}
//       onMouseDown={(row, col) => this.handleMouseDown(row, col)}
//       onMouseEnter={(row, col) =>
//         this.handleMouseEnter(row, col)
//       }
//       onMouseUp={() => this.handleMouseUp()}
//       row={row}></Node>
//   );
// })

            row.map((cell, cellIndex) => {

              const {gridRow, gridCol, isFinish, isStart, isWall} = cell;

              return (

                <Column 
                  key={cellIndex}
                  row={gridRow}
                  col={gridCol}
                  isFinish={isFinish}
                  isStart={isStart}
                  isWall={isWall}
                />

              );

            })
          }

      </div>


    </>
  )
}
