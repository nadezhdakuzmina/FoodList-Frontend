import { User } from '@data/actions/core/types';

export interface RegistrationFormProps {
  auth: (item: User) => Promise<void>;
}
