import { useEffect, useState } from "react"
import { Formulario } from "./Components/Formulario"
import { Grid } from "./Components/Grid"

export const Dijkstra = () => {

    const auxiliarRow = [];
    const [arrGrid, setArrGrid] = useState([]);
    const [row, setRow] = useState(0);
    const [completeGrid, setCompleteGrid] = useState([]);

    const START_NODE_ROW = 0;
    const START_NODE_COL = 0;
    const FINISH_NODE_ROW = row - 1;
    const FINISH_NODE_COL = (row * row) - 1;


    const onInputSubmit = (value) => {

        for(let i = 1; i <= value; i++) {

            auxiliarRow.push(i.toString());

        }

        setArrGrid([...auxiliarRow]);

        setRow(parseInt(value));

        const auxiliarGrid = getCompleteGrid(parseInt(value));

        setCompleteGrid(auxiliarGrid.slice());

    }

    const getCompleteGrid = (value) => {

        const numCols = value;

        const grid = [];
        for (let gridRow = 0; gridRow < value; gridRow++) {
          const currentRow = [];
          for (let gridCol = 0; gridCol < numCols; gridCol++) {
            currentRow.push(createNode(gridCol, gridRow, value));
          }
          grid.push(currentRow);
        }

        return grid;

    }
    
    
    const createNode = (gridCol, gridRow, value) => {
        
        // console.log("Fila: ", gridRow, value - 1);
        // console.log("Columna: ", gridCol, (value * value) - 1);

        return {
          gridCol,
          gridRow,
          isStart: gridRow === 0 && gridCol === 0,
          isFinish: gridRow === value - 1 && gridCol === value - 1,
          distance: Infinity,
          isVisited: false,
          isWall: false,
          previousNode: null,
        };
      };

  return (
    <>

      {

        console.log(completeGrid)

      }

        <h1 className="text-center text-uppercase forma-text">Algoritmo de Dijkstra</h1>

        <Formulario onInputSubmit={onInputSubmit} />

        <div className="container">

            {

              completeGrid.map((row, rowIndex) => (

                <Grid key={rowIndex} row={row}/>

              ))


              // arrGrid.map( button => (

              //     <Grid key={button} numCol={row}/>
    
              // ))

            }

        </div>

    </>
  )
}
