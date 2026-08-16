import React, { useState, useEffect } from 'react';

export default function Dashboard() {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const electionDate = new Date('2026-10-04T00:00:00');
    const today = new Date();
    const diffTime = Math.abs(electionDate - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysLeft(diffDays);
  }, []);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copiado para a área de transferência!');
  };

  return (
    <div>
      <div className="header">
        <h2>Visão Geral da Campanha</h2>
      </div>

      <div className="card-grid">
        <div className="card">
          <h3>Faltam para a Eleição</h3>
          <div className="value" style={{color: 'var(--primary)'}}>{daysLeft} Dias</div>
          <p style={{color: 'var(--text-muted)', fontSize: '12px', marginTop: '10px'}}>Sprint final de 60 dias ativado.</p>
        </div>
        <div className="card">
          <h3>Fase Atual (Cronograma)</h3>
          <div className="value">Fase 1</div>
          <p style={{color: 'var(--text-muted)', fontSize: '12px', marginTop: '10px'}}>Apresentação & Identificação</p>
        </div>
        <div className="card">
          <h3>Dados de Lançamento Rápidos</h3>
          <button 
            className="primary" 
            style={{marginTop: '10px', width: '100%', marginBottom: '10px'}}
            onClick={() => copyToClipboard('68.608.100/0001-39')}
          >
            Copiar CNPJ
          </button>
          <button 
            style={{width: '100%'}}
            onClick={() => copyToClipboard('Vote Hudson Tesura, 33753. ✅')}
          >
            Copiar Chamada de Voto
          </button>
        </div>
      </div>

      <div className="card" style={{marginTop: '30px'}}>
        <h3 style={{color: 'var(--primary)', marginBottom: '15px'}}>Banco de Propostas (Resumo)</h3>
        <table style={{width: '100%'}}>
          <thead>
            <tr>
              <th>Área</th>
              <th>O Problema</th>
              <th>A Proposta do Mandato</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Saúde</strong></td>
              <td>Fila do SUS e viagens na TFD.</td>
              <td>Emendas exclusivas para consórcios intermunicipais de saúde no Norte de Minas.</td>
            </tr>
            <tr>
              <td><strong>Educação</strong></td>
              <td>Escolas precárias baixam o IDEB.</td>
              <td>Cobrar na LOA estadual reforma em cidades com baixo IDH.</td>
            </tr>
            <tr>
              <td><strong>Emprego</strong></td>
              <td>Juventude indo embora.</td>
              <td>Incentivos fiscais (ICMS) para indústrias e crédito via BDMG.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
