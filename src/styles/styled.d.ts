import "styled-components";
import { colors, button } from "@styles/theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof colors;
    button: typeof button;
  }
}
