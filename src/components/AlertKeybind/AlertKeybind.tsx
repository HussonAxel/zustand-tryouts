import useStore from "../../zustand/store";

export default function AlertKeybind() {
  let keyDownReset: string | null = null;
  const resetBearPopulation = useStore((state) => state.resetBearPopulation);
  const saveResetKey = () => {
    keyDownReset = prompt("please press a key : ");
    document.addEventListener("keydown", (event) => {
      if (event.key === keyDownReset) {
        console.log("a");
        resetBearPopulation();
      } else {
        console.log("Key does not match");
      }
    });
  };

  return <>{<button onClick={saveResetKey}>Save your reset key</button>}</>;
}
