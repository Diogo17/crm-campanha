import React, { useState, useEffect } from 'react';

export default function Agenda() {
  const [agendas, setAgendas] = useState([]);
  const [dataEvento, setDataEvento] = useState('');
  const [titulo, setTitulo] = useState('');
  const [cidade, setCidade] = useState('');
  const [foco, setFoco] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const GOOGLE_API_URL = "https://script.google.com/macros/s/AKfycbyqeJXlHxX-Juqay4J9JS_KmiMjGfRY1EiXruAu1JSwOizPLF7notxSL-tz9O8b02vAug/exec";

  useEffect(() => {
    // Busca as agendas via GET, passando sheet=Agenda
    fetch(`${GOOGLE_API_URL}?sheet=Agenda`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          // Ordenar pela data do evento (mais recente primeiro)
          setAgendas(data.reverse());
        }
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Erro ao buscar agenda:", err);
        setIsLoading(false);
      });
  }, []);

  const salvarAgenda = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const novaAgenda = {
      id: Date.now().toString(),
      data_evento: dataEvento,
      titulo,
      cidade,
      foco
    };

    try {
      await fetch(GOOGLE_API_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sheet: "Agenda",
          ...novaAgenda
        })
      });

      // Atualiza estado local imediatamente para refletir na tela
      setAgendas([novaAgenda, ...agendas]);
      
      // Limpar formulário
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
          <p style={{color: 'var(--text-muted)'}}>Carregando agenda do Google Drive...</p>
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
