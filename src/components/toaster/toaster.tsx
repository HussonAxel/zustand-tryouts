import toast, { Toaster } from "react-hot-toast";
import { ToasterNotificationTypes } from "./toaster.types";
import useSound from "use-sound";
import switchOn from "../../../src/assets/sounds/switch-on.mp3";

export default function ToasterNotification({
  toasterButtonName,
  toastSentence,
  action,
  toastStyles = {
    className: "text-2xl",
    style: {
      padding: "4px",
      color: "#333",
    },
  },
  toastIcon,
}: ToasterNotificationTypes) {
  const [play] = useSound(switchOn);
  const handleAction = () => {
    play();
    action();
    toast(
      () => (
        <span className="flex items-center justify-between gap-2">
          {toastSentence}
        </span>
      ),
      {
        className: toastStyles.className,
        style: toastStyles.style,
        icon: toastIcon,
      }
    );
  };

  return (
    <div>
      <button onClick={handleAction}>{toasterButtonName}</button>
      <Toaster gutter={24} />
    </div>
  );
}
