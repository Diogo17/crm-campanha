import React, { useState, useRef, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function EuApoio() {
  const [nome, setNome] = useState('');
  const [cidade, setCidade] = useState('');
  const [telefone, setTelefone] = useState('');
  
  const [imageSrc, setImageSrc] = useState(null);
  const [mergedImage, setMergedImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const canvasRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setImageSrc(event.target.result);
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (imageSrc && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      const userImg = new Image();
      userImg.onload = () => {
        canvas.width = 1080;
        canvas.height = 1920;

        // Desenhar a foto do usuário centralizada e cortada (cover)
        const scale = Math.max(canvas.width / userImg.width, canvas.height / userImg.height);
        const x = (canvas.width / 2) - (userImg.width / 2) * scale;
        const y = (canvas.height / 2) - (userImg.height / 2) * scale;
        ctx.drawImage(userImg, x, y, userImg.width * scale, userImg.height * scale);

        // Desenhar a moldura por cima
        const frameImg = new Image();
        frameImg.onload = () => {
          ctx.drawImage(frameImg, 0, 0, canvas.width, canvas.height);
          setMergedImage(canvas.toDataURL('image/jpeg', 0.9));
        };
        frameImg.src = '/moldura-apoio.png'; 
      };
      userImg.src = imageSrc;
    }
  }, [imageSrc]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, 'apoiadores'), {
        nome,
        telefone,
        cidade,
        lideranca: "Formulário Eu Apoio (Orgânico)",
        timestamp: serverTimestamp()
      });
      setSuccess(true);
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao enviar. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const shareWhatsApp = () => {
    const text = encodeURIComponent(`Eu apoio Hudson Tesura para Deputado Estadual! 33753 ✅\n\nVenha fazer parte da Força do Norte também! Acesse, monte sua foto com a nossa moldura oficial:\n👉 ${window.location.href}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  if (success) {
    return (
      <div style={{minHeight: '100vh', backgroundColor: '#050505', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', textAlign: 'center'}}>
        <h1 style={{color: '#c1121f', fontSize: '32px', marginBottom: '15px'}}>Apoio Confirmado! ✅</h1>
        <p style={{fontSize: '18px', color: '#ccc', marginBottom: '30px'}}>Bem-vindo à Força do Norte, {nome.split(' ')[0]}!</p>
        
        {mergedImage && (
          <div style={{marginBottom: '30px', maxWidth: '300px', width: '100%'}}>
            <p style={{marginBottom: '15px', fontSize: '15px', color: '#10B981'}}>Sua foto oficial ficou pronta:</p>
            <img src={mergedImage} alt="Foto de Apoio" style={{width: '100%', borderRadius: '15px', border: '2px solid #333', boxShadow: '0 10px 25px rgba(193, 18, 31, 0.2)'}} />
            <a href={mergedImage} download={`Apoio_Tesura_${nome}.jpg`} style={{display: 'block', marginTop: '15px', color: '#fff', backgroundColor: '#333', padding: '15px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold'}}>
              📥 Baixar Minha Foto
            </a>
          </div>
        )}

        <button onClick={shareWhatsApp} style={{backgroundColor: '#25D366', color: 'white', padding: '15px 30px', border: 'none', borderRadius: '8px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', width: '100%', maxWidth: '300px', justifyContent: 'center'}}>
          Convidar Amigos
        </button>
      </div>
    );
  }

  return (
    <div style={{minHeight: '100vh', backgroundColor: '#050505', color: '#fff', padding: '0', fontFamily: 'Arial, sans-serif'}}>
      
      {/* Banner Oficial do Candidato */}
      <div style={{width: '100%', backgroundColor: '#c1121f', position: 'relative'}}>
        <img 
          src="/foto-convite.png" 
          alt="Hudson Tesura" 
          style={{width: '100%', maxHeight: '400px', objectFit: 'cover', display: 'block'}} 
        />
        <div style={{position: 'absolute', bottom: '0', left: '0', width: '100%', height: '50%', background: 'linear-gradient(to top, #050505 0%, transparent 100%)'}}></div>
      </div>

      <div style={{maxWidth: '500px', margin: '-40px auto 0', padding: '20px', position: 'relative', zIndex: 10}}>
        
        <div style={{textAlign: 'center', marginBottom: '30px'}}>
          <h2 style={{fontSize: '28px', margin: '0', fontWeight: '900', color: '#fff'}}>VENHA PARA A FORÇA DO NORTE</h2>
          <p style={{color: '#aaa', fontSize: '15px', marginTop: '10px'}}>Gere sua foto oficial da campanha e declare seu apoio.</p>
        </div>

        <div style={{backgroundColor: '#111', padding: '25px', borderRadius: '12px', marginBottom: '20px', border: '1px solid #222'}}>
          <h3 style={{marginBottom: '15px', color: '#c1121f', fontSize: '18px'}}>1. Escolha sua melhor foto</h3>
          <p style={{color: '#777', fontSize: '13px', marginBottom: '15px'}}>Selecione uma foto do seu rosto para encaixar na moldura.</p>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageUpload} 
            style={{width: '100%', padding: '12px', backgroundColor: '#000', borderRadius: '8px', color: '#fff', border: '1px solid #333'}}
          />
          {imageSrc && <p style={{fontSize: '13px', color: '#10B981', marginTop: '10px', fontWeight: 'bold'}}>✅ Foto carregada!</p>}
        </div>

        <div style={{backgroundColor: '#111', padding: '25px', borderRadius: '12px', marginBottom: '30px', border: '1px solid #222'}}>
          <h3 style={{marginBottom: '20px', color: '#c1121f', fontSize: '18px'}}>2. Preencha seus dados</h3>
          <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
            <input 
              required 
              type="text" 
              placeholder="Seu nome completo" 
              value={nome} 
              onChange={e => setNome(e.target.value)} 
              style={{padding: '15px', borderRadius: '8px', border: '1px solid #333', backgroundColor: '#000', color: '#fff', width: '100%', outline: 'none'}} 
              onFocus={e => e.target.style.borderColor = '#c1121f'}
              onBlur={e => e.target.style.borderColor = '#333'}
            />
            <input 
              required 
              type="text" 
              placeholder="Sua Cidade" 
              value={cidade} 
              onChange={e => setCidade(e.target.value)} 
              style={{padding: '15px', borderRadius: '8px', border: '1px solid #333', backgroundColor: '#000', color: '#fff', width: '100%', outline: 'none'}} 
              onFocus={e => e.target.style.borderColor = '#c1121f'}
              onBlur={e => e.target.style.borderColor = '#333'}
            />
            <input 
              required 
              type="text" 
              placeholder="Seu WhatsApp (com DDD)" 
              value={telefone} 
              onChange={e => setTelefone(e.target.value)} 
              style={{padding: '15px', borderRadius: '8px', border: '1px solid #333', backgroundColor: '#000', color: '#fff', width: '100%', outline: 'none'}} 
              onFocus={e => e.target.style.borderColor = '#c1121f'}
              onBlur={e => e.target.style.borderColor = '#333'}
            />
            
            <button 
              type="submit" 
              disabled={isSubmitting || !imageSrc} 
              style={{
                padding: '18px', 
                backgroundColor: (isSubmitting || !imageSrc) ? '#333' : '#c1121f', 
                color: (isSubmitting || !imageSrc) ? '#666' : '#fff', 
                border: 'none', 
                borderRadius: '8px', 
                fontSize: '18px', 
                fontWeight: '900', 
                cursor: (isSubmitting || !imageSrc) ? 'not-allowed' : 'pointer', 
                marginTop: '15px',
                textTransform: 'uppercase',
                boxShadow: (isSubmitting || !imageSrc) ? 'none' : '0 4px 15px rgba(193, 18, 31, 0.4)'
              }}>
              {isSubmitting ? 'Aguarde...' : 'CONFIRMAR APOIO E GERAR FOTO'}
            </button>
            {!imageSrc && <p style={{fontSize: '13px', color: '#ff4444', textAlign: 'center', marginTop: '10px'}}>Por favor, envie uma foto primeiro.</p>}
          </form>
        </div>

      </div>

      {/* Canvas Oculto para renderização */}
      <canvas ref={canvasRef} style={{display: 'none'}}></canvas>
    </div>
  );
}
