import { FC } from 'react';

import Logo from '@assets/images/logo_black.svg';
import Container from '@containers/Container';
import RegistrationForm from './components/RegistrationForm';

import S from './Registration.scss';

import StartText from '@components/StartText';

const Registration: FC = () => {
  return (
    <Container className={S.root}>
      <Logo className={S.logo} />
      <div className={S.contentWrapper}>
        <StartText 
          title='Войдите или зарегистрируйтесь!' 
          text='Чтобы составлять удобный список покупок и отслеживать качество продуктов в вашем холодильнике'
        />
        <div className={S.additionForm}>
          <RegistrationForm />
        </div>
      </div>
    </Container>
  );
};

export default Registration;
