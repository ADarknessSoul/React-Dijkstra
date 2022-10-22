
export const dijkstra = (completeGrid, startNode, finishNode) => {

    const visitedNodesInOrder = [];
    startNode.distance = 0;
    const unvisitedNodes = getAllNodes(completeGrid);

      while (!!unvisitedNodes.length) {
      sortNodesByDistance(unvisitedNodes);

      const closestNode = unvisitedNodes.shift();

      if (closestNode.isWall) continue;

      if (closestNode.distance === Infinity) return visitedNodesInOrder;
      closestNode.isVisited = true;
      visitedNodesInOrder.push(closestNode);
      if (closestNode === finishNode) return visitedNodesInOrder;
      updateUnvisitedNeighbors(closestNode, completeGrid);
    }

}

  function getAllNodes(completeGrid) {
    const nodes = [];
    for (const row of completeGrid) {
      for (const node of row) {
        nodes.push(node);
      }
    }
  
    return nodes;
  }
  
  function getUnvisitedNeighbors(node, completeGrid) {
    const neighbors = [];
    const {gridCol, gridRow} = node;
    if (gridRow > 0) neighbors.push(completeGrid[gridRow - 1][gridCol]);
    if (gridRow < completeGrid.length - 1) neighbors.push(completeGrid[gridRow + 1][gridCol]);
    if (gridCol > 0) neighbors.push(completeGrid[gridRow][gridCol - 1]);
    if (gridCol < completeGrid[0].length - 1) neighbors.push(completeGrid[gridRow][gridCol + 1]);

    return neighbors.filter(neighbor => !neighbor.isVisited);
  }

export function getNodesInShortestPathOrder(finishNode) {
  const nodesInShortestPathOrder = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }

  return nodesInShortestPathOrder;
}