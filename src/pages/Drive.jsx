import React from 'react';

export default function Drive() {
  const driveLink = "https://drive.google.com/drive/folders/11F07DrglD5JiTyG4jC_W9J1cyRyHOT85?usp=sharing";

  return (
    <div>
      <div className="header">
        <h2>Repositório de Artes e Vídeos</h2>
      </div>

      <div className="card" style={{textAlign: 'center', padding: '50px 20px'}}>
        <h3 style={{fontSize: '20px', color: 'var(--text-light)', marginBottom: '15px'}}>Google Drive da Campanha</h3>
        <p style={{color: 'var(--text-muted)', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px'}}>
          Todos os arquivos pesados, vídeos brutos para edição, e as artes oficiais renderizadas estão hospedados no Google Drive oficial da campanha para não sobrecarregar o sistema.
        </p>
        <a 
          href={driveLink} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            backgroundColor: 'var(--primary)',
            color: 'white',
            padding: '15px 30px',
            textDecoration: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            fontSize: '18px'
          }}
        >
          Acessar Pasta do Google Drive
        </a>
      </div>
    </div>
  );
}
