import React from "react";

function CharsPopup(props) {
  const { chars } = props

  return (
    <ul className="fixed right-[12%] top-[11%] bg-[#17134d] py-4 px-2 rounded-2xl text-white ">
      {chars.map((char) => (
        <li className="grid grid-cols-[5rem_7.5rem] place-items-center pl-3 gap-4 hover:scale-105">
          <div className="h-20 flex">
            <img src={char.url} alt={char.name} />
          </div>
          <div className="text-center">
            <h4 className="font-bold">{char.name}</h4>
            <h5 className="text-[0.675rem] font-semibold">{char.series}</h5>
          </div>
        </li>
      ))}
    </ul>
    )
}

export default CharsPopup