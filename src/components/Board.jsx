export default function Board({ squires }) {
  console.log(squires);
  const handClick = (value) => {
    console.log(value);
  };
  return (
    <div className="grid grid-cols-3">
      {squires.map((value, i) => (
        <button
          key={i}
          onClick={() => handClick(i)}
          className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg"
        >
          {value}
        </button>
      ))}
    </div>
  );
}
