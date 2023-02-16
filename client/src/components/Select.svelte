

<script>
  import { Select, Checkbox } from "smelte";

 
  let selectedValue = "";


  let showList = false;


  const items = [
    { value: 1, text: "Sprint" },
    { value: 2, text: "Standup" },
    { value: 3, text: "General" },
    { value: 4, text: "Custom" },
  ];

  let selectedItems = [];

  function toggle(i) {
    return v => v.detail
      ? selectedItems.push(i)
      : selectedItems = selectedItems.filter(si => si !== i);
  }

  $: selectedLabel = selectedItems.map(i => i.text).join(", ");

  const label = "Select an agenda type.";
</script>


<Select bind:value={selectedValue} outlined autocomplete {label} {items} />
