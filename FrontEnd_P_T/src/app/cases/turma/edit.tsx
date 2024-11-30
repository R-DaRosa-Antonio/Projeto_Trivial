import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ITurma } from "../../../@libs/types";
import { TurmaService } from "../../../services/turma.service";
import { TurmaForm } from "./form";

export function TurmaEdit() {
  const params = useParams();

  const [turma, setTurma] = useState<ITurma>({} as ITurma);

  useEffect(() => {
    
    if (params?.id) {
      TurmaService.getById(params.id)
        .then(result => {
          setTurma(result.data)
        })
    }
  }, [params]);

  return (
    <>
      <TurmaForm turma={turma} setTurma={setTurma} showForm={true} />
    </>
    
  )
}