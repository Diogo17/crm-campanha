import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, onSnapshot, query } from 'firebase/firestore';

export default function MapaVotos() {
  const [apoiadores, setApoiadores] = useState([]);
  const [metas] = useState({
    "Januária": 5000,
    "Montes Claros": 12000,
    "Brasília de Minas": 3000,
    "Manga": 2500,
    "Itacarambi": 2000,
    "Juvenília": 1500
  });

  useEffect(() => {
    const q = query(collection(db, 'apoiadores'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const lista = [];
      snapshot.forEach((doc) => {
        lista.push({ id: doc.id, ...doc.data() });
      });
      setApoiadores(lista);
    });
    return () => unsubscribe();
  }, []);

  // Agrupamento Dinâmico de Apoiadores por Cidade
  const votosPorCidade = {};
  apoiadores.forEach(ap => {
    // Normalizar nome da cidade (remover espaços e padronizar maiúsculas) para evitar duplicatas erradas
    let cidadeLimpa = ap.cidade?.trim();
    if (!cidadeLimpa) cidadeLimpa = "Indefinida";
    
    if (!votosPorCidade[cidadeLimpa]) {
      votosPorCidade[cidadeLimpa] = {
        count: 0,
        recentes: []
      };
    }
    votosPorCidade[cidadeLimpa].count += 1;
    
    // Guardar os últimos 3 nomes para mostrar no mapa
    if (votosPorCidade[cidadeLimpa].recentes.length < 3 && ap.nome) {
      votosPorCidade[cidadeLimpa].recentes.push(ap.nome.split(' ')[0]);
    }
  });

  // Ordenar cidades por volume de apoios
  const cidadesOrdenadas = Object.keys(votosPorCidade).sort((a, b) => votosPorCidade[b].count - votosPorCidade[a].count);

  return (
    <div>
      <div className="header">
        <h2>Mapa de Votos (Tempo Real via Firebase)</h2>
      </div>

      <div className="card">
        <p style={{color: 'var(--text-muted)', marginBottom: '30px', fontSize: '14px'}}>
          Acompanhamento geográfico em tempo real com base nos cadastros do /eu-apoio.
        </p>

        {cidadesOrdenadas.length === 0 ? (
          <p style={{color: 'var(--text-muted)'}}>Carregando mapa ou banco de dados vazio...</p>
        ) : (
          cidadesOrdenadas.map(cidade => {
            const count = votosPorCidade[cidade].count;
            const meta = metas[cidade] || 1000; // Meta padrão se não estiver mapeada
            const pct = Math.min(100, Math.round((count / meta) * 100));
            const recentes = votosPorCidade[cidade].recentes.join(', ');

            return (
              <div key={cidade} style={{marginBottom: '20px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '5px'}}>
                  <span style={{fontWeight: 'bold', color: 'var(--text-light)'}}>{cidade}</span>
                  <span style={{color: 'var(--primary)', fontWeight: 'bold'}}>{count} / {meta} apoios ({pct}%)</span>
                </div>
                <div style={{width: '100%', backgroundColor: '#222', height: '12px', borderRadius: '6px', overflow: 'hidden'}}>
                  <div style={{width: `${pct}%`, backgroundColor: 'var(--primary)', height: '100%', transition: 'width 1s ease-in-out'}}></div>
                </div>
                <p style={{fontSize: '11px', color: '#666', marginTop: '5px'}}>
                  Recentes: {recentes}{votosPorCidade[cidade].count > 3 ? ' e outros...' : ''}
                </p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
