import { List, Box } from "@mantine/core";

function AgendaDataNestedList() {
  const nestedItems = Array.from({ length: 10 }, (_, i) => (
    <List.Item key={i}>First order item</List.Item>
  ));

  return (
    <Box
      sx={(theme) => ({
        textAlign: "left",
        alignContent: "center",
        padding: theme.spacing.xl,
      })}
    >
      <List listStyleType="disc">
        {nestedItems}
        <List.Item>First order item</List.Item>
        <List.Item>First order item</List.Item>
        <List.Item>
          First order item with list
          <List withPadding listStyleType="disc">
            <List.Item>Nested item</List.Item>
            <List.Item>Nested item</List.Item>
            <List.Item>
              Nested item with list
              <List withPadding listStyleType="disc">
                <List.Item>Event more nested</List.Item>
                <List.Item>Event more nested</List.Item>
              </List>
            </List.Item>
            <List.Item>Nested item</List.Item>
          </List>
        </List.Item>
        <List.Item>First order item</List.Item>
      </List>
    </Box>
  );
}

export default AgendaDataNestedList;
