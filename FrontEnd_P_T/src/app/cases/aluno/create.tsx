import { useState } from "react";
import { IAluno } from "../../../@libs/types";
import { AlunoForm } from "./form";

export function AlunoCreate() {
  const [aluno, setAluno] = useState<IAluno>({
    name: ''
  });

  return (
    <AlunoForm aluno={aluno} setAluno={setAluno}  showForm={true} />    
  )
}