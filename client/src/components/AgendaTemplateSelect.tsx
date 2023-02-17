import * as React from "react";

import { Select } from '@mantine/core';

function AgendaTemplateSelect() {
  return (
    <Select
      label="Your favorite framework/library"
      placeholder="Pick one"
      searchable
      nothingFound="No options"
      data={['React', 'Angular', 'Svelte', 'Vue']}
    />
  );
}

export default AgendaTemplateSelect;