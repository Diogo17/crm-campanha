import React from 'react';

export default function Juridico() {
  return (
    <div>
      <div className="header">
        <h2>Jurídico e Compliance (Regras TSE)</h2>
      </div>

      <div className="card-grid">
        <div className="card" style={{border: '1px solid var(--primary)'}}>
          <h3 style={{color: 'var(--primary)'}}>O que É OBRIGATÓRIO</h3>
          <ul style={{color: 'var(--text-muted)', fontSize: '14px', paddingLeft: '20px', marginTop: '10px', lineHeight: '1.6'}}>
            <li>Toda arte estática ou vídeo DEVE conter o CNPJ da campanha: <strong>68.608.100/0001-39</strong>.</li>
            <li>Todo pagamento a fornecedor (fotógrafo, editor) DEVE sair da conta oficial do partido, nunca da conta pessoal do Hudson.</li>
            <li>No impulsionamento de internet, o CNPJ de quem pagou deve ficar visível na propaganda.</li>
          </ul>
        </div>

        <div className="card" style={{border: '1px solid #EF4444'}}>
          <h3 style={{color: '#EF4444'}}>O que é PROIBIDO (Risco de Cassação)</h3>
          <ul style={{color: 'var(--text-muted)', fontSize: '14px', paddingLeft: '20px', marginTop: '10px', lineHeight: '1.6'}}>
            <li>Uso de Deepfakes (Inteligência Artificial que altera voz ou rosto).</li>
            <li>Disparo em massa no WhatsApp utilizando ferramentas de automação não registradas.</li>
            <li>Fazer pedido explícito de voto dentro de igrejas, escolas públicas ou órgãos do governo.</li>
            <li>Entregar brindes (camisetas, chaveiros, bonés, cestas básicas) em troca de voto.</li>
          </ul>
        </div>
      </div>

      <div className="header" style={{marginTop: '40px'}}>
        <h2>Calendário Eleitoral 2026 (Prazos Oficiais TSE)</h2>
      </div>

      <div className="card">
        <p style={{color: 'var(--text-muted)', fontSize: '14px', marginBottom: '20px'}}>
          Prazos extraídos oficialmente do Senado Federal para que a equipe não perca nenhuma data crítica.
        </p>

        <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
          
          <div style={{borderLeft: '4px solid #28b463', paddingLeft: '15px', backgroundColor: '#111', padding: '15px', borderRadius: '0 8px 8px 0'}}>
            <h4 style={{color: '#28b463', margin: '0 0 5px 0'}}>05 de Março a 03 de Abril</h4>
            <p style={{color: 'var(--text-light)', fontSize: '15px', margin: '0'}}>Janela Partidária</p>
            <p style={{color: 'var(--text-muted)', fontSize: '13px', margin: '5px 0 0 0'}}>Prazo final para confirmação de domicílio eleitoral e filiação (04 de Abril).</p>
          </div>

          <div style={{borderLeft: '4px solid #d4ac0d', paddingLeft: '15px', backgroundColor: '#111', padding: '15px', borderRadius: '0 8px 8px 0'}}>
            <h4 style={{color: '#d4ac0d', margin: '0 0 5px 0'}}>15 de Maio</h4>
            <p style={{color: 'var(--text-light)', fontSize: '15px', margin: '0'}}>Arrecadação Prévia (Vaquinha)</p>
            <p style={{color: 'var(--text-muted)', fontSize: '13px', margin: '5px 0 0 0'}}>Início da arrecadação de recursos por financiamento coletivo.</p>
          </div>

          <div style={{borderLeft: '4px solid #2e86c1', paddingLeft: '15px', backgroundColor: '#111', padding: '15px', borderRadius: '0 8px 8px 0'}}>
            <h4 style={{color: '#2e86c1', margin: '0 0 5px 0'}}>20 de Julho a 05 de Agosto</h4>
            <p style={{color: 'var(--text-light)', fontSize: '15px', margin: '0'}}>Convenções Partidárias</p>
            <p style={{color: 'var(--text-muted)', fontSize: '13px', margin: '5px 0 0 0'}}>Deliberação sobre coligações e escolha de candidatos.</p>
          </div>

          <div style={{borderLeft: '4px solid #e74c3c', paddingLeft: '15px', backgroundColor: '#111', padding: '15px', borderRadius: '0 8px 8px 0'}}>
            <h4 style={{color: '#e74c3c', margin: '0 0 5px 0'}}>15 de Agosto</h4>
            <p style={{color: 'var(--text-light)', fontSize: '15px', margin: '0'}}>Fim do Registro de Candidatura</p>
            <p style={{color: 'var(--text-muted)', fontSize: '13px', margin: '5px 0 0 0'}}>Prazo máximo para partidos, coligações e federações registrarem os candidatos no TSE.</p>
          </div>

          <div style={{borderLeft: '4px solid var(--primary)', paddingLeft: '15px', backgroundColor: '#111', padding: '15px', borderRadius: '0 8px 8px 0'}}>
            <h4 style={{color: 'var(--primary)', margin: '0 0 5px 0'}}>16 de Agosto</h4>
            <p style={{color: '#fff', fontSize: '16px', margin: '0', fontWeight: 'bold'}}>Início da Propaganda Eleitoral</p>
            <p style={{color: 'var(--text-muted)', fontSize: '13px', margin: '5px 0 0 0'}}>Início oficial da campanha nas ruas e na internet.</p>
          </div>

          <div style={{borderLeft: '4px solid #8e44ad', paddingLeft: '15px', backgroundColor: '#111', padding: '15px', borderRadius: '0 8px 8px 0'}}>
            <h4 style={{color: '#8e44ad', margin: '0 0 5px 0'}}>04 de Outubro</h4>
            <p style={{color: '#fff', fontSize: '16px', margin: '0', fontWeight: 'bold'}}>1º Turno das Eleições</p>
          </div>

        </div>
      </div>
    </div>
  );
}
