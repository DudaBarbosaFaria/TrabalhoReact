import * as S from './styles'
import { dados } from "../../services/dados"
import { ComponentCard } from '../../components'

export function Comentario() {
  return (
    <S.Section>
      {dados.map(item => (
        <ComponentCard
          key={item.id}
          nome={item.nome}
          lancamento={item.lancamento}
          comentario={item.comentario}
        />
      ))}
    </S.Section>
  )
}
