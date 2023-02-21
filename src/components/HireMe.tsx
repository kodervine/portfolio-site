import React from "react";
import { Title, Badge, Anchor } from "@mantine/core";

type Props = {};

const HireMe = (props: Props) => {
  return (
    <div>
      <Title order={6} mt={10}>
        Hire me:{" "}
      </Title>
      <Badge color="orange" size="sm" variant="dot" mr="10px">
        <Anchor
          href="https://drive.google.com/drive/folders/1mtB7QT5DY_l9n7blL6txMKN9G5mg4Iw_"
          target="_blank"
        >
          View my CV
        </Anchor>
      </Badge>
      <Badge color="green" size="sm" variant="dot" mr="10px">
        <Anchor href="mailto:anikwenzekelly@gmail.com" target="_blank">
          Send an email
        </Anchor>
      </Badge>
    </div>
  );
};

export default HireMe;
