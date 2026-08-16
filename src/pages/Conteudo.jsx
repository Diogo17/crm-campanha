import React, { useState } from 'react';

const legendas = [
  { id: 1, titulo: "ARTE 1: Juntos com o MOBILIZA 33753", obj: "Lançamento Oficial", texto: "Ô gente, vamos entender uma coisa aqui: a fase de aquecimento acabou! 😂 O registro tá feito, a chuteira tá amarrada e eu já tô em campo.\n\nAgora falando sério: O Norte de Minas não pode mais ficar assistindo o jogo do banco de reservas. Precisamos de voz lá em Belo Horizonte para trazer recursos reais para a nossa infraestrutura e saúde. O trabalho começou e o instrumento que temos nas mãos é o voto consciente.\n\nA Força do Norte agora tem número. Vote Hudson Tesura, 33753. ✅\nFaça parte do nosso Gabinete Digital no WhatsApp: (38) 98858-6264\n\n#HudsonTesura33753 #Eleicoes2026 #Mobiliza33 #NorteDeMinas\n*(CNPJ da Campanha: 68.608.100/0001-39)*" },
  { id: 2, titulo: "ARTE 2: A Força do Norte", obj: "Identidade Regional", texto: "Sabe aquele amigo que só te liga quando precisa de favor? Pois é, tem político que acha que o Norte de Minas é assim: só lembra da gente em ano de eleição. 🤦‍♂️\n\nAgora falando sério: Nós temos a região mais rica em cultura, belezas como o Peruaçu, e um povo trabalhador. Mas os dados mostram que somos os últimos da fila em investimentos do Estado. Um Deputado Estadual de verdade fiscaliza a distribuição do ICMS e cobra que o governador repasse o que é nosso por direito.\n\nBora mudar essa história? Vote Hudson Tesura, 33753 para Deputado Estadual.\n📲 Participe do grupo: (38) 98858-6264\n\n#NorteDeMinas #Peruaçu #MinasGerais #HudsonTesura33753\n*(CNPJ: 68.608.100/0001-39)*" },
  { id: 3, titulo: "ARTE 3: O Agro é a Nossa Força", obj: "Defesa do Agronegócio", texto: "Tem gente que acha que o leite nasce na caixinha do supermercado... 🐮📦\n\nAgora falando sério: O produtor rural do Norte de Minas mata um leão por dia com a seca, com o custo de produção e, principalmente, com as estradas de terra destruídas que dificultam o escoamento da safra. Meu compromisso como Deputado Estadual será direcionar emendas parlamentares para a infraestrutura logística do homem do campo.\n\nSem o Agro, a cidade não come. Vote 33753. 🚜🌾\n\n#AgroMinas #Agronegocio #ProdutorRural #HudsonTesura33753\n*(CNPJ: 68.608.100/0001-39)*" },
  { id: 4, titulo: "ARTE 4: Segurança Levada a Sério", obj: "Segurança Pública", texto: "Na teoria a segurança pública funciona uma beleza, mas na prática a gente anda na rua olhando mais pra trás do que retrovisor de caminhão! 🚛👀\n\nAgora falando sério: Os índices de pequenos roubos e a falta de viaturas nos distritos rurais são problemas reais. A responsabilidade por equipar a PMMG e a Polícia Civil é do Governo do Estado. O que eu posso fazer? Bater na porta da Secretaria de Segurança e exigir reposição de efetivo policial nas nossas cidades.\n\nPara tratar a segurança a sério: Vote Hudson Tesura, 33753. 🚔🛡️\n\n#SegurançaPublica #PMMG #HudsonTesura33753\n*(CNPJ: 68.608.100/0001-39)*" },
  { id: 5, titulo: "ARTE 5: A Saúde Tem Pressa", obj: "Saúde Pública e SUS", texto: "Esperar na fila do SUS para uma cirurgia no Norte de Minas tá demorando mais do que episódio final de novela das oito... 🏥🤦‍♂️\n\nAgora falando sério: Nós não aguentamos mais ver nosso povo viajando horas dentro de ambulância da TFD para conseguir atendimento em BH. Faltam leitos de UTI descentralizados e os dados oficiais provam isso. Como Deputado Estadual, meu foco será carimbar emendas parlamentares diretamente para os consórcios intermunicipais de saúde da nossa região, para custear mutirões de cirurgias aqui mesmo.\n\nA dor não pode esperar a viagem. Vote Hudson Tesura, 33753. 🩺\n\n#SaudeMinas #SUS #NorteDeMinas #HudsonTesura33753\n*(CNPJ: 68.608.100/0001-39)*" },
  { id: 6, titulo: "ARTE 6: Educação e Oportunidade", obj: "Educação e Infraestrutura", texto: "Tem escola estadual na nossa região que a internet é mais lenta do que internet discada nos anos 90, e a goteira do teto ensina mais sobre geografia dos rios do que os livros... ☔📖\n\nAgora falando sério: O Estado exige notas altas no IDEB, mas entrega estrutura precária para o interior. O papel de um Deputado não é construir escola, mas brigar no Orçamento do Estado para que a Secretaria de Educação invista prioritariamente nas escolas das cidades de menor IDH. Chega de pintar parede em BH enquanto nosso teto cai.\n\nPor uma educação estruturada: Vote Hudson Tesura, 33753. 🎒✏️\n\n#Educação #EscolaEstadual #HudsonTesura33753\n*(CNPJ: 68.608.100/0001-39)*" },
  { id: 7, titulo: "ARTE 7: Emprego e Renda no Interior", obj: "Geração de Emprego", texto: "Procurar emprego no interior hoje tá mais difícil que achar agulha no palheiro, a diferença é que a agulha pelo menos existe! 🪡😅\n\nAgora falando sério: Nossa juventude está indo embora para as capitais porque falta incentivo. O comércio local e a agricultura familiar carregam nossa economia nas costas, mas sofrem com impostos altos. O caminho é legislar por benefícios fiscais (ICMS reduzido) para indústrias que se instalem no Norte de Minas e batalhar por linhas de crédito do BDMG sem tanta burocracia.\n\nPelo desenvolvimento de verdade: Vote Hudson Tesura, 33753. 🤝🏗️\n\n#Emprego #Desenvolvimento #HudsonTesura33753\n*(CNPJ: 68.608.100/0001-39)*" }
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
