import React from 'react';

export default function Pipeline() {
  return (
    <div>
      <div className="header">
        <h2>Pipeline de Edição de Vídeo</h2>
      </div>

      <div className="card" style={{marginBottom: '30px'}}>
        <h3 style={{color: 'var(--primary)', marginBottom: '15px'}}>A Regra de Ouro da Edição</h3>
        <p style={{color: 'var(--text-light)', lineHeight: '1.6'}}>
          A equipe de edição <strong>NUNCA</strong> inventa o roteiro. O trabalho é extrair a verdade do material bruto (Banco de Verdades) 
          e formatá-lo segundo a métrica do "Humor Sério".
        </p>
      </div>

      <div className="card-grid">
        <div className="card">
          <h3 style={{color: 'var(--text-muted)'}}>1. O Gancho (0 a 5 seg)</h3>
          <p style={{fontSize: '14px', marginTop: '10px'}}>
            Corte o Hudson fazendo uma piada, rindo ou usando analogia simples. Dê zoom leve no rosto e coloque legendas grandes (amarelo/branco) estilo TikTok.
          </p>
        </div>
        <div className="card">
          <h3 style={{color: 'var(--text-muted)'}}>2. A Virada (5 a 10 seg)</h3>
          <p style={{fontSize: '14px', marginTop: '10px'}}>
            Quando ele disser "Agora falando sério", insira um "Swoosh", troque a música para algo dramático/noticiário, e mude a legenda para vermelho.
          </p>
        </div>
        <div className="card">
          <h3 style={{color: 'var(--text-muted)'}}>3. A Evidência (10 a 25 seg)</h3>
          <p style={{fontSize: '14px', marginTop: '10px'}}>
            Insira recortes gráficos na tela (notícias de portais locais do Norte de Minas, prints de Portal da Transparência) para provar o argumento.
          </p>
        </div>
        <div className="card">
          <h3 style={{color: 'var(--text-muted)'}}>4. A Proposta (25 a 40 seg)</h3>
          <p style={{fontSize: '14px', marginTop: '10px'}}>
            Foco visual no <em>como</em>: Deixe letreiros na tela como "Emenda Parlamentar", "Cobrar Governador", "Fiscalização de Contratos".
          </p>
        </div>
        <div className="card">
          <h3 style={{color: 'var(--text-muted)'}}>5. O Fechamento Oficial (40 a 45 seg)</h3>
          <p style={{fontSize: '14px', marginTop: '10px'}}>
            Sobreponha o vídeo com o arquivo transparente <strong>Moldura_Video_Oficial.png</strong> (que contém o 33753 e o CNPJ) e feche com a vinheta.
          </p>
        </div>
      </div>
    </div>
  );
}
