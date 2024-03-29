import {
  Box,
  Container,
  Text,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  List,
  ListItem,
  ListIcon,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import {

  eligibility,
  modalities,
  uniqueness,
} from "../../data/knowMore";
function KnowMore() {
  return (
    <Container maxW={"container.xl"} py={12}>
      <Heading textAlign="center" fontSize={["4xl", "5xl"]}>Approach For Course Completion</Heading>

      <Box mt={24}>
        <Heading fontSize={"3xl"} textAlign={"center"}>
          {modalities.title}
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={12}>
          {modalities.items.map((item, i) => (
            <GridItem key={i}>
              <Box border="2px" rounded="xl" borderColor="blue.500" p={6}>
                <Heading fontSize={"xl"}>{item.subHeading}</Heading>
                <Text>{item.heading}</Text>
              </Box>
            </GridItem>
          ))}
        </SimpleGrid>
      </Box>

      <Box mt={24}>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {eligibility.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <List spacing={3} size={"xl"}>
                {eligibility.items.map((item, i) => (
                  <ListItem key={i}>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    {item}
                  </ListItem>
                ))}
              </List>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {uniqueness.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <List spacing={3} size={"xl"}>
                {uniqueness.items.map((item, i) => (
                  <ListItem key={i}>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    {item}
                  </ListItem>
                ))}
              </List>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>


    </Container>
  );
}

export default KnowMore;
