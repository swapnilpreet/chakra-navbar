import {
  Button,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { IconButton } from "@chakra-ui/react";
function OneForm() {
  return (
    <div>
      
      <Stack spacing={4}>
      <Text mb="8px">Candidate Name</Text>
        <InputGroup>
          <InputLeftElement children={<Icon name="phone" color="gray.300" />} />
          <Input type="phone" placeholder="Phone number" />
        </InputGroup>
      </Stack>
      <Stack spacing={3}>
      <Text size="xs">Card Number</Text>
        <Input variant="flushed" />
      </Stack>
      <Button
        size="md"
        height="48px"
        width="200px"
        border="none"
        backgroundColor="pink"
      >
        PAY
      </Button>
    </div>
  );
}

export default OneForm;
