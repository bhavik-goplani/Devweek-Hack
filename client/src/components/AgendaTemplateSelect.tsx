import * as React from "react";

import { Select } from '@mantine/core';

function AgendaTemplateSelect() {
  return (
    <Select
      label=""
      placeholder="Select agenda template..."
      searchable
      nothingFound="No options"
      data={['Sprint', 'Standup', 'General']}
    />
  );
}

export default AgendaTemplateSelect;