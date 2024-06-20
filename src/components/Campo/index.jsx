import "./Campo.css";

const Campo = (props) => {

    const { type='type'} = props
  const aoDigitado = (e) => {
    props.aoAlterado(e.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{props.label}</label>
      <input
        type={type}
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Campo;
