
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



export function getNodesInShortestPathOrder(finishNode) {
  const nodesInShortestPathOrder = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }

  return nodesInShortestPathOrder;
}