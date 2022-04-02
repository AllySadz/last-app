import React from "react";
import Meaning from "./Meaning.jsx";
import Phonetic from "./Phonetic.jsx";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    console.log(props.results.phonetics);
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>

          {props.results.phonetics.map(function (phonetic, index) {
            if (index === props.results.phonetics.length - 1) {
              return (
                <div key={index}>
                  <Phonetic phonetic={phonetic} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
