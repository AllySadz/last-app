import React from "react";
import Synonyms from "./Synonyms.jsx";
import Example from "./Example";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>Used as a {props.meaning.partOfSpeech}</h3>
      <Synonyms synonyms={props.meaning.synonyms} />
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index} className="defItem">
            <div className="definition">{definition.definition}</div>
            <Example example={definition.example} />
          </div>
        );
      })}
    </div>
  );
}
