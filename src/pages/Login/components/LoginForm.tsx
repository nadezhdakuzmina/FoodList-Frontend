import { connect } from 'react-redux';

import { ChangeEvent, useCallback, useState } from 'react';
import { Input, Button } from 'antd';

import { authUserResolver } from '@data/actions/core/resolvers';

import S from './LoginForm.scss';

import type { FC } from 'react';
import type { RegistrationFormProps } from './types';
import type { User } from '@data/actions/core/types';
import { Link } from 'react-router-dom';

const mapDispatchToProps = (dispatch) => ({
  auth: (item: User) => dispatch(authUserResolver(item)),
});

const LoginForm: FC<RegistrationFormProps> = ({ auth }) => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [hasSent, setSent] = useState<boolean>(false);

  const onSetEmail = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }, []);

  const onSetPassword = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }, []);

  const mailInputStatus = !email && hasSent ? 'error' : undefined;
  const passwordStatus = !password && hasSent ? 'error' : undefined;

  const onSubmit = useCallback(() => {
    setSent(true);

    if (!email || !password) {
      return;
    }

    auth({
      username: email,
      email,
      password,
    });
  }, [email, password, auth]);

  return (
    <div className={S.root}>
      <Input
        status={mailInputStatus}
        value={email}
        className={S.input}
        placeholder="Введите почту или логин "
        onChange={onSetEmail}
        size="large"
        allowClear
      />
      <Input
        status={passwordStatus}
        value={password}
        className={S.input}
        placeholder="Введите пароль"
        onChange={onSetPassword}
        size="large"
        allowClear
      />
      <Button
        onClick={onSubmit}
        className={S.button}
        type="primary"
      >
        Войти
      </Button>
      <div className={S.text}>
        Нет аккаунта?
        <Link to='/registration'>
          <div className={S.link}>
            Зарегистрируйтесь
          </div>
        </Link>
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(LoginForm);
