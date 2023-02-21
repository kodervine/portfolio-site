import { FC } from "react";
import { portfolioData, PortfolioInterface } from "../data";
import { Accordion } from "@mantine/core";
import { AiOutlinePlus } from "react-icons/ai";

const PortfolioPage: FC = () => {
  return (
    <div>
      <h1>Portfolio</h1>

      <Accordion
        chevron={<AiOutlinePlus size={16} />}
        styles={{
          chevron: {
            "&[data-rotate]": {
              transform: "rotate(45deg)",
            },
          },
        }}
      >
        {portfolioData.map((item: PortfolioInterface) => (
          <Accordion.Item value={item.title} key={item.title}>
            <Accordion.Control>{item.title}</Accordion.Control>
            <Accordion.Panel>
              {item.description1}
              <ul>
                {item.descriptionItems.split(",").map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <a href={item.moreDetailsLink}>More details</a>
              <p>Technologies used: {item.technologiesUsed.join(", ")}</p>
            </Accordion.Panel>
          </Accordion.Item>
        ))}

        <Accordion.Item value="flexibility">
          <Accordion.Control>Flexibility</Accordion.Control>
          <Accordion.Panel>
            Configure components appearance and behavior with vast amount of
            settings or overwrite any part of component styles
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="focus-ring">
          <Accordion.Control>No annoying focus ring</Accordion.Control>
          <Accordion.Panel>
            With new :focus-visible pseudo-class focus ring appears only when
            user navigates with keyboard
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default PortfolioPage;
