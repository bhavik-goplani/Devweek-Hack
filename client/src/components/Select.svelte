<script>
    import { Select, Checkbox } from "smelte";
  
    let value1 = "";
    let value2 = "";
    let value3 = "";
    let value4 = "";
  
    let showList = false;
  
    const items = [
      { value: 1, text: "One" },
      { value: 2, text: "Two" },
      { value: 3, text: "Three" },
      { value: 4, text: "Four" },
    ];
  
    let selectedItems = [];
  
    function toggle(i) {
      return v => v.detail
        ? selectedItems.push(i)
        : selectedItems = selectedItems.filter(si => si !== i);
    }
  
    $: selectedLabel = selectedItems.map(i => i.text).join(", ");
  
    const label = "A select";
  </script>




<p>Select may even be an autocomplete search component.</p>
<small>Selected: {value3 || 'nothing'}</small>
<Select bind:value={value3} outlined autocomplete {label} {items} />

