// Camada de dados isolada para substituir o armazenamento local pelo Supabase depois.
const alerts = [
  { id: '1', local: 'Av. Norte', bairro: 'Encruzilhada', descricao: 'Água acumulada próximo ao viaduto.', risco: 'Médio', data: 'Hoje, 08:42' },
  { id: '2', local: 'Rua do Sol', bairro: 'Santo Antônio', descricao: 'Alagamento avançando para a calçada.', risco: 'Alto', data: 'Hoje, 07:18' },
  { id: '3', local: 'Av. Recife', bairro: 'Ipsep', descricao: 'Pista parcialmente bloqueada pela chuva.', risco: 'Baixo', data: 'Ontem, 19:30' },
];

export const api = {
  async getAlerts() { return [...alerts]; },
  async createAlert(alert) { return { ...alert, id: String(Date.now()), data: 'Agora' }; },
  async updateAlert(id, changes) { return { id, ...changes }; },
  async deleteAlert(id) { return id; },
  async getWeather() {
    return { temperature: '27°', humidity: '82%', rain: '60%', wind: '14 km/h' };
  },
  async lookupCep(cep) {
    const response = await fetch(`https://viacep.com.br/ws/${cep.replace(/\\D/g, '')}/json/`);
    if (!response.ok) throw new Error('Não foi possível consultar o CEP.');
    const data = await response.json();
    if (data.erro) throw new Error('CEP não encontrado.');
    return data;
  },
};
