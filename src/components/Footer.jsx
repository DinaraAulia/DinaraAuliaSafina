const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
      <h1 className="text-2xl font-bold">Portfolio</h1>
      <div className="flex gap-7">
        <a href="#beranda">Beranda</a>
        <a href="#tentang">Tentang</a>
        <a href="#proyek">Proyek</a>
      </div>
      <div className="flex items-center gap-3">
        <a href="https://github.com/DinaraAulia" target="_blank" rel="noopener noreferrer">
          <i className="ri-github-fill ri-2x"></i>
        </a>
        <a href="https://www.instagram.com/diinaraas_?igsh=MWw4ODE4NmNseXk3NA==" target="_blank" rel="noopener noreferrer">
          <i className="ri-instagram-fill ri-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/dinaraauliasafina/" target="_blank" rel="noopener noreferrer">
          <i className="ri-linkedin-fill ri-2x"></i>
        </a>
        <a href="https://youtube.com/@dinaraauliasafina?si=G-kIdclJff4y-Qkp" target="_blank" rel="noopener noreferrer">
          <i className="ri-youtube-fill ri-2x"></i>
        </a>
      </div>
    </div>
  )
}

export default Footer