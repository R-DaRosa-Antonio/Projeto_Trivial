import { useState } from "react";
import { ITurma } from "../../../@libs/types";
import { TurmaForm } from "./form";

export function TurmaCreate() {
  const [turma, setTurma] = useState<ITurma>({
    title: '',
    description: '',
    poster: '',
    ageRating: '',
  });

  return (
    <TurmaForm turma={turma} setTurma={setTurma}  showForm={true} />    
  )
}