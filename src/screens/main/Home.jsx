import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Container,
  useColorModeValue,
  HStack,
  Link,
  Avatar,
  Tooltip,
} from "@chakra-ui/react";

import ReviewCarousel from "../../components/main/home/ReviewCarousel";
import Video from "../../components/main/home/Video";
import { uniquenessTrainings } from "../../data/uniquenessTrainings";
import { collaborators } from "../../data/collaborators";

import Caption from "../../components/main/home/Caption";
import Features from "../../components/main/home/Features";
import { FaChevronCircleRight } from "react-icons/fa";

function Home() {
  const collaboratorBg = useColorModeValue(
    "linear(to-l, purple.400, blue.300)",
    "linear(to-l, purple.900, blue.300)"
  );
  const collaboratorHoverBg = useColorModeValue(
    "linear(to-l, blue.500, purple.400)",
    "linear(to-l, blue.800, purple.400)"
  );
  return (
    <Box>
      {/* Welcome section  */}
      <Box
        as="section"
        minH={"85vh"}
        display={"grid"}
        placeItems={"center"}
        bgImage="https://img.freepik.com/free-vector/abstact-hexagon-background-memphis-style_1017-31955.jpg?w=996"
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"center"}
        backgroundSize={"cover"}
      >
        <Caption />
      </Box>

      {/* Features section */}

      <Box as="section" mt={24}>
        <Container maxW={"container.xl"}>
          <Features />
        </Container>
      </Box>

      {/* Uniqueness Of Our Training  */}

      <Box as="section" my={24}>
        <Container maxW={"container.xl"}>
          <Heading fontSize={{ base: "4xl", md: "5xl" }}>
            Uniqueness Of Our Training
          </Heading>

          <SimpleGrid spacing={10} columns={[1, 1, 2, 3]} mt={12}>
            {uniquenessTrainings.map((uniquenessTraining, i) => (
              <Box
                key={i}
                spacing={6}
                p={8}
                boxShadow={"2xl"}
                textAlign={"center"}
                rounded={"xl"}
                display={"grid"}
                placeItems={"center"}
                border="1px"
                borderColor={"purple.500"}
              >
                <Text fontSize={"xl"} textAlign={"center"}>
                  {uniquenessTraining.title}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Google Ratings  */}

      {/* <Box my={24}>
        <Container maxW="container.xl">
          <Heading textAlign="center" fontSize={{ base: "4xl", md: "5xl" }}>
            Google Reviews
          </Heading>
          <Box mt={12} maxW={"md"} mx="auto">
            <ReviewCarousel />
          </Box>
        </Container>
      </Box> */}

      {/* videos collections  */}

      <Box as="section" my={24}>
        <Container maxW={"container.xl"}>
          <HStack justify={"space-between"}>
            <Heading textAlign="center" fontSize={{ base: "4xl", md: "5xl" }}>
              Videos
            </Heading>
            <Tooltip hasArrow label="More Videos" bg="purple" color="white">
              <Link href="/video-gallery">
                <Avatar
                  bg={"purple"}
                  color={"white"}
                  icon={<FaChevronCircleRight size={24} />}
                />
              </Link>
            </Tooltip>
          </HStack>
          <Box mt={12}>
            <Video />
          </Box>
        </Container>
      </Box>

      {/* collaborators */}
      <Box my={24}>
        <Container maxW="container.xl">
          <Heading fontSize={{ base: "4xl", md: "5xl" }}>Collaborators</Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={12}>
            {collaborators.map((collaborator, i) => (
              <GridItem key={i}>
                <a rel="noreferrer" href={collaborator.link} target={"_blank"}>
                  <Box
                    rounded="xl"
                    p={4}
                    bgGradient={collaboratorBg}
                    boxShadow={"2xl"}
                    textAlign={"center"}
                    cursor="pointer"
                    _hover={{
                      bgGradient: collaboratorHoverBg,
                    }}
                  >
                    <Text
                      fontSize="xl"
                      textAlign="center"
                      color="white"
                      fontWeight={"bold"}
                    >
                      {collaborator.name}
                    </Text>
                  </Box>
                </a>
              </GridItem>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
