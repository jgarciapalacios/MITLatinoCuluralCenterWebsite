import Cards from "./Cards";
import orgs from "../data/orgs.json";

const OrgCards = () => {
  return (
    <Cards
      data={orgs}
      dataDescription="LCC Member Organizations"
      cardClass="org-card"
    />
  );
};

export default OrgCards;
