export interface NotifyTypes {
  toastSentence: string;
}

export interface ToastStyleTypes {
  className?: string;
  style?: {
    border?: string;
    padding?: string;
    color?: string;
    [key: string]: unknown;
  };
}

export interface ToasterNotificationTypes {
  toasterButtonName: string;
  toastSentence: string;
  action(): void;
  toastStyles?: ToastStyleTypes;
  toastIcon?: string;
}
