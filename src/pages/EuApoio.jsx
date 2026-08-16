import React, { useState, useRef, useEffect } from 'react';

export default function EuApoio() {
  const [nome, setNome] = useState('');
  const [cidade, setCidade] = useState('');
  const [telefone, setTelefone] = useState('');
  
  const [imageSrc, setImageSrc] = useState(null);
  const [mergedImage, setMergedImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const canvasRef = useRef(null);

  // URL da nossa API no Google Sheets
  const GOOGLE_API_URL = "https://script.google.com/macros/s/AKfycbz9ohASvWnTahf8muhtNSXQXiWiKpUXhJw9OLwFOEZuEP74djxFpdaagEqc8TgQ54Z-TQ/exec";

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
        // Define canvas size to match frame (e.g. 1080x1920 for stories or square 1080x1080)
        // Adjusting to 1080x1920 to fit standard frame sizes
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
        frameImg.src = '/moldura-apoio.png'; // A imagem que copiamos para a pasta public
      };
      userImg.src = imageSrc;
    }
  }, [imageSrc]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      sheet: "Apoiadores",
      id: Date.now().toString(),
      nome,
      telefone,
      cidade,
      lideranca: "Formulário Eu Apoio (Orgânico)"
    };

    try {
      await fetch(GOOGLE_API_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
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
    const text = encodeURIComponent(`Eu apoio Hudson Tesura para Deputado Estadual! 33753 ✅\n\nVenha fazer parte da Força do Norte também! Acesse, monte sua foto com a nossa moldura e confirme seu apoio:\n👉 ${window.location.href}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  if (success) {
    return (
      <div style={{minHeight: '100vh', backgroundColor: '#111', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', textAlign: 'center'}}>
        <h1 style={{color: 'var(--primary)', fontSize: '32px', marginBottom: '15px'}}>Apoio Confirmado! ✅</h1>
        <p style={{fontSize: '18px', color: '#ccc', marginBottom: '30px'}}>Bem-vindo à Força do Norte, {nome.split(' ')[0]}!</p>
        
        {mergedImage && (
          <div style={{marginBottom: '30px', maxWidth: '300px'}}>
            <p style={{marginBottom: '10px', fontSize: '14px', color: 'var(--success)'}}>Sua foto oficial ficou pronta:</p>
            <img src={mergedImage} alt="Foto de Apoio" style={{width: '100%', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.5)'}} />
            <a href={mergedImage} download={`Apoio_Tesura_${nome}.jpg`} style={{display: 'block', marginTop: '15px', color: '#fff', backgroundColor: '#333', padding: '10px', borderRadius: '5px', textDecoration: 'none'}}>
              📥 Baixar Foto
            </a>
          </div>
        )}

        <button onClick={shareWhatsApp} style={{backgroundColor: '#25D366', color: 'white', padding: '15px 30px', border: 'none', borderRadius: '30px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', width: '100%', maxWidth: '300px', justifyContent: 'center'}}>
          Convidar no WhatsApp
        </button>
      </div>
    );
  }

  return (
    <div style={{minHeight: '100vh', backgroundColor: '#1A1A1A', color: '#fff', padding: '20px', fontFamily: 'Arial, sans-serif'}}>
      <div style={{maxWidth: '500px', margin: '0 auto'}}>
        
        <div style={{textAlign: 'center', marginBottom: '30px'}}>
          <h1 style={{fontSize: '36px', color: 'var(--primary)', margin: '0', fontWeight: '900'}}>33753</h1>
          <h2 style={{fontSize: '24px', margin: '5px 0 15px'}}>HUDSON TESURA</h2>
          <p style={{color: '#999'}}>Gere sua foto oficial da campanha e declare seu apoio pelo Norte de Minas.</p>
        </div>

        <div style={{backgroundColor: '#2A2A2A', padding: '20px', borderRadius: '10px', marginBottom: '20px'}}>
          <h3 style={{marginBottom: '15px', color: 'var(--primary)'}}>1. Escolha sua melhor foto</h3>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageUpload} 
            style={{width: '100%', padding: '10px', backgroundColor: '#111', borderRadius: '5px', color: '#fff', border: '1px solid #444'}}
          />
          {imageSrc && <p style={{fontSize: '12px', color: '#10B981', marginTop: '10px'}}>✅ Foto carregada com sucesso!</p>}
        </div>

        <div style={{backgroundColor: '#2A2A2A', padding: '20px', borderRadius: '10px', marginBottom: '30px'}}>
          <h3 style={{marginBottom: '15px', color: 'var(--primary)'}}>2. Confirme seu apoio</h3>
          <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
            <input required type="text" placeholder="Seu nome completo" value={nome} onChange={e => setNome(e.target.value)} style={{padding: '12px', borderRadius: '5px', border: '1px solid #444', backgroundColor: '#111', color: '#fff', width: '100%'}} />
            <input required type="text" placeholder="Sua Cidade" value={cidade} onChange={e => setCidade(e.target.value)} style={{padding: '12px', borderRadius: '5px', border: '1px solid #444', backgroundColor: '#111', color: '#fff', width: '100%'}} />
            <input required type="text" placeholder="Seu WhatsApp (com DDD)" value={telefone} onChange={e => setTelefone(e.target.value)} style={{padding: '12px', borderRadius: '5px', border: '1px solid #444', backgroundColor: '#111', color: '#fff', width: '100%'}} />
            
            <button type="submit" disabled={isSubmitting || !imageSrc} style={{padding: '15px', backgroundColor: (isSubmitting || !imageSrc) ? '#555' : 'var(--primary)', color: '#fff', border: 'none', borderRadius: '5px', fontSize: '18px', fontWeight: 'bold', cursor: (isSubmitting || !imageSrc) ? 'not-allowed' : 'pointer', marginTop: '10px'}}>
              {isSubmitting ? 'Registrando...' : 'GERAR FOTO E CONFIRMAR APOIO'}
            </button>
            {!imageSrc && <p style={{fontSize: '12px', color: '#ff4444', textAlign: 'center'}}>Você precisa enviar uma foto antes de confirmar.</p>}
          </form>
        </div>

      </div>

      {/* Canvas Oculto para renderização */}
      <canvas ref={canvasRef} style={{display: 'none'}}></canvas>

    </div>
  );
}
