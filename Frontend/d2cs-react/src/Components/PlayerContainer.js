import React from 'react'

export const PlayerContainer = ({
  playername

}) => {
  //console.log(playername)
  return (
    <div className="playerContainer">
      <div>{playername}</div>
    </div>
  )
}

export default PlayerContainer;