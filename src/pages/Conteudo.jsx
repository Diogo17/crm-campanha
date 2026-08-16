import React, { useState } from 'react';

const legendas = [
  { id: 1, titulo: "Roteiro de Vídeo: Alerta Crítico em Pintópolis", obj: "Saúde / Mortalidade Infantil", texto: "[GANCHO - 5s]: Sabe qual é a coisa mais triste que um pai ou uma mãe pode passar? É perder um filho nos primeiros dias de vida por pura falta de estrutura.\n\n[CONTEXTO]: Em Pintópolis, o negócio é gravíssimo. Os dados oficiais do DATASUS mostram que a mortalidade infantil lá bate quase 20 a cada mil nascidos (19,61/mil). É uma das piores marcas do nosso Estado. E sabe por quê? Falta UTI neonatal descentralizada na nossa região.\n\n[HUMOR SÉRIO/INDIGNAÇÃO]: É mais fácil achar água no deserto do que ver o Governo de Minas mandar recurso sério pra salvar nossas crianças no Norte de Minas. Eles acham que a gente só existe no mapa na época da eleição!\n\n[SOLUÇÃO]: O papel de um Deputado Estadual de verdade é brigar na comissão de saúde da Assembleia e destinar emenda impositiva pra consórcio de saúde. Se a gente não bater na mesa, o recurso não sai de BH.\n\n[CTA]: A gente precisa mudar essa realidade. Compartilha esse vídeo e me ajuda a cobrar quem tá lá em BH fingindo que não vê o Norte de Minas!" },
  { id: 2, titulo: "Disparo WhatsApp: Saneamento em Juvenília", obj: "WhatsApp / Saneamento Básico", texto: "🚨 Ô gente, não dá pra acreditar no que tá acontecendo em Juvenília! Vocês viram os dados oficiais do saneamento? \n\n😡 Apenas 15% da cidade tem cobertura de esgoto! Em pleno 2026, nosso povo ainda vive no meio do descaso (os dados do SNIS não mentem). Isso é saúde pública indo pro ralo, é o nosso Norte de Minas sendo tratado como resto.\n\n👀 Nós precisamos de gente na Assembleia que brigue pela verba da Copasa e de saneamento pra nossa região. Chega de eleger turista que só aparece de 4 em 4 anos! \n\n🚀 Assiste o vídeo do Hudson Tesura sobre isso e espalha nos grupos. O Norte tem que acordar! \n👉 [COLE O LINK DO VÍDEO AQUI]" },
  { id: 3, titulo: "Legenda Instagram: Fuga dos Jovens no Interior", obj: "Instagram / Emprego e Êxodo", texto: "🚨 Cadê a nossa juventude? Estão indo embora! 🧳\n\nA gente anda pelas ruas de Ibiracatu, Varzelândia, Lontra, e a história é a mesma: o jovem termina os estudos e precisa pegar o ônibus pra São Paulo ou pra BH pra conseguir trabalhar. Sabe por quê? Porque os dados do Censo IBGE mostram a nossa população encolhendo (Ibiracatu perdeu 10% da população). Não tem incentivo fiscal do Estado pra trazer indústrias pro interior.\n\nO Governo acha que o Norte de Minas vive só de vento. Nós precisamos de um representante que entenda que baixar impostos e desburocratizar na nossa região é a única forma de gerar emprego privado e segurar nossos filhos perto de casa.\n\nÉ hora de tratar as coisas com seriedade. O que você acha que tá faltando pra gerar emprego na sua cidade? Deixa nos comentários!\n\n#HudsonTesura #Mobiliza33 #NorteDeMinas #DeputadoEstadual #Eleições2026 #Ibiracatu #Lontra #Varzelândia" },
  { id: 4, titulo: "Legenda Instagram: A Fila da Saúde em Montes Claros", obj: "Instagram / Polo de Saúde", texto: "🏥 Ir pra Montes Claros fazer consulta virou um sacrifício desumano. 🚑\n\nMontes Claros tem mais de 414 mil habitantes e é o nosso grande polo de saúde regional. Mas a verdade é que os hospitais lá (como a Santa Casa) não dão conta de abraçar sozinhos todos os 23 municípios vizinhos. A fila de alta complexidade demora tanto que a doença não espera.\n\nFalta recurso estadual urgente para ajudar os hospitais filantrópicos de MOC e estruturar as cidades base (como Brasília de Minas, São Francisco e Januária). O Estado precisa entender que o Norte de Minas não é só uma mancha no mapa, nós existimos e pagamos impostos!\n\nVocê ou alguém da sua família já sofreu com a fila de espera ou na estrada da ambulância? Conta aqui pra mim nos comentários. 👇\n\n#HudsonTesura #Mobiliza33 #NorteDeMinas #MontesClaros #SaúdePública #SUS #Eleições2026" },
  { id: 5, titulo: "Roteiro de Vídeo: Januária, o Polo Abandonado", obj: "Vídeo / Januária / Infraestrutura", texto: "[GANCHO - 5s]: Januária é gigante no tamanho, mas o Estado teima em deixar a gente pequeno! Até quando?\n\n[CONTEXTO]: Nós temos mais de 65 mil habitantes, um polo comercial forte, e um potencial turístico no Rio São Francisco que dá inveja em muita capital. Mas olha o nosso acesso às verbas estaduais. O IDH da nossa cidade patina nos 0,658 há anos e o Estado não ajuda o empreendedor local.\n\n[HUMOR SÉRIO/INDIGNAÇÃO]: Parece que pra máquina do Estado de Minas, o mapa acaba lá por Diamantina. Pra chegar recurso em Januária, a gente tem que implorar, fazer promessa e ainda esperar sentado!\n\n[SOLUÇÃO]: Hudson Tesura na Assembleia é o Norte de Minas batendo na porta do Governador com o censo e os dados na mão, não com chapéu de pedinte. Vamos fiscalizar e cobrar o que o Governo deve ao nosso comércio e ao nosso agro.\n\n[CTA]: Bora construir a Força do Norte? Deixa sua curtida e envia pra aquele amigo de Januária que também cansou das mesmas promessas!" }
];

export default function Conteudo() {
  const [busca, setBusca] = useState('');

  const copiar = (texto) => {
    navigator.clipboard.writeText(texto);
    alert('Legenda copiada para a área de transferência!');
  };

  const legendasFiltradas = legendas.filter(l => 
    l.titulo.toLowerCase().includes(busca.toLowerCase()) || 
    l.obj.toLowerCase().includes(busca.toLowerCase()) ||
    l.texto.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div>
      <div className="header">
        <h2>Dossiê e Banco de Legendas</h2>
      </div>

      <div className="card" style={{marginBottom: '30px'}}>
        <h3 style={{marginBottom: '15px'}}>Pesquisar Conteúdo</h3>
        <input 
          type="text" 
          placeholder="Busque por pauta (ex: Saúde, Emprego, Agro)..." 
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          style={{width: '100%', maxWidth: '500px'}}
        />
      </div>

      <div className="card-grid">
        {legendasFiltradas.map(l => (
          <div key={l.id} className="card" style={{display: 'flex', flexDirection: 'column'}}>
            <h3 style={{color: 'var(--text-light)', fontSize: '16px'}}>{l.titulo}</h3>
            <p style={{color: 'var(--primary)', fontSize: '12px', fontWeight: 'bold', marginBottom: '15px'}}>{l.obj}</p>
            <div style={{flex: 1, backgroundColor: 'var(--bg-dark)', padding: '15px', borderRadius: '6px', fontSize: '14px', color: 'var(--text-muted)', whiteSpace: 'pre-wrap', marginBottom: '15px', overflowY: 'auto', maxHeight: '200px'}}>
              {l.texto}
            </div>
            <button onClick={() => copiar(l.texto)} className="primary" style={{marginTop: 'auto'}}>Copiar Texto</button>
          </div>
        ))}
        {legendasFiltradas.length === 0 && (
          <p style={{color: 'var(--text-muted)'}}>Nenhuma legenda encontrada para essa busca.</p>
        )}
      </div>
    </div>
  );
}
