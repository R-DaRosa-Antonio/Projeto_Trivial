import { useState } from "react";
import { ICurso } from "../../../@libs/types";


export function CursoCreate() {
  const [curso, setCurso] = useState<ICurso>({
    name: '',
    active: true
  });

  return (
    <CursoForm curso={curso} setCurso={setCurso}  showForm={true} />    
  )
}