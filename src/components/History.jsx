export default function History({ jumpTo, history }) {
  const moves = history.map((_val, idx) => {
    let description;
    if (idx > 0) {
      description = `Go to the move # ${idx}`;
    } else {
      description = `Go to start the game`;
    }
    return (
      <button className="block" onClick={() => jumpTo(idx)}>
        {description}
      </button>
    );
  });

  return <div>{moves}</div>;
}
