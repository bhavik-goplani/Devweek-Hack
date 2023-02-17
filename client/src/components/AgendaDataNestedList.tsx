import { List, Box } from "@mantine/core";

function AgendaDataNestedList() {
  const nestedItems = Array.from({ length: 3 }, (_, i) => (
    <List.Item key={i}>Topic {i+1}</List.Item>
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
        <List.Item>Topic</List.Item>
  
        <List.Item>
          First order item with list
          <List withPadding listStyleType="disc">
            <List.Item>Details</List.Item>
            <List.Item>Details</List.Item>
            <List.Item>
              Topic with details
              <List withPadding listStyleType="disc">
                <List.Item>Details</List.Item>
                <List.Item>Details</List.Item>
              </List>
            </List.Item>
            <List.Item>Details</List.Item>
          </List>
        </List.Item>
        <List.Item>Topic</List.Item>
      </List>
    </Box>
  );
}

export default AgendaDataNestedList;
