import { API } from "../@libs/axios"
import { IProfessor } from "../@libs/types";

const _ENDPOINT = '/professores';

const getAll = () => (API.get(_ENDPOINT));
const getById = (id: string) => (API.get(`${_ENDPOINT}/${id}`));
const remove = (id: string) => (API.delete(`${_ENDPOINT}/${id}`));  
const create = (data: IProfessor) => (API.post(_ENDPOINT, data));
const update = (id: string, data: IProfessor) => (API.put(`${_ENDPOINT}/${id}`, data));


export const ProfessorService = {
  getAll,
  getById,
  create,
  update,
  remove,
}