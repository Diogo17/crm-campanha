import React, { useState, useEffect } from 'react';

export default function MapaVotos() {
  const [cidadesMap, setCidadesMap] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Metas fixas por cidade para calcular a porcentagem
  const metas = {
    "Januária": 15000,
    "Pirapora": 8000,
    "São Francisco": 5000,
    "Brasília de Minas": 4000,
    "Montes Claros": 10000,
    "Pintópolis": 2000,
    "Juvenília": 1500
  };

  const GOOGLE_API_URL = "https://script.google.com/macros/s/AKfycbyqeJXlHxX-Juqay4J9JS_KmiMjGfRY1EiXruAu1JSwOizPLF7notxSL-tz9O8b02vAug/exec";

  useEffect(() => {
    fetch(GOOGLE_API_URL)
      .then(res => res.json())
      .then(data => {
        // Agrupar apoiadores por cidade
        const agrupamento = {};
        
        if (Array.isArray(data)) {
          data.forEach(apoiador => {
            const nomeCidade = apoiador.cidade ? apoiador.cidade.trim() : "Desconhecida";
            if (!agrupamento[nomeCidade]) {
              agrupamento[nomeCidade] = { nome: nomeCidade, atual: 0, meta: metas[nomeCidade] || 3000, apoiadores: [] };
            }
            agrupamento[nomeCidade].atual += 1;
            agrupamento[nomeCidade].apoiadores.push(apoiador);
          });
        }
        
        setCidadesMap(agrupamento);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Erro ao buscar dados do mapa:", err);
        setIsLoading(false);
      });
  }, []);

  const cidades = Object.values(cidadesMap).sort((a, b) => b.atual - a.atual);

  return (
    <div>
      <div className="header">
        <h2>Mapa de Votos (Geomarketing)</h2>
      </div>

      <div className="card" style={{marginBottom: '20px'}}>
        <h3 style={{color: 'var(--primary)', marginBottom: '10px'}}>Metas Regionais</h3>
        <p style={{color: 'var(--text-muted)', fontSize: '14px', marginBottom: '20px'}}>
          Acompanhamento das metas de apoiadores e votos projetados por município do Norte de Minas.
        </p>

        <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
          {isLoading ? (
            <p style={{color: 'var(--text-muted)'}}>Sincronizando banco de dados (Google Drive)...</p>
          ) : cidades.length === 0 ? (
            <p style={{color: 'var(--text-muted)'}}>Nenhum apoiador registrado ainda. Compartilhe o link /eu-apoio!</p>
          ) : (
            cidades.map((c, index) => {
              const porcentagem = Math.min(100, Math.round((c.atual / c.meta) * 100));
              return (
                <div key={index} style={{backgroundColor: 'var(--bg-dark)', padding: '15px', borderRadius: '6px'}}>
                  <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                    <strong style={{color: 'var(--text-light)'}}>{c.nome}</strong>
                    <span style={{color: 'var(--text-muted)', fontSize: '12px'}}>{c.atual} cadastros (Meta: {c.meta})</span>
                  </div>
                  <div style={{width: '100%', height: '10px', backgroundColor: '#333', borderRadius: '5px', overflow: 'hidden'}}>
                    <div style={{width: `${porcentagem}%`, height: '100%', backgroundColor: 'var(--primary)'}}></div>
                  </div>
                  
                  {/* Lista de apoiadores recentes da cidade */}
                  <div style={{marginTop: '10px', paddingTop: '10px', borderTop: '1px solid #333'}}>
                    <p style={{fontSize: '11px', color: '#666', textTransform: 'uppercase', marginBottom: '5px'}}>Apoiadores Recentes:</p>
                    <div style={{display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
                      {c.apoiadores.slice(-5).reverse().map((ap, idx) => (
                        <span key={idx} style={{backgroundColor: '#222', padding: '3px 8px', borderRadius: '12px', fontSize: '12px', color: '#999'}}>
                          {ap.nome.split(' ')[0]}
                        </span>
                      ))}
                      {c.apoiadores.length > 5 && <span style={{fontSize: '12px', color: '#666'}}>+{c.apoiadores.length - 5}</span>}
                    </div>
                  </div>
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  );
}
