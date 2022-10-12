import { useEffect, useState } from "react"
import { Formulario } from "./Components/Formulario"
import { Grid } from "./Components/Grid"

export const Dijkstra = () => {
    
    const row = [];
    const [arrGrid, setArrGrid] = useState([]);
    const [grid, setGrid] = useState(0);

    const onInputSubmit = (value) => {

        for(let i = 1; i <= value; i++) {

            row.push(i.toString());

        }

        setArrGrid([...row]);

        setGrid(value);

    }
    

  return (
    <>

        <h1 className="text-center text-uppercase">Algoritmo de Dijkstra</h1>

        <Formulario onInputSubmit={onInputSubmit} />

        <div className="container">

            {

                    arrGrid.map( button => (

                        <Grid key={button} numCol={grid}/>
    
                    ))

            }

        </div>

    </>
  )
}
