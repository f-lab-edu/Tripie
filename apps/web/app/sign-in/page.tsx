import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';
import { providerMap, signIn } from '../../auth';
import OAuthButton from './_components/OAuthButton';

import { classNames } from 'wrapper';
import Style from './sign-in.module.scss';

const cx = classNames.bind(Style);

// https://authjs.dev/guides/pages/signin
// https://nextjs.org/docs/messages/sync-dynamic-apis
export default async function SignIn(props: Readonly<{ searchParams: { callbackUrl?: string } }>) {
  const { callbackUrl } = props.searchParams;
  return Object.values(providerMap).map(provider => (
    <form
      className={cx('form-wrap')}
      key={'item' + provider.name}
      action={async () => {
        'use server';
        try {
          await signIn(provider.id, {
            redirectTo: callbackUrl ?? '',
          });
        } catch (error) {
          // Signin can fail for a number of reasons, such as the user
          // not existing, or the user not having the correct role.
          // In some cases, you may want to redirect to a custom error
          if (error instanceof AuthError) {
            // return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`);
            return redirect(`/error?error=${(error as AuthError).type}`);
          }

          // Otherwise if a redirects happens Next.js can handle it
          // so you can just re-thrown the error and let Next.js handle it.
          // Docs:
          // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
          throw error;
        }
      }}
    >
      <OAuthButton provider={provider} name={provider.name.toUpperCase()} />
    </form>
  ));
}
