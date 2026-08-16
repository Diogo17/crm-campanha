import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { LayoutDashboard, Users, DollarSign, FolderGit2, LogOut, CalendarDays, BookOpen, Video, MapPin, Map, Scale, Smartphone, Menu } from 'lucide-react';
import './index.css';

// Componentes (Carregamento Preguiçoso / Lazy Loading para economizar memória)
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Apoiadores = lazy(() => import('./pages/Apoiadores'));
const Financeiro = lazy(() => import('./pages/Financeiro'));
const Conteudo = lazy(() => import('./pages/Conteudo'));
const Drive = lazy(() => import('./pages/Drive'));
const Dossie = lazy(() => import('./pages/Dossie'));
const Calendario = lazy(() => import('./pages/Calendario'));
const Pipeline = lazy(() => import('./pages/Pipeline'));
const MapaVotos = lazy(() => import('./pages/MapaVotos'));
const Agenda = lazy(() => import('./pages/Agenda'));
const GabineteDigital = lazy(() => import('./pages/GabineteDigital'));
const Juridico = lazy(() => import('./pages/Juridico'));
const PromptsIA = lazy(() => import('./pages/PromptsIA'));
const EuApoio = lazy(() => import('./pages/EuApoio'));

// Componente para rotas protegidas
const PrivateRoute = ({ children }) => {
  const auth = localStorage.getItem('crm_auth');
  return auth === 'true' ? children : <Navigate to="/login" />;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Layout Interno do CRM (só renderiza se logado via PrivateRoute)
  const InternalLayout = () => (
    <div className="app-container">
      {/* Topbar Mobile */}
      <div className="mobile-topbar">
          <h1>33753 HUDSON</h1>
          <button className="menu-btn" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>

        {/* Overlay do Menu Mobile */}
        <div 
          className={`mobile-overlay ${isMobileMenuOpen ? 'open' : ''}`} 
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        <aside className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <h1>33753</h1>
            <p style={{fontSize: '12px', color: 'var(--text-muted)', marginTop: '5px'}}>CRM HUDSON TESURA</p>
          </div>
          <nav className="sidebar-nav">
            <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)} className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
              <LayoutDashboard size={20} /> Visão Geral
            </NavLink>
            <NavLink to="/apoiadores" onClick={() => setIsMobileMenuOpen(false)} className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
              <Users size={20} /> Apoiadores
            </NavLink>
            <NavLink to="/financeiro" onClick={() => setIsMobileMenuOpen(false)} className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
              <DollarSign size={20} /> Financeiro
            </NavLink>
            <NavLink to="/dossie" onClick={() => setIsMobileMenuOpen(false)} className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
              <BookOpen size={20} /> Dossiê e Identidade
            </NavLink>
            <NavLink to="/prompts" onClick={() => setIsMobileMenuOpen(false)} className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
              <FolderGit2 size={20} /> Máquina de Prompts (IA)
            </NavLink>
            <NavLink to="/conteudo" onClick={() => setIsMobileMenuOpen(false)} className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
              <FolderGit2 size={20} /> Legendas Prontas
            </NavLink>
            <NavLink to="/pipeline" onClick={() => setIsMobileMenuOpen(false)} className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
              <Video size={20} /> Pipeline de Vídeo
            </NavLink>
            <NavLink to="/calendario" onClick={() => setIsMobileMenuOpen(false)} className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
              <CalendarDays size={20} /> Calendário 60 Dias
            </NavLink>
            <NavLink to="/mapa" onClick={() => setIsMobileMenuOpen(false)} className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
              <Map size={20} /> Mapa de Votos
            </NavLink>
            <NavLink to="/agenda" onClick={() => setIsMobileMenuOpen(false)} className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
              <MapPin size={20} /> Agenda de Rua
            </NavLink>
            <NavLink to="/gabinete" onClick={() => setIsMobileMenuOpen(false)} className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
              <Smartphone size={20} /> Gabinete Digital
            </NavLink>
            <NavLink to="/juridico" onClick={() => setIsMobileMenuOpen(false)} className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
              <Scale size={20} /> Jurídico (TSE)
            </NavLink>
            <NavLink to="/drive" onClick={() => setIsMobileMenuOpen(false)} className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
              <FolderGit2 size={20} /> Artes & Drive
            </NavLink>
          </nav>
          
          <div style={{padding: '10px 20px'}}>
            <a href="/eu-apoio" target="_blank" rel="noreferrer" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', backgroundColor: '#25D366', color: 'white', padding: '10px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold', fontSize: '13px', textAlign: 'center'}}>
              <Smartphone size={16} /> Link /eu-apoio
            </a>
          </div>

          <div style={{padding: '10px 20px 20px'}}>
            <button onClick={handleLogout} style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', backgroundColor: '#333'}}>
              <LogOut size={16} /> Sair
            </button>
          </div>
        </aside>

        <div className="main-wrapper">
          <main className="main-content">
            <Suspense fallback={<div style={{padding: '40px', textAlign: 'center', color: 'var(--text-muted)'}}>Carregando módulo...</div>}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/apoiadores" element={<Apoiadores />} />
                <Route path="/financeiro" element={<Financeiro />} />
                <Route path="/dossie" element={<Dossie />} />
                <Route path="/prompts" element={<PromptsIA />} />
                <Route path="/conteudo" element={<Conteudo />} />
                <Route path="/pipeline" element={<Pipeline />} />
                <Route path="/calendario" element={<Calendario />} />
                <Route path="/mapa" element={<MapaVotos />} />
                <Route path="/agenda" element={<Agenda />} />
                <Route path="/gabinete" element={<GabineteDigital />} />
                <Route path="/juridico" element={<Juridico />} />
                <Route path="/drive" element={<Drive />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </Suspense>
          </main>
        </div>
    </div>
  );

  return (
    <BrowserRouter>
      <Suspense fallback={<div style={{padding: '40px', textAlign: 'center', color: 'var(--text-muted)'}}>Carregando sistema...</div>}>
        <Routes>
          {/* Rota Pública (Landing Page) */}
          <Route path="/eu-apoio" element={<EuApoio />} />

          {/* Rota de Login */}
          <Route path="/login" element={
            isAuthenticated ? <Navigate to="/" /> : (
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
            )
          } />

          {/* Rotas Privadas (CRM) */}
          <Route path="*" element={
            <PrivateRoute>
              <InternalLayout />
            </PrivateRoute>
          } />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
