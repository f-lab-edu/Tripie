'use client';
import Error from 'shared/components/Error';

export default function NotFoundPage() {
  return <Error code={404} message={"Oops, the page you're looking for doesn't exist."} />;
}
