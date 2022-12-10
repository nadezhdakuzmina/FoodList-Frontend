import S from './StartText.scss';

import type { StartTextProps } from './types';
import type { FC } from 'react';

const StartText: FC<StartTextProps> = ({
  title, text
}) => (
  <div className={S.root}>
    <h1 className={S.title}>{title}</h1>
    <h2 className={S.text}>{text}</h2>
  </div>
);

export default StartText;
