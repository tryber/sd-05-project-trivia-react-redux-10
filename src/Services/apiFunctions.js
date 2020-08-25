const tokenUrl = 'https://opentdb.com/api_token.php?command=request';

export function tokenAPI() {
  const fetchAPI = fetch(tokenUrl).then((resolve) => resolve.json());
  return fetchAPI;
}
export function questionAPI(token, configs) {
  const { nQuestoes, cat, dificuldade, tipo, encode } = configs

  console.log("CONFIGURACOES", configs)
  console.log("N QUESTOES", nQuestoes)


  if(cat === 'any' && dificuldade === 'any' && tipo === 'any' && encode === 'default') {
    const fetchAPI = fetch(
      `https://opentdb.com/api.php?amount=${nQuestoes}&token=${token}`,
    ).then((resolve) => resolve.json());
    return fetchAPI;
  }
}
