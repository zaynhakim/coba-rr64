import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Maaf, anda tidak dapat masuk ke rute ghaib</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
