const Footer = () => {
  return (
    <header className="w-full h-28 bg-orange-600 text-slate-100 flex flex-col items-center justify-center mt-3 md:mt-10 text-center">
      <p className="text-lg font-semibold">© 2025 Tüm Hakları Saklıdır.</p>
      <div className="flex gap-4 mt-2">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-6 h-6" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="w-6 h-6" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" className="w-6 h-6" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733561.png" alt="LinkedIn" className="w-6 h-6" />
        </a>
      </div>
    </header>
  )
}

export default Footer;