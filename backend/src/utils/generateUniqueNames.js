import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";

export const generateUniqueRoomName = uniqueNamesGenerator({
  dictionaries: [adjectives, colors, animals],
  style: "lowerCase",
  separator: "_",
});
