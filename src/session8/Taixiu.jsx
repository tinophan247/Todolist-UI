import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { betting, playGame } from "./redux/slices/xucxacSlices";

function Taixiu() {
  const { taixiu, arrDice, totalWin, totalPlays } = useSelector(
    (state) => state.xucxac
  );
  const distpatch = useDispatch();

  return (
    <div
      className="w-full h-screen pt-10 bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('./img/bgGame.png')" }}
    >
      <h1 className="text-6xl text-center font-game mt-5">Game Tài Xỉu</h1>
      <div className="flex justify-evenly  mt-10">
        <button
          onClick={() => distpatch(betting("Tài"))}
          className={`text-5xl rounded-xl font-game border-4 border-black bg-gradient-to-r from-yellow-300 to-lime-300  hover:from-yellow-500 hover:to-lime-500  w-[200px] h-[200px]`}
        >
          Tài
        </button>
        <div className="flex w-[200px] flex-wrap justify-center">
          <img className="w-[100px]" src={arrDice[0].img} alt="" />
          <img className="w-[100px]" src={arrDice[1].img} alt="" />
          <img className="w-[100px]" src={arrDice[2].img} alt="" />
        </div>
        <button
          onClick={() => distpatch(betting("Xỉu"))}
          className={`text-5xl rounded-xl font-game border-4 border-black bg-gradient-to-r  from-yellow-300 to-lime-300   hover:from-yellow-500 hover:to-lime-500  w-[200px] h-[200px]`}
        >
          Xỉu
        </button>
      </div>
      <div className=" font-game text-5xl mt-10 ">
        <p className="text-center">
          Bạn chọn : <span className="text-red-700">{taixiu}</span>{" "}
        </p>
        <p className="text-center">
          Bàn thắng : <span className="text-green-700">{totalWin}</span>{" "}
        </p>
        <p className="text-center">
          Số bàn chơi : <span className="text-blue-700">{totalPlays}</span>{" "}
        </p>
      </div>
      <div className="flex justify-center mt-10">
        <div className="flex flex-col items-center justify-center gap-6 ">
          <div
          onClick={()=>{
            taixiu !== ''  ? distpatch(playGame()) : alert('Vui lòng đặt cược')
          }}
            className="button w-40 h-16 bg-lime-500 rounded-lg cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#4d7c0f,0_0px_0_0_#4d7c0f]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_10px_0_0_#4d7c0f,0_15px_0_0_#4d7c0f]
    border-b-[1px] border-lime-400
  "
          >
            <span className="flex flex-col justify-center items-center h-full font-game font-bold text-3xl ">
              Play
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Taixiu;
