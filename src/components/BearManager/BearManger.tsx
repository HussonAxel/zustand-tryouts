import {
  BearCounter,
  IncreaseBearPopulation,
  LowerBearPopulation,
  ResetBearPopulation,
} from "./BearCounter/BearCounter";

export default function BearManager() {
    return (
      <>
        <BearCounter />
        <IncreaseBearPopulation />
        <LowerBearPopulation />
        <ResetBearPopulation />
      </>
    );
}