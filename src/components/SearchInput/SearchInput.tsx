import classnames from 'classnames';
import { useCallback, useMemo, useState } from 'react';

import { Input } from 'antd';

import S from './SearchInput.scss';

import type { ChangeEvent, FC } from 'react';
import type { SearchInputProps } from './types';

const ON_BLUR_DELAY = 500;

const SearchInput: FC<SearchInputProps> = ({
  onChange,
  items,
  value,
  inputClassname,
  className,
  ...props
}) => {
  const [isFocused, setFocus] = useState(false);
  const [inputValue, setInputValue] = useState<string>();

  const handleOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onChange(event.target.value);
  }, [onChange]);

  const onSelect = useCallback((newValue: string) => {
    setInputValue(null);
    onChange(newValue);
  }, []);

  const onFocus = useCallback(() => setFocus(true), []);

  const onBlur = useCallback(
    () => setTimeout(() => setFocus(false), ON_BLUR_DELAY),
    []
  );

  const filteredItems = useMemo<string[] | null>(() => (
    inputValue?.length
      ? items.filter(item => item.includes(inputValue))
      : null
  ), [items, inputValue]);

  return (
    <div className={classnames(S.root, className)}>
      <Input
        {...props}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={handleOnChange}
        className={inputClassname}
        value={inputValue || value}
      />
      {filteredItems && isFocused && (
        <div className={S.list}>
          {filteredItems.map(item => (
            <div
              key={item}
              className={S.listItem}
              onClick={() => onSelect(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  )
};

export default SearchInput;
