import React, { useState } from 'react';

export default function MapaVotos() {
  const [cidades, setCidades] = useState([
    { id: 1, nome: "Januária", meta: 15000, atual: 1200 },
    { id: 2, nome: "Pirapora", meta: 8000, atual: 450 },
    { id: 3, nome: "São Francisco", meta: 5000, atual: 300 },
    { id: 4, nome: "Brasília de Minas", meta: 4000, atual: 150 },
    { id: 5, nome: "Montes Claros", meta: 10000, atual: 800 }
  ]);

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
          {cidades.map(c => {
            const porcentagem = Math.min(100, Math.round((c.atual / c.meta) * 100));
            return (
              <div key={c.id} style={{backgroundColor: 'var(--bg-dark)', padding: '15px', borderRadius: '6px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                  <strong style={{color: 'var(--text-light)'}}>{c.nome}</strong>
                  <span style={{color: 'var(--text-muted)', fontSize: '12px'}}>{c.atual} / {c.meta} votos ({porcentagem}%)</span>
                </div>
                <div style={{width: '100%', height: '10px', backgroundColor: '#333', borderRadius: '5px', overflow: 'hidden'}}>
                  <div style={{width: `${porcentagem}%`, height: '100%', backgroundColor: 'var(--primary)'}}></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
