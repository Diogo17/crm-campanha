import React, { useState, useEffect } from 'react';

export default function Apoiadores() {
  const [apoiadores, setApoiadores] = useState([]);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cidade, setCidade] = useState('');

  useEffect(() => {
    const data = localStorage.getItem('crm_apoiadores');
    if (data) setApoiadores(JSON.parse(data));
  }, []);

  const salvar = async (e) => {
    e.preventDefault();
    const novo = { id: Date.now(), nome, telefone, cidade, lideranca: 'N/A' };
    const novaLista = [...apoiadores, novo];
    setApoiadores(novaLista);
    localStorage.setItem('crm_apoiadores', JSON.stringify(novaLista));
    
    setNome(''); setTelefone(''); setCidade('');

    // Integração silenciosa com Google Drive
    try {
      await fetch('https://script.google.com/macros/s/AKfycbz9ohASvWnTahf8muhtNSXQXiWiKpUXhJw9OLwFOEZuEP74djxFpdaagEqc8TgQ54Z-TQ/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sheet: "Apoiadores",
          id: novo.id,
          nome: novo.nome,
          telefone: novo.telefone,
          cidade: novo.cidade,
          lideranca: novo.lideranca
        })
      });
    } catch (err) {
      console.error("Erro ao salvar no Drive:", err);
    }
  };

  const deletar = (id) => {
    const novaLista = apoiadores.filter(a => a.id !== id);
    setApoiadores(novaLista);
    localStorage.setItem('crm_apoiadores', JSON.stringify(novaLista));
  };

  return (
    <div>
      <div className="header">
        <h2>Base de Apoiadores</h2>
      </div>

      <div className="card" style={{marginBottom: '30px'}}>
        <h3 style={{marginBottom: '15px'}}>Cadastrar Novo Apoiador</h3>
        <form onSubmit={salvar} style={{display: 'flex', gap: '15px', flexWrap: 'wrap'}}>
          <input required placeholder="Nome completo" value={nome} onChange={e => setNome(e.target.value)} style={{flex: 1, minWidth: '200px'}} />
          <input required placeholder="Telefone / WhatsApp" value={telefone} onChange={e => setTelefone(e.target.value)} style={{flex: 1, minWidth: '200px'}} />
          <input required placeholder="Cidade" value={cidade} onChange={e => setCidade(e.target.value)} style={{flex: 1, minWidth: '200px'}} />
          <button type="submit" className="primary">Salvar Apoiador</button>
        </form>
      </div>

      <div className="card">
        <h3>Lista de Apoiadores ({apoiadores.length})</h3>
        {apoiadores.length === 0 ? (
          <p style={{color: 'var(--text-muted)', marginTop: '10px'}}>Nenhum apoiador cadastrado ainda.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Telefone</th>
                <th>Cidade</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {apoiadores.map(a => (
                <tr key={a.id}>
                  <td>{a.nome}</td>
                  <td>{a.telefone}</td>
                  <td>{a.cidade}</td>
                  <td>
                    <button onClick={() => deletar(a.id)} style={{background: 'transparent', border: '1px solid var(--primary)', color: 'var(--primary)', padding: '5px 10px'}}>
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
