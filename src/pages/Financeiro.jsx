import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from 'firebase/firestore';

export default function Financeiro() {
  const [lancamentos, setLancamentos] = useState([]);
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState('receita');

  useEffect(() => {
    const q = query(collection(db, 'financeiro'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const lista = [];
      snapshot.forEach((doc) => {
        lista.push({ id: doc.id, ...doc.data() });
      });
      setLancamentos(lista);
    });

    return () => unsubscribe();
  }, []);

  const salvar = async (e) => {
    e.preventDefault();
    if(!descricao || !valor) return;

    try {
      await addDoc(collection(db, 'financeiro'), {
        descricao,
        tipo,
        valor: parseFloat(valor),
        timestamp: serverTimestamp()
      });
      setDescricao(''); setValor('');
    } catch (error) {
      console.error(error);
      alert('Erro ao salvar no banco.');
    }
  };

  const total = lancamentos.reduce((acc, curr) => {
    return curr.tipo === 'receita' ? acc + (curr.valor || 0) : acc - (curr.valor || 0);
  }, 0);

  return (
    <div>
      <div className="header">
        <h2>Financeiro da Campanha (Tempo Real)</h2>
        <span className="badge" style={{backgroundColor: total >= 0 ? '#10B981' : '#EF4444'}}>
          Saldo: R$ {total.toFixed(2)}
        </span>
      </div>

      <div className="card" style={{marginBottom: '20px'}}>
        <h3 style={{marginBottom: '15px'}}>Novo Lançamento</h3>
        <form onSubmit={salvar} style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
          <input type="text" placeholder="Descrição (Ex: Doação Pix)" value={descricao} onChange={e => setDescricao(e.target.value)} style={{flex: 2, minWidth: '200px'}} />
          <input type="number" step="0.01" placeholder="Valor (R$)" value={valor} onChange={e => setValor(e.target.value)} style={{flex: 1, minWidth: '120px'}} />
          <select value={tipo} onChange={e => setTipo(e.target.value)} style={{flex: 1, minWidth: '120px'}}>
            <option value="receita">Receita (+)</option>
            <option value="despesa">Despesa (-)</option>
          </select>
          <button type="submit" className="primary">Lançar</button>
        </form>
      </div>

      <div className="card">
        <table style={{width: '100%', textAlign: 'left', borderCollapse: 'collapse'}}>
          <thead>
            <tr style={{borderBottom: '1px solid #333'}}>
              <th style={{padding: '10px 0'}}>Descrição</th>
              <th style={{padding: '10px 0'}}>Tipo</th>
              <th style={{padding: '10px 0'}}>Valor</th>
            </tr>
          </thead>
          <tbody>
            {lancamentos.map((lan, idx) => (
              <tr key={idx} style={{borderBottom: '1px solid #222'}}>
                <td style={{padding: '10px 0', color: 'var(--text-light)'}}>{lan.descricao}</td>
                <td style={{padding: '10px 0', color: lan.tipo === 'receita' ? '#10B981' : '#EF4444'}}>
                  {lan.tipo.toUpperCase()}
                </td>
                <td style={{padding: '10px 0'}}>R$ {lan.valor?.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {lancamentos.length === 0 && <p style={{textAlign: 'center', marginTop: '20px', color: 'var(--text-muted)'}}>Nenhum lançamento registrado.</p>}
      </div>
    </div>
  );
}
