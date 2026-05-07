import { useQuery, useMutation } from "@tanstack/react-query";
import { createRoom } from "../api/services/room.service.js";

export const useCreateRoom = () => {
  return useMutation({
    mutationFn: createRoom,
  });
};
