export const MapSection = ({ locations }: { locations: any[] }) => {
  return (
    <section className="et-slide" id="tab-map">
      <h1>Mapa</h1>
      <br />
      <form id="markerForm">
        <label htmlFor="markerPosition" className="labelfor">Selecciona la posición del marcador:</label>
        <select id="markerPosition" className="custom-select" name="markerPosition">
          {locations.map((location, index) => (
            <option key={index} value={`${location.Latitude}, ${location.Longitude}`}>
              {location.Name}
            </option>
          ))}
        </select>
        <button type="button" className="btn btn-outline-primary" onClick={() => console.log("Actualizar Marcador")}>
          Actualizar Marcador
        </button>
      </form>
      <br />
      <div id="map"></div>
    </section>
  );
};