import React from 'react';

export default function GabineteDigital() {
  const copiarTexto = (texto) => {
    navigator.clipboard.writeText(texto);
    alert('Copiado para colar no WhatsApp!');
  };

  return (
    <div>
      <div className="header">
        <h2>Gabinete Digital (Militância de WhatsApp)</h2>
      </div>

      <div className="card" style={{marginBottom: '20px'}}>
        <h3 style={{color: 'var(--success)', marginBottom: '10px'}}>Links Oficiais dos Grupos</h3>
        <p style={{color: 'var(--text-muted)', fontSize: '14px', marginBottom: '20px'}}>
          Mande este link para quem quiser entrar no grupo de envio de materiais diários.
        </p>
        <div style={{display: 'flex', gap: '10px'}}>
          <input type="text" readOnly value="https://chat.whatsapp.com/HudsonTesura2026" style={{flex: 1}} />
          <button onClick={() => copiarTexto("https://chat.whatsapp.com/HudsonTesura2026")} className="primary">Copiar Link</button>
        </div>
      </div>

      <div className="card-grid">
        <div className="card">
          <h3 style={{color: 'var(--text-light)', marginBottom: '10px'}}>Disparo Diário: Artes do Dia</h3>
          <p style={{color: 'var(--text-muted)', fontSize: '14px', marginBottom: '15px'}}>
            "Bom dia pessoal! A Arte do Lançamento Oficial já está no Instagram! Vamos curtir, comentar e encaminhar nos grupos da família! 🚀🚀 Vote 33753!"
          </p>
          <button onClick={() => copiarTexto("Bom dia pessoal! A Arte do Lançamento Oficial já está no Instagram! Vamos curtir, comentar e encaminhar nos grupos da família! 🚀🚀 Vote 33753!")} style={{backgroundColor: '#333', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '4px', cursor: 'pointer'}}>Copiar Texto de Disparo</button>
        </div>

        <div className="card">
          <h3 style={{color: 'var(--text-light)', marginBottom: '10px'}}>Disparo Diário: Vídeo Novo</h3>
          <p style={{color: 'var(--text-muted)', fontSize: '14px', marginBottom: '15px'}}>
            "Pessoal, o Tesura soltou um vídeo pesado denunciando a situação da fila do SUS na nossa região. Peguem o vídeo no Drive e subam no Status do WhatsApp de vocês AGORA! 🩺👀"
          </p>
          <button onClick={() => copiarTexto("Pessoal, o Tesura soltou um vídeo pesado denunciando a situação da fila do SUS na nossa região. Peguem o vídeo no Drive e subam no Status do WhatsApp de vocês AGORA! 🩺👀")} style={{backgroundColor: '#333', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '4px', cursor: 'pointer'}}>Copiar Texto de Disparo</button>
        </div>
      </div>
    </div>
  );
}
