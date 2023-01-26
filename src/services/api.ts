import { getAPIClient } from "./axios";

// Só para chamadas so browser, que não são server side renders
export const api = getAPIClient()