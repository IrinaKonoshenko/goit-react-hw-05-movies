import { Link, useLocation } from 'react-router-dom';

export function ButtonGoBack() {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/products';

  return <Link to={backLinkHref}>Go back </Link>;
}
