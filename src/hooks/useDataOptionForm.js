// custom hook with form logic
import { useState } from "react";

export const useDataOptionForm = () => {
  // use null or zero for starting values??
  const [numOfDataPoints, setNumOfDataPoints] = useState(0);
  const [Xrange, setXRange] = useState({ min: 0, max: 0 });
  const [Yrange, setYRange] = useState({ min: 0, max: 0 });

  const handleNumOfPointsChange = (e) => {
    // only accept positive values
    setNumOfDataPoints(Math.abs(Number(e.target.value)));
  };

  const handleXRangeMinChange = (e) => {
    setXRange({ ...Xrange, min: Number(e.target.value) });
  };
  const handleXRangeMaxChange = (e) => {
    setXRange({ ...Xrange, max: Number(e.target.value) });
  };

  const handleYRangeMinChange = (e) => {
    setYRange({ ...Yrange, min: Number(e.target.value) });
  };

  const handleYRangeMaxChange = (e) => {
    setYRange({ ...Yrange, max: Number(e.target.value) });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // need to check that max > min ?
    console.log("DATA SETTINGS: ", numOfDataPoints, Yrange, Xrange);
  };

  const handleClearForm = () => {
    setYRange({ min: 0, max: 0 });
    setXRange({ min: 0, max: 0 });
    setNumOfDataPoints(0);
    console.log("CLEARED FORM: ", numOfDataPoints, Yrange, Xrange);
  };
  return {
    numOfDataPoints,
    Xrange,
    Yrange,
    handleClearForm,
    handleFormSubmit,
    handleNumOfPointsChange,
    handleXRangeMaxChange,
    handleXRangeMinChange,
    handleYRangeMaxChange,
    handleYRangeMinChange,
  };
};
