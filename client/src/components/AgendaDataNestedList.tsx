import { List, Box } from "@mantine/core";

function AgendaDataNestedList() {
  return (
    <Box sx={(theme) => ({textAlign: 'left', alignContent: 'center',
    padding: theme.spacing.xl})}>
      <List listStyleType="disc">
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
