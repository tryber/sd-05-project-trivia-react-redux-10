const tokenUrl = 'https://opentdb.com/api_token.php?command=request';

export default function tokenAPI() {
  const fetchAPI = fetch(tokenUrl).then((resolve) => resolve.json());
  return fetchAPI;
}
