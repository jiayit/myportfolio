import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (

      <HStack spacing={4}>
        <Box 
          backgroundColor="white"
          paddingBottom={5}
          rounded="3xl"
          textColor="black"
        >
        <VStack spacing={3}>
          <Image src={imageSrc} rounded="3xl"/>
          <Box paddingX={4}> 
            <Heading size="md">{title}</Heading>
            <Text>{description}</Text>
            <HStack spacing={2}> 
              <Text fontWeight="bold">see more</Text>
              <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </HStack>
          </Box>
        </VStack> 
        </Box>
      </HStack>
  ) 
};

export default Card;
