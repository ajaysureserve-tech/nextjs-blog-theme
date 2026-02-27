import { useState } from 'react';

export default function Home() {
  const [url, setUrl] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    if (!url) return alert("Please paste a link first!");
    setLoading(true);
    setData(null); // Purana data clear karne ke liye
    
    try {
      // BADLAV 1: Humne direct aapka Render URL daal diya hai
      const apiBase = "https://ajay-reels-api.onrender.com";
      
      const res = await fetch(`${apiBase}/api/download?url=${encodeURIComponent(url)}`);
      
      if (!res.ok) throw new Error("Server response error");

      const result = await res.json();
      
      if (result.status === "success") {
        setData(result);
      } else {
        alert("Video nahi mil payi. Link sahi se check karein.");
      }
    } catch (err) {
      // BADLAV 2: Error message ko thoda dhang ka banaya hai
      alert("Server jaag raha hai (Render Free Tier)! 20 second rukk kar dobara 'Download Now' dabayein.");
    }
    setLoading(false);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f4f4f9', 
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      color: '#333' 
    }}>
      {/* Header */}
      <nav style={{ backgroundColor: '#ff4500', padding: '15px', color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: '1.5rem' }}>
        Ajay Reels Pro
      </nav>

      <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '10px' }}>Video & Reels Downloader</h2>
        <p style={{ color: '#666', marginBottom: '30px' }}>Paste Instagram or YouTube link to download in HD</p>
        
        {/* Input Box Area */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input 
            type="text" 
            placeholder="https://www.instagram.com/reels/..." 
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            style={{ 
              padding: '15px', 
              borderRadius: '8px', 
              border: '2px solid #ddd', 
              fontSize: '1rem',
              outline: 'none'
            }}
          />
          <button 
            onClick={handleDownload}
            disabled={loading}
            style={{ 
              padding: '15px', 
              backgroundColor: loading ? '#ccc' : '#ff4500', 
              color: 'white', 
              border: 'none', 
              borderRadius: '8px', 
              fontSize: '1.1rem', 
              fontWeight: 'bold', 
              cursor: 'pointer',
              transition: '0.3s'
            }}
          >
            {loading ? 'Server jaag raha hai...' : 'Download Now'}
          </button>
        </div>

        {/* Result Area */}
        {data && (
          <div style={{ 
            marginTop: '40px', 
            backgroundColor: 'white', 
            padding: '20px', 
            borderRadius: '12px', 
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)' 
          }}>
            <img 
              src={data.thumbnail} 
              alt="Thumbnail" 
              style={{ width: '100%', borderRadius: '8px', marginBottom: '15px' }} 
            />
            <h4 style={{ marginBottom: '20px' }}>{data.title}</h4>
            {/* Direct download link download attribute ke saath */}
            <a href={data.download_url} target="_blank" rel="noreferrer">
              <button style={{ 
                width: '100%', 
                padding: '15px', 
                backgroundColor: '#28a745', 
                color: 'white', 
                border: 'none', 
                borderRadius: '8px', 
                fontSize: '1.2rem', 
                fontWeight: 'bold',
                cursor: 'pointer'
              }}>
                💾 Save to Device
              </button>
            </a>
          </div>
        )}

        {/* Info Icons */}
        <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'space-around', opacity: 0.6 }}>
          <span>📸 Instagram</span>
          <span>📺 YouTube</span>
          <span>🎵 TikTok</span>
        </div>
      </div>
      
      <footer style={{ marginTop: '50px', padding: '20px', textAlign: 'center', fontSize: '0.8rem', color: '#999' }}>
        &copy; 2026 Ajay Reels Pro - For Personal Use Only
      </footer>
    </div>
  );
}
