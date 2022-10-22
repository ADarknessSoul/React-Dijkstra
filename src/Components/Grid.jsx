import { Column } from "./Column"

export const Grid = ({row, newGrid, mouseUp, mouseEnter}) => {

 const handleMouseDown = (row, col) => {

  newGrid(row, col);

 }

 const handleMouseUp = () => {

  mouseUp();

 }

 const handleMouseEnter = (row, col) => {

  mouseEnter(row, col);

 }

  return (
    <>

      <div className="row">

          {

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
                  onMouseDown={(gridRow, gridCol) => handleMouseDown(gridRow, gridCol)}
                  onMouseUp={handleMouseUp}
                  onMouseEnter={(gridRow, gridCol) => handleMouseEnter(gridRow, gridCol)}
                />

              );

            })
          }

      </div>


    </>
  )
}
