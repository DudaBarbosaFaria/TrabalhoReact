import { Section } from "./styles";
export interface ICard {
  nome: string
  lancamento: string
  comentario: string
}
export const Card = ({ nome, lancamento, comentario }: ICard) => {
  return (
    <Section>
      <aside>
        <h5>Nome:</h5>
        <p>{nome}</p>
      </aside>
      <aside>
        <h5>Lançamento:</h5>
        <p>{lancamento}</p>
      </aside>
      <aside>
        <h5>Comentário:</h5>
        <p>{comentario}</p>
      </aside>
    </Section>
  );
};
