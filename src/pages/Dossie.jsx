import React from 'react';

export default function Dossie() {
  return (
    <div>
      <div className="header">
        <h2>Dossiê e Posicionamento (Banco de Verdades)</h2>
      </div>

      <div className="card" style={{marginBottom: '30px'}}>
        <h3 style={{color: 'var(--primary)', marginBottom: '15px'}}>O Personagem: Hudson Tesura</h3>
        <p style={{color: 'var(--text-light)', lineHeight: '1.6'}}>
          Hudson Tesura não é o engravatado tradicional. Ele é a voz que <strong>"Fala Simples e Trata Sério"</strong>.
          <br/><br/>
          A ferramenta de um Deputado Estadual é fiscalizar o Executivo e carimbar emendas parlamentares. 
          Hudson não faz promessas de "construir obras", pois isso é função do Prefeito ou Governador. Ele se propõe a ser o 
          facilitador que direciona o dinheiro do orçamento para as dores reais do Norte de Minas.
        </p>
      </div>

      <div className="card-grid">
        <div className="card">
          <h3 style={{color: 'var(--primary)'}}>1. Agronegócio</h3>
          <p style={{color: 'var(--text-muted)', fontSize: '14px', marginTop: '10px'}}>
            <strong>Problema:</strong> Estradas de terra destruídas, seca e falta de apoio logístico.<br/>
            <strong>Solução:</strong> Emendas parlamentares para infraestrutura logística do homem do campo e cobrança no DER-MG.
          </p>
        </div>
        <div className="card">
          <h3 style={{color: 'var(--primary)'}}>2. Saúde Pública</h3>
          <p style={{color: 'var(--text-muted)', fontSize: '14px', marginTop: '10px'}}>
            <strong>Problema:</strong> Filas longas no SUS e dependência excessiva das ambulâncias da TFD para BH.<br/>
            <strong>Solução:</strong> Carimbar emendas diretas para consórcios intermunicipais do Norte de Minas para custear mutirões locais.
          </p>
        </div>
        <div className="card">
          <h3 style={{color: 'var(--primary)'}}>3. Segurança</h3>
          <p style={{color: 'var(--text-muted)', fontSize: '14px', marginTop: '10px'}}>
            <strong>Problema:</strong> Furtos em propriedades rurais e falta de viaturas e efetivo.<br/>
            <strong>Solução:</strong> Pressão no Governo do Estado para descentralizar o efetivo policial que fica concentrado na capital.
          </p>
        </div>
        <div className="card">
          <h3 style={{color: 'var(--primary)'}}>4. Emprego e Educação</h3>
          <p style={{color: 'var(--text-muted)', fontSize: '14px', marginTop: '10px'}}>
            <strong>Problema:</strong> Fuga de jovens para a capital e escolas precárias baixando o IDEB.<br/>
            <strong>Solução:</strong> Incentivo fiscal (ICMS) via BDMG para indústrias e exigência na LOA para reforma estrutural em cidades de baixo IDH.
          </p>
        </div>
      </div>
    </div>
  );
}
