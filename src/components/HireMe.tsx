import { Title, Badge, Anchor } from "@mantine/core";

const badgeData = [
  {
    color: "orange",
    text: "View my CV",
    link: "https://drive.google.com/drive/folders/1mtB7QT5DY_l9n7blL6txMKN9G5mg4Iw_",
  },
  {
    color: "green",
    text: "Send an email",
    link: "mailto:anikwenzekelly@gmail.com",
  },
  {
    color: "yellow",
    text: "See my portfolio",
    link: "https://chinenyeanikwenze.netlify.app/portfolio",
  },
];

const HireMe = () => {
  return (
    <div>
      <Title order={6} mt={10}>
        Hire me:{" "}
      </Title>

      {badgeData.map((badge, index) => (
        <Badge
          key={index}
          color={badge.color}
          size="sm"
          variant="dot"
          mr="10px"
        >
          <Anchor href={badge.link} target="_blank">
            {badge.text}
          </Anchor>
        </Badge>
      ))}
    </div>
  );
};

export default HireMe;
