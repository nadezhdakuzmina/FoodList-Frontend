import { FC } from 'react';

import Container from '@containers/Container';
import LoginForm from './components/LoginForm';

import S from './Login.scss';

import Logo from '@assets/images/logo.svg';
import StartText from '@components/StartText';

const Login: FC = () => {
  return (
    <Container className={S.root}>
      <Logo className={S.logo} />
      <div className={S.contentWrapper}>
        <StartText 
          title='Войдите или зарегистрируйтесь!' 
          text='Чтобы составлять удобный список покупок и отслеживать качество ваших лекарств и косметики'
        />
        <div className={S.additionForm}>
          <LoginForm />
        </div>
      </div>
    </Container>
  );
};

export default Login;
