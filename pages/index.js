import Link from 'next/link';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
const handleGo = async () => {
if (!url) return alert("Paste Link First!");
setLoading(true);
try {
// Ye aapka naya Render API link hai
const res = await fetch(`https://ajay-reels-api.onrender.com/api/download?url=${encodeURIComponent(url)}`);
const data = await res.json();

if (data.download_url) {
// Isse video naye tab mein khul jayegi
window.open(data.download_url, '_blank');
} else {
alert("Video link nahi mila! Error: " + (data.message || "Unknown"));
}
} catch (err) {
console.error(err);
alert("Backend se connect nahi ho pa raha!");
}
setLoading(false);
};


       
