const tokenUrl = 'https://opentdb.com/api_token.php?command=request';

export function tokenAPI() {
  const fetchAPI = fetch(tokenUrl).then((resolve) => resolve.json());
  return fetchAPI;
}
export function questionAPI(token, configs) {
  const { nQuestoes, cat, dificuldade, tipo, encode } = configs;

  console.log('CONFIGURACOES', configs);
  console.log('N QUESTOES', cat);
  let url = `https://opentdb.com/api.php?amount=${nQuestoes}${(cat !== 'any')? `&category=${cat}`:''}${(dificuldade !== 'any')? `&difficulty=${dificuldade}`:''}${(tipo !== 'any')? `&type=${tipo}`:''}${(encode !== 'default')? `&category=${encode}`:''}&token=${token}`
    console.log(url)
  

  const fetchAPI = fetch(url).then((resolve) => resolve.json());
  return fetchAPI;
}
