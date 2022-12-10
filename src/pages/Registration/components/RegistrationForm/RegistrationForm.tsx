import { connect } from 'react-redux';

import { ChangeEvent, useCallback, useState } from 'react';
import { Input, Button } from 'antd';

import { createUserResolver } from '@data/actions/core/resolvers';

import S from './RegistrationForm.scss';

import type { FC } from 'react';
import type { RegistrationFormProps } from './types';
import type { User } from '@data/actions/core/types';
import { Link } from 'react-router-dom';

const mapDispatchToProps = (dispatch) => ({
  createUser: (item: User) => dispatch(createUserResolver(item)),
});

const RegistrationForm: FC<RegistrationFormProps> = ({ createUser }) => {
  const [username, setUsername] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [hasSent, setSent] = useState<boolean>(false);

  const onSetUsername = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  }, []);

  const onSetEmail = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }, []);

  const onSetPassword = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }, []);

  const loginInputStatus = !username && hasSent ? 'error' : undefined;
  const mailInputStatus = !email && hasSent ? 'error' : undefined;
  const passwordStatus = !password && hasSent ? 'error' : undefined;

  const onSubmit = useCallback(() => {
    setSent(true);

    if (!username || !email || !password) {
      return;
    }

    createUser({
      username,
      email,
      password,
    });
  }, [username, email, password, createUser]);

  return (
    <div className={S.root}>
      <Input
        status={loginInputStatus}
        value={username}
        className={S.input}
        placeholder="Придумайте логин"
        onChange={onSetUsername}
        size="large"
        allowClear
      />
      <Input
        status={mailInputStatus}
        value={email}
        className={S.input}
        placeholder="Введите почту "
        onChange={onSetEmail}
        size="large"
        allowClear
      />
      <Input
        status={passwordStatus}
        value={password}
        className={S.input}
        placeholder="Придумайте пароль"
        onChange={onSetPassword}
        size="large"
        allowClear
      />
      <Button
        onClick={onSubmit}
        className={S.button}
        type="primary"
      >
        Зарегистрироваться
      </Button>
      <div className={S.text}>
        <div>
        Есть аккаунт? 
        </div>
        <Link to='/'>
          <div className={S.link}>
            Войдите
          </div>
        </Link>
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(RegistrationForm);
