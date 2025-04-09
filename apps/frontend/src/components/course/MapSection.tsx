import React, { useCallback } from 'react';
import { CourseLocationType } from "../types/course.type";

export const MapSection = React.memo(({ locations }: { locations: CourseLocationType[] }) => {
  const handleUpdateMarker = useCallback(() => {
    console.log("Actualizar Marcador");
  }, []);

  return (
    <section className="et-slide" id="tab-map">
      <h1>Mapa</h1>
      <br />
      <form id="markerForm">
        <label htmlFor="markerPosition" className="labelfor">Selecciona la posición del marcador:</label>
        <select id="markerPosition" className="custom-select" name="markerPosition">
          {locations.map((location, index) => (
            <option key={index} value={`${location.latitude}, ${location.longitude}`}>
              {location.name}
            </option>
          ))}
        </select>
        <button type="button" className="btn btn-outline-primary" onClick={handleUpdateMarker}>
          Actualizar Marcador
        </button>
      </form>
      <br />
      <div id="map"></div>
    </section>
  );
});