import { calculateWinner } from "../utils/calculateWinner";

export default function Board({ squires, onPlay, isNext }) {
  let status;
  const winner = calculateWinner(squires);
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next Player is ${isNext ? "O" : "X"}`;
  }

  const handClick = (i) => {
    if (squires[i] || calculateWinner(squires)) {
      return;
    }

    let nextSquares = [...squires];
    if (isNext) {
      nextSquares[i] = "O";
    } else {
      nextSquares[i] = "X";
    }
    onPlay(nextSquares);
  };

  return (
    <div>
      <p>{status}</p>
      <div className="grid grid-cols-3">
        {squires?.map((value, i) => (
          <button
            key={i}
            onClick={() => handClick(i)}
            className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg"
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
}
