import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

const Review = ({ children }) => {
  return <Box>{children}</Box>;
};

const ReviewContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const ReviewHeading = ({ children }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const ReviewText = ({ children }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const ReviewAvatar = ({ src, name, title }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src}  mb={2} />
    </Flex>
  );
};

export default function ReviewCard({ review }) {
  return (
    <Box>
      <Stack direction={{ base: "column", md: "row" }}>
        <Review>
          <ReviewContent>
            <ReviewHeading>{review.name}</ReviewHeading>
            <ReviewText>{review.content}</ReviewText>
          </ReviewContent>
          <ReviewAvatar
            src={review.image}
            name={review.name}
            title={review.createdAt}
          />
        </Review>
      </Stack>
    </Box>
  );
}
