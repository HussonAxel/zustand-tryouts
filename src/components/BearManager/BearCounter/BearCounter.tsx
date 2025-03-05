import useStore from "../../../zustand/store";

function IncreaseBearPopulation() {
  const increaseBearPopulation = useStore(
    (state) => state.increaseBearPopulation
  );
  return <button onClick={increaseBearPopulation}>one up</button>;
}

function LowerBearPopulation() {
  const lowerBearPopulation = useStore((state) => state.lowerBearPopulation);
  return <button onClick={lowerBearPopulation}> one down</button>;
}

function ResetBearPopulation() {
  const resetBearPopulation = useStore((state) => state.resetBearPopulation);
  return <button onClick={resetBearPopulation}>reset all</button>;
}

function BearCounter() {
  const bears = useStore((state) => state.bears);
  console.log(bears);
  return bears <= 0 ? (
    <h1>There are no bears around here...</h1>
  ) : (
    <h1>{bears} around here...</h1>
  );
}


export {
  BearCounter,
  IncreaseBearPopulation,
  LowerBearPopulation,
  ResetBearPopulation,
};
