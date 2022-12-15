import { memo } from "react";

import useCounter from "../hooks/useCounter";

import { Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";

const initialValue = 1;

const Counter = () => {
  const { count, increment, decrement, setCount } = useCounter(initialValue);

  const handleChange = ({ target: { value } }) => {
    if (value < initialValue || typeof value === "string") {
      return setCount(initialValue);
    }
    setCount(+value);
  };

  const isDisabled = count <= initialValue;
  return (
    <Box mt={5} ml={5}>
      <Button
        onClick={decrement}
        disabled={isDisabled}
        mr={2}
        colorScheme="orange"
        size="sm"
        variant="solid"
      >
        <MinusIcon />
      </Button>
      <Input
        onChange={handleChange}
        value={count}
        fontSize="15px"
        textAlign="center"
        focusBorderColor="red.200"
        p="4px"
        size="sm"
        htmlSize={1}
        width="auto"
        height="auto"
      ></Input>
      <Button
        onClick={increment}
        ml={2}
        colorScheme="orange"
        size="sm"
        variant="solid"
      >
        <AddIcon />
      </Button>
    </Box>
  );
};

export default memo(Counter);
