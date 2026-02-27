import Link from 'next/link';
import { getGlobalData } from '../utils/global-data';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import React, { useState } from 'react';

export default function Index({ globalData }) {
const [url, setUrl] = useState('');
const [loading, setLoading] = useState(false);

const handleGo = () => {
if(!url) return alert("Paste Link First!");
setLoading(true);
// Yahan hum baad mein backend link connect karenge
setTimeout(() => {
alert("Backend Connection Pending! Please setup Render API.");
setLoading(false);
}, 1500);
};

return (
<Layout gradientColor="orange">
<SEO title={globalData.name} description={globalData.blogTitle} />
<main className="w-full" style={{ background: '#f0f2f5', minHeight: '100vh', paddingBottom: '50px' }}>

{/* Vidmate Style Header */}
<div style={{ background: '#ff4e00', padding: '40px 20px', borderRadius: '0 0 30px 30px', textAlign: 'center' }}>
<h1 style={{ color: 'white', fontSize: '2rem', marginBottom: '20px' }}>Ajay Reels Pro</h1>
<div style={{ display: 'flex', background: 'white', borderRadius: '15px', padding: '5px', maxWidth: '500px', margin: 'auto' }}>
<input
type="text"
placeholder="Paste Video Link..."
style={{ flex: 1, border: 'none', padding: '15px', outline: 'none', borderRadius: '15px' }}
value={url}
onChange={(e) => setUrl(e.target.value)}
/>
<button
onClick={handleGo}
style={{ background: '#222', color: 'white', border: 'none', padding: '0 25px', borderRadius: '12px', fontWeight: 'bold' }}
>
{loading ? '...' : 'GO'}
</button>
</div>
</div>

{/* Services Grid */}
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', padding: '30px 20px', maxWidth: '600px', margin: 'auto' }}>
{['📺 YT', '📸 Insta', '📘 FB', '🐦 X'].map(item => (
<div key={item} style={{ textAlign: 'center' }}>
<div style={{ background: 'white', height: '60px', width: '60px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px', fontSize: '1.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
{item.split(' ')[0]}
</div>
<span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>{item.split(' ')[1]}</span>
</div>
))}
</div>

<div style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
<p>Download HD Reels & Shorts Instantly</p>
</div>

</main>
</Layout>
);
}

export async function getStaticProps() {
const globalData = getGlobalData();
return { props: { globalData } };
}

       
