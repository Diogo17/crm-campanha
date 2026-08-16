import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { LayoutDashboard, Users, DollarSign, FolderGit2, LogOut, CalendarDays, BookOpen, Video } from 'lucide-react';
import './index.css';

// Componentes (Serão importados de arquivos separados)
import Dashboard from './pages/Dashboard';
import Apoiadores from './pages/Apoiadores';
import Financeiro from './pages/Financeiro';
import Conteudo from './pages/Conteudo';
import Drive from './pages/Drive';
import Dossie from './pages/Dossie';
import Calendario from './pages/Calendario';
import Pipeline from './pages/Pipeline';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  useEffect(() => {
    const auth = localStorage.getItem('crm_auth');
    if (auth === 'true') setIsAuthenticated(true);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    // Senha simples para isolamento básico pedido pelo usuário
    if (password === '33753') {
      localStorage.setItem('crm_auth', 'true');
      setIsAuthenticated(true);
    } else {
      alert('Senha incorreta!');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('crm_auth');
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="login-container">
        <form className="login-box" onSubmit={handleLogin}>
          <h1>HUDSON TESURA</h1>
          <p style={{marginBottom: '20px', color: 'var(--text-muted)'}}>CRM de Campanha - Acesso Restrito</p>
          <input 
            type="password" 
            placeholder="Digite a senha de acesso" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="primary">Entrar</button>
        </form>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="app-container">
        <aside className="sidebar">
          <div className="sidebar-header">
            <h1>33753</h1>
            <p style={{fontSize: '12px', color: 'var(--text-muted)', marginTop: '5px'}}>CRM HUDSON TESURA</p>
          </div>
          <nav className="sidebar-nav">
            <NavLink to="/" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
              <LayoutDashboard size={20} /> Visão Geral
            </NavLink>
            <NavLink to="/apoiadores" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
              <Users size={20} /> Apoiadores
            </NavLink>
            <NavLink to="/financeiro" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
              <DollarSign size={20} /> Financeiro
            </NavLink>
            <NavLink to="/dossie" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
              <BookOpen size={20} /> Dossiê e Identidade
            </NavLink>
            <NavLink to="/conteudo" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
              <FolderGit2 size={20} /> Legendas Prontas
            </NavLink>
            <NavLink to="/pipeline" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
              <Video size={20} /> Pipeline de Vídeo
            </NavLink>
            <NavLink to="/calendario" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
              <CalendarDays size={20} /> Calendário 60 Dias
            </NavLink>
            <NavLink to="/drive" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
              <FolderGit2 size={20} /> Artes & Drive
            </NavLink>
          </nav>
          <div style={{padding: '20px'}}>
            <button onClick={handleLogout} style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
              <LogOut size={16} /> Sair
            </button>
          </div>
        </aside>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/apoiadores" element={<Apoiadores />} />
            <Route path="/financeiro" element={<Financeiro />} />
            <Route path="/dossie" element={<Dossie />} />
            <Route path="/conteudo" element={<Conteudo />} />
            <Route path="/pipeline" element={<Pipeline />} />
            <Route path="/calendario" element={<Calendario />} />
            <Route path="/drive" element={<Drive />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
