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
    </div>
  );
}
