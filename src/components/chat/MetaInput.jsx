import {
  Button,
  HStack,
  IconButton,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Tooltip,
  VisuallyHidden,
  VStack,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsImages } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
export default function MetaInput() {
  const fileRef = useRef();
  const [localImage, setLocalImage] = useState("");

  const handleImageChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      setLocalImage(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <Popover defaultIsOpen={false} isLazy lazyBehavior="unmount">
      <PopoverTrigger>
        <IconButton
          title="Image"
          colorScheme="whatsapp"
          isRound
          variant="solid"
          size={"sm"}
          icon={<BsImages size={24} />}
          aria-label="emoji picker"
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Image</PopoverHeader>
        <PopoverBody>
          <Button
            isFullWidth
            onClick={() => fileRef.current?.click()}
            leftIcon={<BsImages size={24} />}
          >
            Choose Image
          </Button>
          <VisuallyHidden>
            <input
              type={"file"}
              accept="image/*"
              onChange={handleImageChange}
              ref={fileRef}
            />
          </VisuallyHidden>
          {localImage && (
            <VStack mt={4} spacing={4}>
              <Image src={localImage} w={"full"} h={200} objectFit="contain" />
              <HStack>
                <Button size="sm" colorScheme={"twitter"}>
                  Send
                </Button>
                <Tooltip label="Delete Image">
                  <IconButton
                    size="sm"
                    colorScheme={"red"}
                    icon={<AiOutlineDelete size={24} />}
                  />
                </Tooltip>
              </HStack>
            </VStack>
          )}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
