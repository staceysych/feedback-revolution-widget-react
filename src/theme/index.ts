import { extendTheme } from "@chakra-ui/react";

import * as foundations from "./foundations";

const theme = extendTheme({
  ...foundations,
});

export default theme;
