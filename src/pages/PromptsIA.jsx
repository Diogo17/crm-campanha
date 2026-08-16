import React from 'react';

export default function PromptsIA() {
  const copiarTexto = (id) => {
    const texto = document.getElementById(id).innerText;
    navigator.clipboard.writeText(texto);
    alert('Prompt copiado! Cole no ChatGPT ou Gemini.');
  };

  return (
    <div>
      <div className="header">
        <h2>Máquina de Prompts (IA)</h2>
      </div>
      <p style={{color: 'var(--text-muted)', marginBottom: '30px'}}>
        Copie o "Master Prompt" e cole na sua Inteligência Artificial para gerar roteiros, textos e legendas com a voz oficial da campanha de forma automatizada.
      </p>

      <div className="card-grid">
        <div className="card">
          <h3 style={{color: 'var(--primary)', marginBottom: '10px'}}>1. Roteirista de Vídeo (Humor Sério)</h3>
          <div style={{background: '#111', padding: '15px', borderRadius: '6px', maxHeight: '200px', overflowY: 'auto', marginBottom: '15px'}}>
            <code id="prompt-video" style={{color: 'var(--text-muted)', fontSize: '13px', whiteSpace: 'pre-wrap'}}>
Atue como um Roteirista Político Especialista em Retenção no TikTok e Reels.
Escreva um roteiro de vídeo curto (máximo 60 segundos) para o candidato a deputado estadual "Hudson Tesura".
A identidade do Hudson é "Fala Simples. Trata Sério". Ele é cirurgião dentista, conservador, e fala os problemas do Norte de Minas sem rodeios.

ESTRUTURA OBRIGATÓRIA DO ROTEIRO:
1. GANCHO (Primeiros 5s): Uma pergunta polêmica ou afirmação que dê raiva no espectador (Ex: "Até quando você vai aguentar...?").
2. CONTEXTO: Explique o problema rapidamente em linguagem de boteco, sem palavras difíceis.
3. HUMOR SÉRIO: Use uma metáfora cortante ou um tom de indignação irônica.
4. SOLUÇÃO: A proposta técnica do Hudson, mas falada de forma simples.
5. CTA (Call to Action): Pedir para curtir e seguir. NÃO pedir voto diretamente.

ESCREVA UM ROTEIRO AGORA SOBRE O TEMA: [DIGITE AQUI O TEMA. Ex: Fila da Saúde em Januária]
            </code>
          </div>
          <button onClick={() => copiarTexto('prompt-video')} className="primary" style={{width: '100%'}}>Copiar Prompt 1</button>
        </div>

        <div className="card">
          <h3 style={{color: '#3B82F6', marginBottom: '10px'}}>2. Legendas para Instagram (Massificação)</h3>
          <div style={{background: '#111', padding: '15px', borderRadius: '6px', maxHeight: '200px', overflowY: 'auto', marginBottom: '15px'}}>
            <code id="prompt-legenda" style={{color: 'var(--text-muted)', fontSize: '13px', whiteSpace: 'pre-wrap'}}>
Atue como um Copywriter Político focado em engajamento.
Escreva uma legenda de Instagram para o candidato a deputado estadual Hudson Tesura (MG - Número 33753).
A legenda deve acompanhar uma foto/arte sobre o seguinte assunto: [DIGITE O ASSUNTO DA ARTE AQUI].

REGRAS DA LEGENDA:
- Primeira linha chamativa usando EMOJIS.
- Quebre os parágrafos para leitura fácil (máximo 3 linhas por parágrafo).
- O tom deve ser de "um amigo indignado passando a visão" (simples, direto, focado no Norte de Minas).
- Conclua com um CTA para deixar a opinião nos comentários.
- Inclua as hashtags: #HudsonTesura #MinasGerais #NorteDeMinas #PolíticaSéria #Eleições2026
            </code>
          </div>
          <button onClick={() => copiarTexto('prompt-legenda')} className="primary" style={{width: '100%'}}>Copiar Prompt 2</button>
        </div>

        <div className="card">
          <h3 style={{color: '#10B981', marginBottom: '10px'}}>3. Disparo Tático (WhatsApp)</h3>
          <div style={{background: '#111', padding: '15px', borderRadius: '6px', maxHeight: '200px', overflowY: 'auto', marginBottom: '15px'}}>
            <code id="prompt-zap" style={{color: 'var(--text-muted)', fontSize: '13px', whiteSpace: 'pre-wrap'}}>
Atue como um Coordenador de Gabinete Digital.
Crie uma mensagem curta de WhatsApp (estilo "Nugget" de leitura em 10 segundos) para ser disparada em dezenas de grupos do Norte de Minas.

TEMA DO DISPARO: [DIGITE AQUI SOBRE O QUE É. Ex: Novo vídeo sobre o asfalto furado]

REGRAS:
- Não pode parecer um texto de robô. Tem que parecer que foi escrito pela tia, pelo vizinho ou pelo primo indignado.
- Use emojis moderadamente (🚨, 😡, 👀, 🚀).
- Texto super curto, máximo de 4 frases ou bullet points.
- Se houver um link, coloque a instrução "[COLE O LINK AQUI]" no final com setas.
- O foco é indignação e esperança na solução com o 33753.
            </code>
          </div>
          <button onClick={() => copiarTexto('prompt-zap')} className="primary" style={{width: '100%'}}>Copiar Prompt 3</button>
        </div>
      </div>
    </div>
  );
}
