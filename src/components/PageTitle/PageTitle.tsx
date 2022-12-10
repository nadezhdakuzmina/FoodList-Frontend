import S from './PageTitle.scss';

import type { PageTitleProps } from './types';
import type { FC } from 'react';

const PageTitle: FC<PageTitleProps> = ({
  children,
}) => (
  <h1 className={S.root}>{children}</h1>
);

export default PageTitle;
