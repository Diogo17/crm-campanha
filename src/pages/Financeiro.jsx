import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default function Financeiro() {
  const [transacoes, setTransacoes] = useState([]);
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState('despesa'); // receita ou despesa

  useEffect(() => {
    const data = localStorage.getItem('crm_financeiro');
    if (data) setTransacoes(JSON.parse(data));
  }, []);

  const salvar = async (e) => {
    e.preventDefault();
    const nova = { id: Date.now(), descricao, valor: parseFloat(valor), tipo };
    const novaLista = [...transacoes, nova];
    setTransacoes(novaLista);
    localStorage.setItem('crm_financeiro', JSON.stringify(novaLista));
    
    setDescricao(''); setValor('');

    // Integração silenciosa com Google Drive
    try {
      await fetch('https://script.google.com/macros/s/AKfycbxbz7qEf4yObmPhuO5WdU-KK4FoAxMAFmdYZHu70i9dakRVScVXMTFU65FT7ogYbzCN1w/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sheet: "Financeiro",
          id: nova.id,
          descricao: nova.descricao,
          tipo: nova.tipo,
          valor: nova.valor
        })
      });
    } catch (err) {
      console.error("Erro ao salvar no Drive:", err);
    }
  };

  const deletar = (id) => {
    const novaLista = transacoes.filter(t => t.id !== id);
    setTransacoes(novaLista);
    localStorage.setItem('crm_financeiro', JSON.stringify(novaLista));
  };

  const totalReceitas = transacoes.filter(t => t.tipo === 'receita').reduce((acc, t) => acc + t.valor, 0);
  const totalDespesas = transacoes.filter(t => t.tipo === 'despesa').reduce((acc, t) => acc + t.valor, 0);
  const saldo = totalReceitas - totalDespesas;

  const gerarPDF = () => {
    const doc = new jsPDF();
    
    doc.setFontSize(18);
    doc.text("Prestação de Contas - Eleições 2026", 14, 22);
    
    doc.setFontSize(12);
    doc.text("Candidato: HUDSON TESURA", 14, 30);
    doc.text("Número: 33753 | CNPJ: 68.608.100/0001-39", 14, 36);
    
    doc.text(`Total Arrecadado: R$ ${totalReceitas.toFixed(2)}`, 14, 46);
    doc.text(`Total Gasto: R$ ${totalDespesas.toFixed(2)}`, 14, 52);
    doc.text(`Saldo em Caixa: R$ ${saldo.toFixed(2)}`, 14, 58);
    
    const tableColumn = ["Descrição", "Tipo", "Valor (R$)"];
    const tableRows = [];
    
    transacoes.forEach(t => {
      tableRows.push([
        t.descricao,
        t.tipo.toUpperCase(),
        `R$ ${t.valor.toFixed(2)}`
      ]);
    });
    
    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 65,
    });
    
    const finalY = doc.lastAutoTable.finalY || 65;
    doc.line(14, finalY + 30, 100, finalY + 30);
    doc.text("Assinatura do Candidato (Gov.br)", 14, finalY + 36);
    doc.text("HUDSON TEIXEIRA PASSOS", 14, finalY + 42);
    
    doc.save("Prestacao_Contas_Tesura_33753.pdf");
  };

  return (
    <div>
      <div className="header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h2>Controle Financeiro</h2>
        <button onClick={gerarPDF} style={{backgroundColor: '#10B981', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold'}}>
          Exportar Prestação (PDF)
        </button>
      </div>

      <div className="card-grid" style={{marginBottom: '20px'}}>
        <div className="card">
          <h3>Teto Legal (TSE)</h3>
          <div className="value" style={{color: 'var(--text-muted)'}}>R$ 1.270.629,01</div>
          <p style={{color: 'var(--text-muted)', fontSize: '12px', marginTop: '5px'}}>Limite máximo de gastos</p>
        </div>
        <div className="card">
          <h3>Orçamento Alvo (Cenário 2)</h3>
          <div className="value" style={{color: '#3B82F6'}}>R$ 125.565,00</div>
          <p style={{color: 'var(--text-muted)', fontSize: '12px', marginTop: '5px'}}>Meta de arrecadação da campanha</p>
        </div>
      </div>

      <div className="card-grid">
        <div className="card">
          <h3>Total Arrecadado (Receitas)</h3>
          <div className="value" style={{color: 'var(--success)'}}>R$ {totalReceitas.toFixed(2)}</div>
        </div>
        <div className="card">
          <h3>Total Gasto (Despesas)</h3>
          <div className="value" style={{color: 'var(--primary)'}}>R$ {totalDespesas.toFixed(2)}</div>
        </div>
        <div className="card">
          <h3>Saldo em Caixa</h3>
          <div className="value">R$ {saldo.toFixed(2)}</div>
        </div>
      </div>

      <div className="card" style={{marginBottom: '30px'}}>
        <h3 style={{marginBottom: '15px'}}>Lançar Nova Transação</h3>
        <form onSubmit={salvar} style={{display: 'flex', gap: '15px', flexWrap: 'wrap'}}>
          <input required placeholder="Descrição (Ex: Combustível, Gráfica)" value={descricao} onChange={e => setDescricao(e.target.value)} style={{flex: 2, minWidth: '200px'}} />
          <input required type="number" step="0.01" placeholder="Valor (R$)" value={valor} onChange={e => setValor(e.target.value)} style={{flex: 1, minWidth: '150px'}} />
          <select value={tipo} onChange={e => setTipo(e.target.value)} style={{flex: 1, minWidth: '150px'}}>
            <option value="despesa">Despesa (Gasto)</option>
            <option value="receita">Receita (Doação)</option>
          </select>
          <button type="submit" className="primary">Salvar Lançamento</button>
        </form>
      </div>

      <div className="card">
        <h3>Extrato ({transacoes.length})</h3>
        {transacoes.length === 0 ? (
          <p style={{color: 'var(--text-muted)', marginTop: '10px'}}>Nenhuma transação lançada ainda.</p>
        ) : (
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Descrição</th>
                  <th>Tipo</th>
                  <th>Valor</th>
                  <th>Ação</th>
                </tr>
              </thead>
              <tbody>
                {transacoes.map(t => (
                  <tr key={t.id}>
                    <td>{t.descricao}</td>
                    <td style={{color: t.tipo === 'receita' ? 'var(--success)' : 'var(--primary)', fontWeight: 'bold', textTransform: 'capitalize'}}>{t.tipo}</td>
                    <td>R$ {t.valor.toFixed(2)}</td>
                    <td>
                      <button onClick={() => deletar(t.id)} style={{background: 'transparent', border: '1px solid var(--border)', color: 'var(--text-muted)', padding: '5px 10px'}}>
                        Remover
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
