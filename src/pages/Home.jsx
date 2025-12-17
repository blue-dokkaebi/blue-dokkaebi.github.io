import SocialLinks from '../components/SocialLinks'
import './Home.css'

export default function Home() {
  return (
    <div className="home page">
      <div className="container">
        <div className="hero">
          <h1 className="hero-title">Sero</h1>
          <p className="hero-subtitle"></p>
          <p className="hero-description">
            Hi, nice to meet you!!! I'm Sero! <br />
            <em>세로 in Korean. Pronounced like Cero from Bleach...</em> <br /> <br /> 
            I love video games, especially ARPGs, roguelites, and gacha games. <br />
            Mostly chill streams where I yap while playing games, with the occasional collab. <br />
          </p>
        </div>
        <div className="home-links">
          <h2>Connect</h2>
          <SocialLinks size="large" />
        </div>
      </div>
    </div>
  )
}
