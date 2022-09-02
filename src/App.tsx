import { AppContainer, CardContainer, ColumnContainer, ColumnTitle } from "./styles"

export const App = () => {
  return <AppContainer>
    <ColumnContainer>
      <ColumnTitle>ToDo</ColumnTitle>
      <CardContainer>One</CardContainer>
      <CardContainer>Two</CardContainer>
      <CardContainer>Three</CardContainer>
    </ColumnContainer>
  </AppContainer>
}
