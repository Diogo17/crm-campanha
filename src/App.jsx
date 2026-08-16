import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { LayoutDashboard, Users, DollarSign, FolderGit2, LogOut, CalendarDays, BookOpen, Video, MapPin, Map, Scale, Smartphone, Menu } from 'lucide-react';
import './index.css';

// Firebase Auth
import { auth } from './firebase';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';

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
const PrivateRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true); // Evita piscar a tela de login ao dar F5
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Escuta mudanças no login do Firebase
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setIsLoadingAuth(false);
    });
    return () => unsubscribe();
  }, []);

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Conta criada com sucesso! Você já está logado.");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      alert("Erro: " + error.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
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

  if (isLoadingAuth) {
    return <div style={{display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', color: 'white', backgroundColor: '#0a0a0a'}}>Carregando...</div>;
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<div style={{padding: '40px', textAlign: 'center', color: 'var(--text-muted)'}}>Carregando sistema...</div>}>
        <Routes>
          {/* Rota Pública (Landing Page) */}
          <Route path="/eu-apoio" element={<EuApoio />} />

          {/* Rota de Login Segura (Firebase) */}
          <Route path="/login" element={
            isAuthenticated ? <Navigate to="/" /> : (
              <div className="login-container">
                <form className="login-box" onSubmit={handleAuth}>
                  <h1>HUDSON TESURA</h1>
                  <p style={{marginBottom: '20px', color: 'var(--text-muted)'}}>CRM de Campanha - Firebase Auth</p>
                  
                  <input 
                    type="email" 
                    placeholder="Seu E-mail" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{marginBottom: '10px'}}
                  />
                  <input 
                    type="password" 
                    placeholder="Sua Senha" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button type="submit" className="primary" style={{marginTop: '10px'}}>
                    {isRegistering ? 'Criar Conta' : 'Entrar no CRM'}
                  </button>
                  
                  <button 
                    type="button" 
                    onClick={() => setIsRegistering(!isRegistering)} 
                    style={{marginTop: '15px', background: 'none', color: 'var(--text-muted)', border: 'none', fontSize: '14px', textDecoration: 'underline', cursor: 'pointer'}}>
                    {isRegistering ? 'Já tenho uma conta. Fazer Login.' : 'Não tem conta? Criar Conta (Admin)'}
                  </button>
                </form>
              </div>
            )
          } />

          {/* Rotas Privadas (CRM) */}
          <Route path="*" element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <InternalLayout />
            </PrivateRoute>
          } />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
