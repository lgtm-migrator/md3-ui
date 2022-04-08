import {
  ThemeContext,
  ThemeProvider as EmotionThemeProvider,
} from "@emotion/react"
import { theme, Theme } from "@md3-ui/theme"
import { objectFilter } from "@md3-ui/utils"
import * as React from "react"
import { Platform, StyleProp, TextStyle as RNTextStyle } from "react-native"
import { StyleSheet } from "./style-sheet"

export interface ThemeProviderProps {
  theme?: Partial<Theme>
}

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => (
  <EmotionThemeProvider {...props} theme={theme} />
)

function useThemeWithoutDefault(defaultTheme?: Theme) {
  const contextTheme = React.useContext(ThemeContext) as Theme | undefined
  return contextTheme == null || Object.keys(contextTheme).length === 0
    ? (defaultTheme as Theme)
    : contextTheme
}

export function useTheme(defaultTheme: Theme = theme) {
  return useThemeWithoutDefault(defaultTheme)
}

const TextStyleContext = React.createContext<RNTextStyle>(undefined as any)

export interface TextStyleProviderProps {
  style?: StyleProp<RNTextStyle>
}

export const TextStyleProvider: React.FC<TextStyleProviderProps> = ({
  children,
  style: styleProp = {},
}) => {
  const style = React.useMemo(
    () => StyleSheet.flatten([styleProp]),
    [styleProp],
  )

  return (
    <TextStyleContext.Provider value={style}>
      {Platform.OS === "web" ? (
        <div
          style={{
            ...objectFilter(
              style,
              (v, k) => k === "color" || k === "fontFamily" || k === "fontSize",
            ),
            display: "contents",
          }}
        >
          {children}
        </div>
      ) : (
        children
      )}
    </TextStyleContext.Provider>
  )
}

export function useTextStyle() {
  return React.useContext(TextStyleContext)
}
