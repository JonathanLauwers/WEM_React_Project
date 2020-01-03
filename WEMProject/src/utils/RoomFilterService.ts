import React from "react";

export const filterRoomListByName = (roomList: Room[]) => {
    return roomList.sort((a, b) => {
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      })
}

export const filterRoomListById = (roomList: Room[]) => {
    return roomList.sort((a, b) => {
        if(a.id < b.id) { return -1; }
        if(a.id > b.id) { return 1; }
        return 0;
      })
}