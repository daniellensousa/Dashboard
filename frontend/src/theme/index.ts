import { colors } from "./colors"
import { typography } from './typography'
import { borders } from "./borders"
import { shadows } from "./shadows"

const theme = {
    colors,
    typography,
    borders,
    shadows
}

export { theme }

export type ThemeType = typeof theme