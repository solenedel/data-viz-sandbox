// custom hook with form logic
import { useAppContext } from "../context/context";

export const useDataOptionForm = () => {
  const { numOfDataPointsContext, XRangeContext, YRangeContext } =
    useAppContext();
  const [numOfDataPoints, setNumOfDataPoints] = numOfDataPointsContext;
  const [XRange, setXRange] = XRangeContext;
  const [YRange, setYRange] = YRangeContext;

  // ----------------- form handlers below ------------------ //

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
    console.log("num of data points: ", numOfDataPoints);
    console.log("Xrange: ", XRange);
    console.log("Yrange: ", YRange);
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
