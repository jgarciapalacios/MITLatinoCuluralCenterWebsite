import Cards from "./Cards";
import exec from "../data/exec.json";

const ExecCards = () => {
  return (
    <Cards
      data={exec}
      dataDescription={"Meet the Executive Board"}
      cardClass="exec-card"
    />
  );
};

export default ExecCards;
