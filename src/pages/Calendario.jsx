import React from 'react';

export default function Calendario() {
  return (
    <div>
      <div className="header">
        <h2>Calendário de Sprint (60 Dias)</h2>
      </div>

      <div className="card" style={{marginBottom: '30px', borderLeft: '4px solid var(--primary)'}}>
        <h3 style={{color: 'var(--primary)', marginBottom: '10px'}}>Fase 1: Apresentação e Proximidade (Dias 60 a 45)</h3>
        <p style={{color: 'var(--text-light)', marginBottom: '10px'}}>
          <strong>Meta:</strong> Mostrar que Hudson não é um político tradicional, mas alguém do povo que cansou da politicagem.
        </p>
        <ul style={{color: 'var(--text-muted)', fontSize: '14px', paddingLeft: '20px', lineHeight: '1.8'}}>
          <li>Conteúdo Principal: Série "Quem é Hudson" (trajetória e raiz).</li>
          <li>Artes 1 a 4 (Lançamento, Força do Norte, Agro, Segurança).</li>
          <li>Ação de Rua: Caminhadas em Januária e região do Peruaçu (foco no olho no olho).</li>
        </ul>
      </div>

      <div className="card" style={{marginBottom: '30px', borderLeft: '4px solid #F59E0B'}}>
        <h3 style={{color: '#F59E0B', marginBottom: '10px'}}>Fase 2: A Dor e a Ferida (Dias 45 a 30)</h3>
        <p style={{color: 'var(--text-light)', marginBottom: '10px'}}>
          <strong>Meta:</strong> Mostrar profundo conhecimento dos problemas técnicos do Norte de Minas ("Humor Sério" na reclamação).
        </p>
        <ul style={{color: 'var(--text-muted)', fontSize: '14px', paddingLeft: '20px', lineHeight: '1.8'}}>
          <li>Conteúdo Principal: Artes 5 a 7 (Saúde, Educação, Emprego).</li>
          <li>Vídeos de denúncia estrutural mostrando dados oficiais (IDH, leitos SUS).</li>
          <li>Ação de Rua: Reuniões setoriais com produtores rurais e profissionais de saúde.</li>
        </ul>
      </div>

      <div className="card" style={{marginBottom: '30px', borderLeft: '4px solid #10B981'}}>
        <h3 style={{color: '#10B981', marginBottom: '10px'}}>Fase 3: A Solução e Comprovação (Dias 30 a 15)</h3>
        <p style={{color: 'var(--text-light)', marginBottom: '10px'}}>
          <strong>Meta:</strong> Gerar credibilidade, explicando didaticamente "o que um Deputado pode fazer" na prática.
        </p>
        <ul style={{color: 'var(--text-muted)', fontSize: '14px', paddingLeft: '20px', lineHeight: '1.8'}}>
          <li>Conteúdo Principal: Vídeos de depoimentos de terceiros confirmando o trabalho.</li>
          <li>Cards comparativos: Promessa Política x Proposta do Hudson (Emendas/LOA).</li>
          <li>Ação de Rua: Carreata regional (A Rota do Norte).</li>
        </ul>
      </div>

      <div className="card" style={{marginBottom: '30px', borderLeft: '4px solid #3B82F6'}}>
        <h3 style={{color: '#3B82F6', marginBottom: '10px'}}>Fase 4: O Voto Útil e Urna (Dias 15 a 0)</h3>
        <p style={{color: 'var(--text-light)', marginBottom: '10px'}}>
          <strong>Meta:</strong> Fixação mental absurda do número 33753 e combate direto ao voto nulo/branco.
        </p>
        <ul style={{color: 'var(--text-muted)', fontSize: '14px', paddingLeft: '20px', lineHeight: '1.8'}}>
          <li>Conteúdo Principal: Tutoriais de "Como votar 33753 na urna".</li>
          <li>Multirão no WhatsApp do Gabinete Digital com "colas eleitorais digitais".</li>
          <li>Ação de Rua: Blitz final nos semáforos, adesivaço e Hudson 24h na rua.</li>
        </ul>
      </div>
    </div>
  );
}
