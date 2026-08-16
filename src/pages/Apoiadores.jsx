import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from 'firebase/firestore';

export default function Apoiadores() {
  const [apoiadores, setApoiadores] = useState([]);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cidade, setCidade] = useState('');

  useEffect(() => {
    // Busca em tempo real do Firebase
    const q = query(collection(db, 'apoiadores'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const lista = [];
      snapshot.forEach((doc) => {
        lista.push({ id: doc.id, ...doc.data() });
      });
      setApoiadores(lista);
    }, (error) => {
      console.error("Erro ao buscar apoiadores:", error);
    });

    return () => unsubscribe();
  }, []);

  const salvar = async (e) => {
    e.preventDefault();
    if(!nome || !telefone || !cidade) return;

    try {
      await addDoc(collection(db, 'apoiadores'), {
        nome,
        telefone,
        cidade,
        lideranca: 'Equipe Interna (CRM)',
        timestamp: serverTimestamp()
      });
      setNome(''); setTelefone(''); setCidade('');
    } catch (error) {
      console.error("Erro ao salvar:", error);
      alert('Falha ao salvar no banco de dados.');
    }
  };

  return (
    <div>
      <div className="header">
        <h2>Base de Apoiadores (Tempo Real)</h2>
        <span className="badge">{apoiadores.length} Registros</span>
      </div>

      <div className="card" style={{marginBottom: '20px'}}>
        <h3 style={{marginBottom: '15px'}}>Novo Apoiador Manual</h3>
        <form onSubmit={salvar} style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
          <input type="text" placeholder="Nome Completo" value={nome} onChange={e => setNome(e.target.value)} style={{flex: 1, minWidth: '200px'}} />
          <input type="text" placeholder="WhatsApp" value={telefone} onChange={e => setTelefone(e.target.value)} style={{flex: 1, minWidth: '150px'}} />
          <input type="text" placeholder="Cidade Base" value={cidade} onChange={e => setCidade(e.target.value)} style={{flex: 1, minWidth: '150px'}} />
          <button type="submit" className="primary">Salvar</button>
        </form>
      </div>

      <div className="card">
        <table style={{width: '100%', textAlign: 'left', borderCollapse: 'collapse'}}>
          <thead>
            <tr style={{borderBottom: '1px solid #333'}}>
              <th style={{padding: '10px 0'}}>Nome</th>
              <th style={{padding: '10px 0'}}>Cidade</th>
              <th style={{padding: '10px 0'}}>Contato</th>
              <th style={{padding: '10px 0'}}>Origem</th>
            </tr>
          </thead>
          <tbody>
            {apoiadores.map((ap, idx) => (
              <tr key={idx} style={{borderBottom: '1px solid #222'}}>
                <td style={{padding: '10px 0', color: 'var(--text-light)'}}>{ap.nome}</td>
                <td style={{padding: '10px 0'}}>{ap.cidade}</td>
                <td style={{padding: '10px 0'}}>{ap.telefone}</td>
                <td style={{padding: '10px 0'}}>
                  <span style={{fontSize: '12px', padding: '3px 8px', borderRadius: '10px', backgroundColor: ap.lideranca?.includes('Eu Apoio') ? '#10B98120' : '#444', color: ap.lideranca?.includes('Eu Apoio') ? '#10B981' : '#ccc'}}>
                    {ap.lideranca}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {apoiadores.length === 0 && <p style={{textAlign: 'center', marginTop: '20px', color: 'var(--text-muted)'}}>Nenhum apoiador registrado ainda.</p>}
      </div>
    </div>
  );
}
