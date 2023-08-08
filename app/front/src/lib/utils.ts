import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import api from "../../api/$api";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import aspida from "@aspida/fetch";

const fetchConfig = {
  baseURL: "http://localhost:3001/",
};

export const AspidaClient = api(aspida(fetch, fetchConfig));
