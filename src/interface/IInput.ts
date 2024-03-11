export interface IInputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  className?: string;
  onChange: (value: string) => void;
  onSearch?: () => void;
  isLoading?: boolean;
}
