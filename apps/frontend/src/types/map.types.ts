import { CourseLocationType } from "./course.type";

export interface MapSectionProps {
  locations: CourseLocationType[];
}

export interface ChangeMapViewProps {
  coords: [number, number];
}

export interface MapDisplayProps {
  center: [number, number];
  zoom: number;
  locations: CourseLocationType[];
}