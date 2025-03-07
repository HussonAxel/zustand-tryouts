import useStore from "../../../zustand/store";
import ToasterNotification from "../../toaster/toaster";

function IncreaseBearPopulation() {
  const increaseBearPopulation = useStore(
    (state) => state.increaseBearPopulation
  );
  return (
    <>
      <ToasterNotification
        toasterButtonName="Add a bear"
        toastSentence="A bear has been added!"
        action={increaseBearPopulation}
        toastStyles={{
          style: {
            padding: "4px",
            color: "#333",
          },
        }}
        toastIcon="✅🐻"
      />
    </>
  );
}

function LowerBearPopulation() {
  const lowerBearPopulation = useStore((state) => state.lowerBearPopulation);
  return (
    <>
      <ToasterNotification
        toasterButtonName="Remove a bear"
        toastSentence="A bear has been removed!"
        action={lowerBearPopulation}
        toastIcon="❌🐻"
      />
    </>
  );
}

function ResetBearPopulation() {
  const resetBearPopulation = useStore((state) => state.resetBearPopulation);
  return (
    <>
      <ToasterNotification
        toasterButtonName="Population has been reset"
        toastSentence="The bear population has been reset!"
        action={resetBearPopulation}
      />
    </>
  );
}

function BearCounter() {
  const bears = useStore((state) => state.bears);
  console.log(bears);
  return bears <= 0 ? (
    <h1>There are no bears around here...</h1>
  ) : bears > 1 ? (
    <h1>{bears} bears around here...</h1>
  ) : (
    <h1>Only {bears} bear around here...</h1>
  );
}

export {
  BearCounter,
  IncreaseBearPopulation,
  LowerBearPopulation,
  ResetBearPopulation,
};
