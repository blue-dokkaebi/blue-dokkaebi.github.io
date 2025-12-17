import './Lore.css'

export default function Lore() {
  return (
    <div className="lore page">
      <div className="container">
        <h1 className="page-title">Lore</h1>
        <p className="lore-description">This is my lore as a GIF...</p>
        <img src="/storyboard.gif" alt="storyboard" className="lore-gif" />
      </div>
    </div>
  )
}
