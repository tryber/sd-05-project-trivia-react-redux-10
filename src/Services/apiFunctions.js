const tokenUrl = 'https://opentdb.com/api_token.php?command=request';

export function tokenAPI() {
  const fetchAPI = fetch(tokenUrl).then((resolve) => resolve.json());
  return fetchAPI;
}
export function questionAPI(token) {
  const fetchAPI = fetch(
    `https://opentdb.com/api.php?amount=5&token=${token}`,
  ).then((resolve) => resolve.json());
  return fetchAPI;
}
