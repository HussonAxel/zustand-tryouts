// This is the shape that notify expects
export interface ToasterStyle {
  className: string;
}

export interface NotifyTypes {
  toastSentence: string;
  toasterStyle: ToasterStyle;
}

export interface ToasterNotificationTypes {
  toasterButtonName: string;
  toastSentence: string;
  toasterStyle: ToasterStyle;
  action(): void;
}
