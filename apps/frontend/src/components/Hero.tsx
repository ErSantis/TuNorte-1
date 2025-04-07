export const Hero = ({ name }: { name: string }) => {
  return (
    <section className="et-hero-tabs">
      <h1>{name}</h1>
      <div className="et-hero-tabs-container">
        <a className="et-hero-tab" href="#tab-information">Informacion</a>
        <a className="et-hero-tab" href="#tab-schedule">Horarios</a>
        <a className="et-hero-tab" href="#tab-tasks">Tareas</a>
        <a className="et-hero-tab" href="#tab-map">Mapa</a>
        <a href="/subjects" id="logout">Regresar</a>
        <span className="et-hero-tab-slider"></span>
      </div>
    </section>
  );
};