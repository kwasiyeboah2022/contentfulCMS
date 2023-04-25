import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contenful CMS</h1>
          <p>
            Mukbang cupping af, cardigan post-ironic trust fund readymade
            sustainable. Banjo jawn fam, blue bottle irony kombucha selvage
            gochujang. Kinfolk gastropub brunch tonx. Fanny pack flannel 90's
            narwhal meditation semiotics. Fixie same dreamcatcher, mixtape
            shabby chic PBR&B paleo.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" />
        </div>
      </div>
    </section>
  )
}
export default Hero
