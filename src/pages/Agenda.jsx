import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from 'firebase/firestore';

export default function Agenda() {
  const [agendas, setAgendas] = useState([]);
  const [dataEvento, setDataEvento] = useState('');
  const [titulo, setTitulo] = useState('');
  const [cidade, setCidade] = useState('');
  const [foco, setFoco] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const q = query(collection(db, 'agenda'), orderBy('data_evento', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const lista = [];
      snapshot.forEach((doc) => {
        lista.push({ id: doc.id, ...doc.data() });
      });
      setAgendas(lista);
      setIsLoading(false);
    }, (error) => {
      console.error("Erro ao buscar agenda:", error);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const salvarAgenda = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, 'agenda'), {
        data_evento: dataEvento,
        titulo,
        cidade,
        foco,
        timestamp: serverTimestamp()
      });
      setDataEvento(''); setTitulo(''); setCidade(''); setFoco('');
    } catch (error) {
      console.error(error);
      alert('Erro ao salvar nova agenda.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="header">
        <h2>Agenda de Rua</h2>
      </div>

      <div className="card" style={{marginBottom: '30px'}}>
        <h3 style={{marginBottom: '15px'}}>Cadastrar Nova Agenda</h3>
        <form onSubmit={salvarAgenda} style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
          <div style={{display: 'flex', gap: '15px', flexWrap: 'wrap'}}>
            <input required type="date" value={dataEvento} onChange={e => setDataEvento(e.target.value)} style={{flex: 1, minWidth: '150px', padding: '10px', backgroundColor: '#111', color: '#fff', border: '1px solid #444', borderRadius: '5px'}} />
            <input required type="text" placeholder="Título (Ex: Caminhada no Mercado)" value={titulo} onChange={e => setTitulo(e.target.value)} style={{flex: 2, minWidth: '200px', padding: '10px', backgroundColor: '#111', color: '#fff', border: '1px solid #444', borderRadius: '5px'}} />
            <input required type="text" placeholder="Cidade" value={cidade} onChange={e => setCidade(e.target.value)} style={{flex: 1, minWidth: '150px', padding: '10px', backgroundColor: '#111', color: '#fff', border: '1px solid #444', borderRadius: '5px'}} />
          </div>
          <input required type="text" placeholder="Foco da Gravação (Ex: Entrevistar feirantes e focar no tema emprego)" value={foco} onChange={e => setFoco(e.target.value)} style={{padding: '10px', backgroundColor: '#111', color: '#fff', border: '1px solid #444', borderRadius: '5px'}} />
          
          <button type="submit" className="primary" disabled={isSubmitting} style={{alignSelf: 'flex-start', padding: '10px 20px'}}>
            {isSubmitting ? 'Salvando...' : 'Salvar Nova Agenda'}
          </button>
        </form>
      </div>

      <div className="card">
        <h3 style={{color: 'var(--primary)', marginBottom: '10px'}}>Rastreador Oficial do Candidato</h3>
        <p style={{color: 'var(--text-muted)', fontSize: '14px', marginBottom: '20px'}}>
          Consulte aqui onde o candidato está hoje para direcionar a equipe de fotografia e vídeo.
        </p>

        {isLoading ? (
          <p style={{color: 'var(--text-muted)'}}>Carregando agenda do Firebase...</p>
        ) : agendas.length === 0 ? (
          <p style={{color: 'var(--text-muted)'}}>Nenhum evento agendado ainda.</p>
        ) : (
          <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            {agendas.map((ag, idx) => (
              <div key={idx} style={{borderLeft: '2px solid var(--primary)', paddingLeft: '15px'}}>
                <span style={{color: 'var(--primary)', fontSize: '12px', fontWeight: 'bold'}}>DATA: {ag.data_evento}</span>
                <h4 style={{color: 'var(--text-light)', margin: '5px 0'}}>{ag.titulo} - {ag.cidade}</h4>
                <p style={{color: 'var(--text-muted)', fontSize: '14px'}}><strong>Foco da Equipe:</strong> {ag.foco}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
