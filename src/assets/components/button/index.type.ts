export interface UIModifiers {
  color: string;
  width: string;
  backgroundColor: string;
  height: string;
  borderWidth: string;
  borderRadius: string;
  border: string;
  padding: string;
  flex: string;
  children?: string;
}

export interface ButtonProps {
  title: string;
  action: () => void;
}
