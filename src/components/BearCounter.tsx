import useStore from "../zustand/store";

function BearCounter() {
  const bears = useStore((state) => state.bears);
  return <h1>{bears} around here...</h1>;
}

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

export {
  BearCounter,
  IncreaseBearPopulation,
  LowerBearPopulation,
  ResetBearPopulation,
};
