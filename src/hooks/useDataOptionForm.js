// custom hook with form logic
import { useState } from "react";

export const useDataOptionForm = () => {
  // use null or zero for starting values??
  const [numOfDataPoints, setNumOfDataPoints] = useState(0);
  const [XRange, setXRange] = useState({ min: 0, max: 0 });
  const [YRange, setYRange] = useState({ min: 0, max: 0 });

  const handleNumOfPointsChange = (e) => {
    // only accept positive values
    setNumOfDataPoints(Math.abs(Number(e.target.value)));
  };

  const handleXRangeMinChange = (e) => {
    setXRange({ ...XRange, min: Number(e.target.value) });
  };
  const handleXRangeMaxChange = (e) => {
    setXRange({ ...XRange, max: Number(e.target.value) });
  };

  const handleYRangeMinChange = (e) => {
    setYRange({ ...YRange, min: Number(e.target.value) });
  };

  const handleYRangeMaxChange = (e) => {
    setYRange({ ...YRange, max: Number(e.target.value) });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // need to check that max > min ?
    console.log("DATA SETTINGS: ", numOfDataPoints, YRange, XRange);
  };

  const handleClearForm = () => {
    setYRange({ min: 0, max: 0 });
    setXRange({ min: 0, max: 0 });
    setNumOfDataPoints(0);
    console.log("CLEARED FORM: ", numOfDataPoints, YRange, XRange);
  };
  return {
    numOfDataPoints,
    XRange,
    YRange,
    handleClearForm,
    handleFormSubmit,
    handleNumOfPointsChange,
    handleXRangeMaxChange,
    handleXRangeMinChange,
    handleYRangeMaxChange,
    handleYRangeMinChange,
  };
};
