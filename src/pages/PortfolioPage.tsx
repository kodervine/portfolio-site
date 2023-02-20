import { FC } from "react";
import { portfolioData, PortfolioInterface } from "../data";

const PortfolioPage: FC = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      {portfolioData.map((item: PortfolioInterface) => (
        <div key={item.title}>
          <h2>{item.title}</h2>
          <p>{item.description1}</p>
          <ul>
            {item.descriptionItems.split(",").map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <a href={item.moreDetailsLink}>More details</a>
          <p>Technologies used: {item.technologiesUsed.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default PortfolioPage;
