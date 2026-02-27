import React, { useState } from 'react';

export default function AjayReelsApp() {
const [url, setUrl] = useState('');
const [loading, setLoading] = useState(false);
const [videoData, setVideoData] = useState(null);

const handleDownload = async () => {
if (!url) return alert("Please paste a video link!");

setLoading(true);
setVideoData(null);

try {
// NOTE: Is URL ko apne Render.com wale backend se replace karein
const response = await fetch(`https://your-api-name.onrender.com/api/download?url=${encodeURIComponent(url)}`);
const data = await response.json();

if (data.success) {
setVideoData(data);
} else {
alert("Video not found or link private.");
}
} catch (err) {
alert("Backend error! Setup your Python API first.");
} finally {
setLoading(false);
}
};

return (
<div style={styles.body}>
{/* Dynamic Header */}
<header style={styles.header}>
<div style={styles.logoSection}>
<span style={styles.logoIcon}>📥</span>
<h1 style={styles.logoText}>Ajay Reels Pro</h1>
</div>
<div style={styles.coinBadge}>🪙 100</div>
</header>

{/* Search Bar - Vidmate Style but Modern */}
<div style={styles.searchWrapper}>
<div style={styles.inputContainer}>
<input
type="text"
placeholder="Paste Social Media Video Link..."
value={url}
onChange={(e) => setUrl(e.target.value)}
style={styles.input}
/>
<button onClick={handleDownload} style={styles.goBtn}>
{loading ? '...' : 'FETCH'}
</button>
</div>
</div>

{/* Quick Access Icons */}
<div style={styles.iconGrid}>
{[
{ name: 'Instagram', icon: '📸', color: '#E1306C' },
{ name: 'Facebook', icon: '📘', color: '#1877F2' },
{ name: 'Twitter', icon: '🐦', color: '#1DA1F2' },
{ name: 'More', icon: '➕', color: '#666' }
].map((item) => (
<div key={item.name} style={styles.iconItem}>
<div style={{...styles.iconCircle, border: `2px solid ${item.color}`}}>{item.icon}</div>
<span style={styles.iconLabel}>{item.name}</span>
</div>
))}
</div>

{/* Result Section */}
{videoData && (
<div style={styles.resultCard}>
<img src={videoData.thumbnail} style={styles.thumbnail} alt="Preview" />
<h3 style={styles.title}>{videoData.title}</h3>
<a href={videoData.formats[0].url} download style={styles.dlBtn}>
⬇️ Download Full HD (MP4)
</a>
</div>
)}

{/* Bottom Tab Bar (App Experience) */}
<nav style={styles.bottomNav}>
<div style={styles.navActive}>🏠<br/>Home</div>
<div style={styles.navItem}>📂<br/>Files</div>
<div style={styles.navItem}>⚡<br/>Status</div>
<div style={styles.navItem}>👤<br/>Account</div>
</nav>
</div>
);
}

const styles = {
body: { backgroundColor: '#F0F2F5', minHeight: '100vh', paddingBottom: '80px', fontFamily: 'Arial' },
header: { backgroundColor: '#FF4E00', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white' },
logoSection: { display: 'flex', alignItems: 'center', gap: '8px' },
logoIcon: { fontSize: '1.5rem', backgroundColor: 'white', borderRadius: '8px', padding: '2px' },
logoText: { margin: 0, fontSize: '1.2rem', fontWeight: 'bold' },
coinBadge: { backgroundColor: 'rgba(255,255,255,0.2)', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem' },
searchWrapper: { backgroundColor: '#FF4E00', padding: '20px', borderRadius: '0 0 30px 30px' },
inputContainer: { display: 'flex', backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', padding: '5px' },
input: { border: 'none', flex: 1, padding: '12px', outline: 'none', fontSize: '1rem' },
goBtn: { backgroundColor: '#222', color: 'white', border: 'none', padding: '0 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' },
iconGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', padding: '25px 20px' },
iconItem: { textAlign: 'center' },
iconCircle: { width: '55px', height: '55px', backgroundColor: 'white', borderRadius: '18px', display: 'flex', alignItems: 'center', justify_content: 'center', margin: '0 auto 8px', fontSize: '1.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' },
iconLabel: { fontSize: '0.75rem', fontWeight: '600', color: '#444' },
resultCard: { margin: '20px', backgroundColor: 'white', borderRadius: '15px', padding: '15px', textAlign: 'center', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' },
thumbnail: { width: '100%', borderRadius: '10px' },
title: { fontSize: '0.9rem', margin: '10px 0' },
dlBtn: { display: 'block', backgroundColor: '#00C853', color: 'white', textDecoration: 'none', padding: '15px', borderRadius: '10px', fontWeight: 'bold', marginTop: '10px' },
bottomNav: { position: 'fixed', bottom: 0, width: '100%', backgroundColor: 'white', display: 'flex', justifyContent: 'space-around', padding: '12px 0', borderTop: '1px solid #EEE' },
navItem: { textAlign: 'center', fontSize: '0.7rem', color: '#999' },
navActive: { textAlign: 'center', fontSize: '0.7rem', color: '#FF4E00', fontWeight: 'bold' }
};
