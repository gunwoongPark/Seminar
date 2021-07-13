import React from "react";
import OriginCounter from "../components/OriginCounter";

function OriginCounterContainer({ number, diff, setNumber, setDiff }) {
  const onIncrease = () => {
    setNumber(number + diff);
  };

  const onDecrease = () => {
    setNumber(number - diff);
  };

  const onSetDiff = (newDiff) => {
    setDiff(newDiff);
  };

  return (
    <OriginCounter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default OriginCounterContainer;
