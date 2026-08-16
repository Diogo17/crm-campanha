import React, { useState, useEffect } from 'react';

export default function Financeiro() {
  const [transacoes, setTransacoes] = useState([]);
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState('despesa'); // receita ou despesa

  useEffect(() => {
    const data = localStorage.getItem('crm_financeiro');
    if (data) setTransacoes(JSON.parse(data));
  }, []);

  const salvar = (e) => {
    e.preventDefault();
    const nova = { id: Date.now(), descricao, valor: parseFloat(valor), tipo };
    const novaLista = [...transacoes, nova];
    setTransacoes(novaLista);
    localStorage.setItem('crm_financeiro', JSON.stringify(novaLista));
    setDescricao(''); setValor('');
  };

  const deletar = (id) => {
    const novaLista = transacoes.filter(t => t.id !== id);
    setTransacoes(novaLista);
    localStorage.setItem('crm_financeiro', JSON.stringify(novaLista));
  };

  const totalReceitas = transacoes.filter(t => t.tipo === 'receita').reduce((acc, t) => acc + t.valor, 0);
  const totalDespesas = transacoes.filter(t => t.tipo === 'despesa').reduce((acc, t) => acc + t.valor, 0);
  const saldo = totalReceitas - totalDespesas;

  return (
    <div>
      <div className="header">
        <h2>Controle Financeiro</h2>
      </div>

      <div className="card-grid">
        <div className="card">
          <h3>Total Arrecadado (Receitas)</h3>
          <div className="value" style={{color: 'var(--success)'}}>R$ {totalReceitas.toFixed(2)}</div>
        </div>
        <div className="card">
          <h3>Total Gasto (Despesas)</h3>
          <div className="value" style={{color: 'var(--primary)'}}>R$ {totalDespesas.toFixed(2)}</div>
        </div>
        <div className="card">
          <h3>Saldo Atual</h3>
          <div className="value">R$ {saldo.toFixed(2)}</div>
        </div>
      </div>

      <div className="card" style={{marginBottom: '30px'}}>
        <h3 style={{marginBottom: '15px'}}>Lançar Nova Transação</h3>
        <form onSubmit={salvar} style={{display: 'flex', gap: '15px', flexWrap: 'wrap'}}>
          <input required placeholder="Descrição (Ex: Combustível, Gráfica)" value={descricao} onChange={e => setDescricao(e.target.value)} style={{flex: 2, minWidth: '200px'}} />
          <input required type="number" step="0.01" placeholder="Valor (R$)" value={valor} onChange={e => setValor(e.target.value)} style={{flex: 1, minWidth: '150px'}} />
          <select value={tipo} onChange={e => setTipo(e.target.value)} style={{flex: 1, minWidth: '150px'}}>
            <option value="despesa">Despesa (Gasto)</option>
            <option value="receita">Receita (Doação)</option>
          </select>
          <button type="submit" className="primary">Salvar Lançamento</button>
        </form>
      </div>

      <div className="card">
        <h3>Extrato ({transacoes.length})</h3>
        {transacoes.length === 0 ? (
          <p style={{color: 'var(--text-muted)', marginTop: '10px'}}>Nenhuma transação lançada ainda.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Descrição</th>
                <th>Tipo</th>
                <th>Valor</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {transacoes.map(t => (
                <tr key={t.id}>
                  <td>{t.descricao}</td>
                  <td style={{color: t.tipo === 'receita' ? 'var(--success)' : 'var(--primary)', fontWeight: 'bold', textTransform: 'capitalize'}}>{t.tipo}</td>
                  <td>R$ {t.valor.toFixed(2)}</td>
                  <td>
                    <button onClick={() => deletar(t.id)} style={{background: 'transparent', border: '1px solid var(--border)', color: 'var(--text-muted)', padding: '5px 10px'}}>
                      Remover
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
