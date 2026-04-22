import './home.css'

export default function Home () {
  return (
    <>
      <main className='main-home'>
        <section className='presentacion'>
          <h1 className='presentacion_titulo'>Hi,<br /> I am<br />Web Developer</h1>
          <a className='presentacion_CV' href='/cv-luis-valdes.pdf' download>Descargar CV</a>
        </section>
        <section className='presentacion_descripcion'>
          <p><strong>Desarrollador Web Fullstack</strong><br />
            Trabajo bajo modalidad Freelance / Independent Contractor,
            facilitando la contratación internacional mediante facturación B2B
            y soporte para métodos de pago internacionales.<br />
            Ustedes realizan un pago directo
            y yo me encargo de toda la gestión administrativa y fiscal.
          </p>
        </section>
      </main>
    </>
  )
}
