import React from 'react';

export default function Agenda() {
  return (
    <div>
      <div className="header">
        <h2>Agenda de Rua</h2>
      </div>

      <div className="card" style={{marginBottom: '20px'}}>
        <h3 style={{color: 'var(--primary)', marginBottom: '10px'}}>Rastreador Oficial do Candidato</h3>
        <p style={{color: 'var(--text-muted)', fontSize: '14px', marginBottom: '20px'}}>
          Consulte aqui onde o candidato está hoje para direcionar a equipe de fotografia e vídeo.
        </p>

        <div style={{borderLeft: '2px solid var(--primary)', paddingLeft: '15px', marginBottom: '20px'}}>
          <span style={{color: 'var(--primary)', fontSize: '12px', fontWeight: 'bold'}}>HOJE - 16/08</span>
          <h4 style={{color: 'var(--text-light)', margin: '5px 0'}}>Caminhada Mercado Central - Januária</h4>
          <p style={{color: 'var(--text-muted)', fontSize: '14px'}}>Foco: Ouvir feirantes e pequenos produtores. Equipe de vídeo deve focar no Gancho 1.</p>
        </div>

        <div style={{borderLeft: '2px solid #555', paddingLeft: '15px', marginBottom: '20px'}}>
          <span style={{color: '#888', fontSize: '12px', fontWeight: 'bold'}}>AMANHÃ - 17/08</span>
          <h4 style={{color: 'var(--text-light)', margin: '5px 0'}}>Entrevista Rádio Local - Pirapora</h4>
          <p style={{color: 'var(--text-muted)', fontSize: '14px'}}>Foco: Apresentar a Pauta de Geração de Emprego (ICMS). Gravar bastidores para Reels.</p>
        </div>
        
        <button className="primary">Nova Agenda (Admin)</button>
      </div>
    </div>
  );
}
