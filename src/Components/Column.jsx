
export const Column = ({row, col, isFinish, isStart, isWall, onMouseDown, onMouseUp, onMouseEnter}) => {

  const extraClassName = isFinish
  ? 'node-finish'
  : isStart
  ? 'node-start'
  : isWall
  ? 'node-wall'
  : col
  ?'node'
  : row
  ? 'node'
  : 'node';

  return (

    <>
    
        <div 
          style={{height: 150}} 
          className={` col m-2 ${extraClassName}`}
          id={`node-${row}-${col}`}
          onMouseDown={() => onMouseDown(row, col)}
          onMouseUp={onMouseUp}
          onMouseEnter={() => onMouseEnter(row, col)}
        >
        </div>

    </>

  )
}
