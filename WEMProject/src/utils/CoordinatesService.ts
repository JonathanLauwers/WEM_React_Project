import React from "react";
import data from '../localdata/coordinates.json';

export const getCoordinates = (id: number) => {
    let coordinates = data;
    return coordinates.find(c => c.id == id);
}