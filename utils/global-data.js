export const getGlobalData = () => {
const name = process.env.BLOG_NAME ? decodeURI(process.env.BLOG_NAME) : 'Ajay Reels Pro';
const blogTitle = process.env.BLOG_TITLE ? decodeURI(process.env.BLOG_TITLE) : 'HD Video Downloader';
const footerText = process.env.BLOG_FOOTER_TEXT ? decodeURI(process.env.BLOG_FOOTER_TEXT) : '© 2026 Ajay Reels Pro';

return { name, blogTitle, footerText };
};
