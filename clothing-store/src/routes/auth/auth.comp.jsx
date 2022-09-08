import { AuthContainer } from './auth.styles';

import SignUpForm from '../../components/sign-up-form/sign-up-form.comp';
import SignInForm from '../../components/sign-in-form/sign-in-form.comp';

const Auth = () => {
  // useEffect(() => {
  //   (async function getGoogleRedirectRes() {
  //     const response = await getRedirectResult(auth);

  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   })();
  // }, []);

  return (
    <AuthContainer>
      <SignInForm />
      <SignUpForm />
    </AuthContainer>
  );
};

export default Auth;
