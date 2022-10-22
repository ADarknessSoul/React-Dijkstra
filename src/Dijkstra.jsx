import { useState } from "react"
import { dijkstra } from "./Algoritmo/dijkstra"
import { Formulario } from "./Components/Formulario"
import { Grid } from "./Components/Grid"

export const Dijkstra = () => {

    const auxiliarRow = [];
    const [row, setRow] = useState(0);
    const [completeGrid, setCompleteGrid] = useState([]);
    const [mousePressed, setMousePressed] = useState(false);

    const START_NODE_ROW = 0;
    const START_NODE_COL = 0;
    const FINISH_NODE_ROW = row - 1;
    const FINISH_NODE_COL = row - 1;


    const onInputSubmit = (value) => {

        for(let i = 1; i <= value; i++) {

            auxiliarRow.push(i.toString());

        }

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

  const handleNewGrid = (row, col) => {

    const newGrid = getGridWithtoggledWall(row, col);
    setCompleteGrid(newGrid.slice());

  }

  const getGridWithtoggledWall = (row, col) => {

    const newGrid = completeGrid.slice(); 
    const node = newGrid[row][col];
    const newNode = {       //Copy the properties of the node (newGrid) and toggle isWall
      ...node,
      isWall: !node.isWall,
    };
    newGrid[row][col] = newNode;
    return newGrid;

  }
  function sortNodesByDistance(unvisitedNodes) {

    unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);

  }
  
  function updateUnvisitedNeighbors(node, completeGrid) {
    const unvisitedNeighbors = getUnvisitedNeighbors(node, completeGrid);

    for (const neighbor of unvisitedNeighbors) {
      neighbor.distance = node.distance + 1;
      neighbor.previousNode = node;
    }
  }

  const handleVisualize = () => {

    if(completeGrid.length === 0) return;
    //Declarar nodos de inicio y final
    const startNode = completeGrid[START_NODE_ROW][START_NODE_COL];
    const finishNode = completeGrid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const visitedNodesInOrder = dijkstra(completeGrid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);

  }

  //animateDijkstra chino 
  const animateDijkstra = (visitedNodesInOrder, nodesInShortestPathOrder) => {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          animateShortestPath(nodesInShortestPathOrder);
        }, 10 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        let nodolargest = document.getElementById(`node-${node.gridRow}-${node.gridCol}`); 
        console.log(nodolargest);
        nodolargest.classList.add('node-visited');

      }, 10 * i);
    }
  }



  const animateShortestPath = (nodesInShortestPathOrder) => {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        const nodeshortest = document.getElementById(`node-${node.gridRow}-${node.gridCol}`);
        nodeshortest.classList.add('node-shortest-path');

      }, 50 * i);
    }
  }

  

  return (
    <>

        <h1 className="text-center text-uppercase forma-text">Algoritmo de Dijkstra</h1>

        <Formulario onInputSubmit={onInputSubmit} />

        <div className="text-center">

        <button className="btn btn-outline-success" onClick={handleVisualize}>Visualizar dijkstra</button>

        </div>

        <div className="container">

            {

              completeGrid.map((row, rowIndex) => (

                <Grid key={rowIndex} row={row} newGrid={(row, col) => handleNewGrid(row, col)}/>

              ))

            }

        </div>

    </>
  )
}
