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
          
          <div style={{borderLeft: '4px solid #c1121f', paddingLeft: '15px', backgroundColor: '#111', padding: '15px', borderRadius: '0 8px 8px 0'}}>
            <h4 style={{color: '#c1121f', margin: '0 0 5px 0'}}>Agosto: Fase de Preparação e Largada Oficial</h4>
            
            <ul style={{color: 'var(--text-muted)', fontSize: '14px', paddingLeft: '20px', lineHeight: '1.6'}}>
              <li><strong style={{color: '#fff'}}>05 de Agosto:</strong> Prazo final absoluto para as convenções partidárias.</li>
              <li><strong style={{color: '#fff'}}>15 de Agosto:</strong> Prazo final para registro de candidaturas e abertura de conta bancária de campanha.</li>
              <li><strong style={{color: '#28b463'}}>16 de Agosto: INÍCIO OFICIAL DA PROPAGANDA ELEITORAL</strong>
                <ul style={{marginTop: '5px', marginBottom: '5px'}}>
                  <li style={{color: '#10B981'}}><strong>O QUE PODE A PARTIR DAQUI:</strong> Fazer lives de campanha, usar alto-falantes e amplificadores, realizar comícios, carreatas, caminhadas, distribuir material gráfico (santinhos), pagar propaganda em jornal e impulsionar conteúdos na internet de forma paga.</li>
                  <li style={{color: '#EF4444'}}><strong>O QUE NÃO PODE A PARTIR DAQUI:</strong> Fazer e divulgar enquetes eleitorais (apenas pesquisas registradas são permitidas).</li>
                </ul>
              </li>
              <li><strong style={{color: '#fff'}}>28 de Agosto:</strong> Início do horário eleitoral gratuito no rádio e na TV.</li>
            </ul>
          </div>

          <div style={{borderLeft: '4px solid #d4ac0d', paddingLeft: '15px', backgroundColor: '#111', padding: '15px', borderRadius: '0 8px 8px 0'}}>
            <h4 style={{color: '#d4ac0d', margin: '0 0 5px 0'}}>Setembro: Prestação de Contas e Reta Final</h4>
            
            <ul style={{color: 'var(--text-muted)', fontSize: '14px', paddingLeft: '20px', lineHeight: '1.6'}}>
              <li><strong style={{color: '#fff'}}>09 a 13 de Setembro:</strong> Obrigatório o envio da prestação parcial de contas.</li>
              <li><strong style={{color: '#fff'}}>14 de Setembro:</strong> Prazo limite para substituição de candidatos (exceto falecimento).</li>
              <li><strong style={{color: '#fff'}}>19 de Setembro:</strong> Candidatos não podem ser presos (salvo flagrante delito), até 6 de outubro.</li>
            </ul>
          </div>

          <div style={{borderLeft: '4px solid var(--primary)', paddingLeft: '15px', backgroundColor: '#111', padding: '15px', borderRadius: '0 8px 8px 0'}}>
            <h4 style={{color: 'var(--primary)', margin: '0 0 5px 0'}}>Outubro: O Mês da Decisão</h4>
            
            <ul style={{color: 'var(--text-muted)', fontSize: '14px', paddingLeft: '20px', lineHeight: '1.6'}}>
              <li><strong style={{color: '#EF4444'}}>01 de Outubro:</strong> ÚLTIMO DIA para comícios, impulsionamento pago na internet, e fim do horário eleitoral no Rádio/TV.</li>
              <li><strong style={{color: '#EF4444'}}>02 de Outubro:</strong> ÚLTIMO DIA para propaganda paga em jornais.</li>
              <li><strong style={{color: '#EF4444'}}>03 de Outubro (Véspera):</strong> ÚLTIMO DIA para carreatas, caminhadas, distribuição de material gráfico e uso de alto-falantes (até as 22h).</li>
              <li style={{marginTop: '10px'}}><strong style={{color: '#fff', fontSize: '16px'}}>04 de Outubro: 1º TURNO DAS ELEIÇÕES</strong>
                <ul style={{marginTop: '5px'}}>
                  <li style={{color: '#EF4444'}}><strong>PROIBIDO NO DIA:</strong> Fazer boca de urna, aglomeração de pessoas com roupas/bandeiras padronizadas, uso de alto-falantes e distribuição de santinhos.</li>
                  <li style={{color: '#10B981'}}><strong>PERMITIDO NO DIA:</strong> Manifestação individual e silenciosa do eleitor (uso de broche, adesivo, camiseta).</li>
                </ul>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
