import Error from 'shared/components/Error';

export default async function NotFound() {
  return <Error code={404} message={"Oops, the page you're looking for doesn't exist."} />;
}
