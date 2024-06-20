import "./Time.css";
import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";

const Time = (props) => {
  const css = { backgroundColor: hexToRgba(props.corSecundaria, "0.6") };
  return (
    props.colaboradores.length > 0 && (
      <section className="time" style={css}>
        <input
          onChange={(evento) => props.mudarCor(evento.target.value, props.id)}
          value={props.corSecundaria}
          type="color"
          className="input-cor"
        />
        <h3 style={{ borderColor: props.corSecundaria }}>{props.nome}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => {
            return (
              <Colaborador
                key={colaborador.nome}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                corDeFundo={props.corSecundaria}
                aoDeletar={props.aoDeletar}
                id={colaborador.id}
                favorito={colaborador.favorito}
                aoFavoritar={props.aoFavoritar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Time;
