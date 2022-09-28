import { useRouter } from 'next/router';
// Auth0
import { useUser } from '@auth0/nextjs-auth0';
// Styled
import { StyledProfile } from '../styles/StyledUser';
// Icons
import { FaUserCircle } from 'react-icons/fa';

export default function User() {
  const router = useRouter();
  const { user } = useUser();

  if (!user) {
    return (
      <StyledProfile onClick={() => router.push('/api/auth/login')}>
        <FaUserCircle />
        <h3>Profile</h3>
      </StyledProfile>
    );
  }
  return (
    <StyledProfile onClick={() => router.push('/profile')}>
      <img src={user.picture} alt={user.name} />
      <h3>{user.name}</h3>
    </StyledProfile>
  );
}
