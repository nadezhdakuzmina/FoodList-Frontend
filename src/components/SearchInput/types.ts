import type { InputProps } from 'antd';

export interface SearchInputProps extends Omit<InputProps, 'onChange' | 'className'> {
  items: string[];
  value: string;
  inputClassname?: string;
  className?: string;
  onChange: (item: string) => void;
}
