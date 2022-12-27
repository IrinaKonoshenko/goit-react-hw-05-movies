import { useNavigate } from 'react-router-dom';

export function ButtonGoBack() {
  const navigate = useNavigate();

  return <button onClick={() => navigate(-1)}>go back</button>;
}
