import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IAluno } from "../../../@libs/types";
import { AlunoService } from "../../../services/aluno.service";

export function AlunoEdit() {
  const params = useParams();

  const [aluno, setAluno] = useState<IAluno>({} as IAluno);

  useEffect(() => {
    
    if (params?.id) {
      AlunoService.getById(params.id)
        .then(result => {
          setAluno(result.data)
        })
    }
  }, [params]);

  return (
    <>
      <AlunoForm aluno={aluno} setAluno={setAluno} showForm={true} />
    </>
    
  )
}