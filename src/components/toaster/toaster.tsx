import toast, { Toaster } from "react-hot-toast";
import { toasterNotificationTypes } from "./toaster.types";



const notify = ({toastSentence, toasterStyle}: { toastSentence: string; toasterStyle?: object }) =>
  toast(toastSentence, {
    icon: "🐻",
    style: {...toasterStyle},
  });


export default function ToasterNotification({ toasterButtonName, toastSentence, toasterStyle, action}: toasterNotificationTypes) {

  const handleAction = () => {
    action();
    notify({ toastSentence, toasterStyle });
  };
  return (
    <div>
      <button onClick={handleAction}>{toasterButtonName}</button>
      <Toaster />
    </div>
  );
}