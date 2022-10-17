
export const Column = ({row, col, isFinish, isStart, isWall}) => {

  const extraClassName = isFinish
  ? 'node-finish'
  : isStart
  ? 'node-start'
  : isWall
  ? 'node-wall'
  : '';

  return (

    <>
    
        <div 
          style={{height: 150}} 
          className={`bg-dark col m-2 ${extraClassName}`}
          id={`node-${row}-${col}`}
        >
        </div>

    </>

  )
}
