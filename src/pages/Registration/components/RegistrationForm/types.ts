import { User } from '@data/actions/core/types';

export interface RegistrationFormProps {
  createUser: (item: User) => Promise<void>;
}
