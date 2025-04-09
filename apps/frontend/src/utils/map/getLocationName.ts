import { Location } from "../../types/map.types";

export const getLocationName = (locations: Location[], lat: number, lng: number): string => {
    const location = locations.find(
        loc => loc.latitude === lat && loc.longitude === lng
    );
    return location ? location.name : 'Universidad del Norte';
};