import classnames from 'classnames';
import S from './Container.scss'

import type { FC } from 'react';
import type { ContainerProps } from './types';

const Container: FC<ContainerProps> = ({
  children,
  className,
}) => (
  <div className={classnames(S.root, className)}>
    {children}
  </div>
);

export default Container;
