import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "../src/styles/theme"
import GlobalStyle from "../src/styles/global"

export function wrapRootElement({ element }) {
  return (
    <>
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
      <GlobalStyle />
    </>
  )
}
