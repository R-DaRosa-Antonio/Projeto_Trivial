import { API } from "../@libs/axios"
import { IAluno } from "../@libs/types";

const _ENDPOINT = '/Alunos';

const getAll = () => (API.get(_ENDPOINT));
const getById = (id: number) => (API.get(`${_ENDPOINT}/${id}`));
const remove = (id: number) => (API.delete(`${_ENDPOINT}/${id}`));  
const create = (data: IAluno) => (API.post(_ENDPOINT, data));
const update = (id: number, data: IAluno) => (API.put(`${_ENDPOINT}/${id}`, data));


export const AlunoService = {
  getAll,
  getById,
  create,
  update,
  remove,
}