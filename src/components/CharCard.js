import React from "react";

function CharCard(props) {
  const { char } = props

  return (
    <li className="grid grid-cols-[5rem_7.5rem] place-items-center pl-3 gap-4">
      <div className="h-20 flex">
        <img src={char.url} alt={char.name} />
      </div>
      <div className="text-center">
        <h4 className="font-bold">{char.name}</h4>
        <h5 className="text-[0.675rem] font-semibold">{char.series}</h5>
      </div>
    </li>
  )
}

export default CharCard