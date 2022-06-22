import React from "react";
import Radio from "../06-componentes/_FormFields/Radio";

const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
    value: "React.createElement()", // valor default selecionado
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];

const AppDesafio = () => {
  const [respostas, setRespostas] = React.useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
  });

  const [slide, setSlide] = React.useState(0);
  const [resultado, setResultado] = React.useState(null);

  const resultado_final = () => {
    console.log("final");
    console.log(respostas);
    const corretas = perguntas.filter(
      ({ id, resposta }) => resposta === respostas[id]
    );

    console.log(corretas);

    setResultado(
      `Você acertou ${corretas.length} de um total de ${perguntas.length}`
    );
  };

  const handleChange = ({ target }) => {
    setRespostas({ ...respostas, [target.name]: target.value });
  };

  const handleSlide = () => {
    if (slide < perguntas.length - 1) {
      setSlide((slide) => {
        return slide + 1;
      });
    } else {
      setSlide(slide + 1); // para sumir com ultima perguta
      resultado_final();
    }
    // console.log(respostas);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {perguntas &&
        perguntas.map((p, index) => (
          <div
            key={p.id}
            style={{ marginTop: "1em", fontFamily: "monospace" }}
            className={index !== slide ? "hide" : ""}
          >
            <fieldset
              style={{
                padding: "2em",
                marginBottom: "1em",
                border: "2px solid #eee ",
              }}
            >
              <legend style={{ fontWeight: "bold" }}>
                {index + 1 + ")"} {p.pergunta}
              </legend>
              <Radio // Cria um bloco de radios atraves da propriedade [options]
                options={p.options} // lista de opcoes em forma de input radio.
                id={p.id} // id do bloco pergunta
                value={respostas[p.id]} // valor padrao. Se null nao seleciona ninguem
                onChange={handleChange}
              />
            </fieldset>
          </div>
        ))}

      {resultado ? (
        <p>{resultado}</p>
      ) : (
        <button onClick={handleSlide}>Próxima</button>
      )}
    </form>
  );
};

export default AppDesafio;
