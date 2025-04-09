export interface Location {
  name: string;
  latitude: number;
  longitude: number;
}

export interface MapSectionProps {
  locations: Location[];
}

export interface ChangeMapViewProps {
  coords: [number, number];
}

export interface MapDisplayProps {
  center: [number, number];
  zoom: number;
  locations: Location[];
}