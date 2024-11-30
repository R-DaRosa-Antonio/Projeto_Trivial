import { useState } from "react";
import { IProfessor } from "../../../@libs/types";
import { ProfessorForm } from "./form";

export function ProfessorCreate() {
  const [professor, setProfessor] = useState<IProfessor>({
    title: '',
  });

  return (
    <ProfessorForm professor={professor} setProfessor={setProfessor}  showForm={true} />    
  )
}