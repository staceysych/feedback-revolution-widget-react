import {
  Button,
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  useDisclosure,
  PopoverCloseButton,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import theme from "../../theme";

import { ChakraProvider } from "@chakra-ui/react";

/* import { ReactComponent as ReviewIcon } from "./assets/review.svg";
import { ReactComponent as IdeaIcon } from "./assets/idea.svg";
import { ReactComponent as IssueIcon } from "./assets/issue.svg"; */

interface FeedbackWidgetProps {
  triggerComponent: React.ReactNode;
}

const widgetActions = [
  {
    // icon: <ReviewIcon height={44} width={44} />,
    label: "Review",
    subtitle: "Share what you think about the project",
  },
  {
    // icon: <IdeaIcon height={50} width={50} />,
    label: "Idea",
    subtitle: "Share how we can improve",
  },
  {
    // icon: <IssueIcon height={48} width={48} />,
    label: "Issue",
    subtitle: "Report a bug or issue",
  },
];

const FeedbackWidget = ({ triggerComponent }: FeedbackWidgetProps) => {
  const { onOpen, onClose, isOpen } = useDisclosure();

  const [subtitle, setSubtitle] = useState("");

  console.log(triggerComponent);

  return (
    <ChakraProvider theme={theme}>
      <Popover
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        placement="bottom"
      >
        <PopoverTrigger>{triggerComponent}</PopoverTrigger>
        <PopoverContent
          p={5}
          bg="base.white"
          boxShadow="lg"
          borderRadius={10}
          width={430}
          height={260}
          color={"base.text"}
          pb={2}
        >
          <PopoverCloseButton color={"base.text"} />
          <PopoverHeader
            border="0"
            textAlign={"center"}
            mb={4}
            transition="all 0.3s ease"
          >
            <Text fontSize="xl" fontWeight="bold">
              What's on your mind?
            </Text>
          </PopoverHeader>
          <Flex
            justifyContent={"space-between"}
            alignItems={"flex-start"}
            gap={6}
          >
            {widgetActions.map(({ label, subtitle: sub }) => (
              <Button
                display={"flex"}
                flexDir={"column"}
                height={118}
                flex={1}
                gap={4}
                onMouseEnter={() => setSubtitle(sub)}
                onMouseLeave={() => setSubtitle("")}
                color={"base.text"}
              >
                {/* {icon} */}
                {label}
              </Button>
            ))}
          </Flex>
          <Text fontSize="sm" m={2} textAlign="center">
            {subtitle}
          </Text>
          <Text
            fontSize="8px"
            mt={1}
            textAlign="center"
            color={"base.text"}
            opacity={0.5}
            margin={"auto 0 0 !important"}
          >
            by Feedback Revolution
          </Text>
        </PopoverContent>
      </Popover>
    </ChakraProvider>
  );
};

export default FeedbackWidget;
