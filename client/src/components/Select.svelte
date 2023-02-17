<script>
  import { Select } from "smelte";

  let selectedValue = "General";

  let showList = false;

  const items = [
    { value: 1, text: "Sprint" },
    { value: 2, text: "Standup" },
    { value: 3, text: "General" },
    { value: 4, text: "Custom" },
  ];

  let selectedItems = [];

  function toggle(i) {
    return (v) =>
      v.detail
        ? selectedItems.push(i)
        : (selectedItems = selectedItems.filter((si) => si !== i));
  }

  const label = "Select an agenda type.  ";
</script>

<div class="select-holder">
  <Select bind:value={selectedValue} outlined autocomplete {label} {items} />
</div>

<style>
  .select-holder{
    font-size: small;
  }
</style>
