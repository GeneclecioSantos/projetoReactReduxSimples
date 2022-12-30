import React from "react";
import Card from "./Card";

import { connect } from "react-redux";

// eslint-disable-next-line import/no-anonymous-default-export
const Soma = (props) => {
  const { min, max } = props;
  return (
    <Card title="Soma dos Números" blue>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{max + min + min}</strong>
        </span>
      </div>
    </Card>
  );
};

function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

export default connect(mapStateToProps)(Soma);
