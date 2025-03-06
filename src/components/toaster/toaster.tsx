import toast, { Toaster } from "react-hot-toast";
import { toasterNotificationTypes } from "./toaster.types";



const notify = ({toastSentence}: { toastSentence: string }) =>
  toast(toastSentence, {
    icon: "🐻",
  });


export default function ToasterNotification({ toasterButtonName, toastSentence, action}: toasterNotificationTypes) {

  const handleAction = () => {
    action();
    notify({toastSentence});
  };
  return (
    <div>
      <button onClick={handleAction}>{toasterButtonName}</button>
      <Toaster />
    </div>
  );
}