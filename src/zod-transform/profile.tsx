import { User } from './user';

export const Profile = ({ user }: { user: User }) => {
  return (
    <p>
      Hello, {user.firstName} {user.lastName} 👋
    </p>
  );
};
