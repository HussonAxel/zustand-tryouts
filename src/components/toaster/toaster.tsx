import toast, { Toaster } from "react-hot-toast";
import { NotifyTypes, ToasterNotificationTypes } from "./toaster.types";



const notify = ({ toastSentence, toasterStyle }: NotifyTypes) =>
  // toast(toastSentence, {
  //   icon: "🐻",
  //   className: toasterStyle.className,
  toast.custom(
      <div className={`bg-red p-4 rounded-md shadow-md ${toasterStyle.className}`}>
        <h1 className="text-red">{toastSentence}</h1>
      </div>);


export default function ToasterNotification({
  toasterButtonName,
  toastSentence,
  toasterStyle,
  action,
}: ToasterNotificationTypes) {
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