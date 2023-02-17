<script>
  import { Treeview, TextField } from "smelte";
  let data = [
    {
      text: "Topic 1",
      items: [
        { text: "Detail 1" },
        { text: "Detail 2" },
        { text: "Detail 3" },
        {
          text: "subtest4",
          items: [
            { text: "Detail 1" },
            { text: "Detail 2" },
            { text: "Detail 3" },
            { text: "Detail 4" },
          ],
        },
      ],
    },
    {
      text: "Topic 2",
      items: [
        { text: "Detail 1" },
        { text: "Detail 2" },
        { text: "Detail 3" },
        { text: "Detail 4" },
      ],
    },
  ];

  let inputData = "";
</script>

<p>{inputData}</p>
<div class="tree-wrapper">
  <h6 class="mb-3 mt-6">JSON for testing</h6>
  <TextField
    label="Test label"
    textarea
    rows="5"
    outlined
    bind:value={inputData}
   
  />
  <Treeview items={inputData} />
</div>



<style>
  .tree-wrapper {
    size: 10%;
    margin-left: 10%;
    margin-right: 10%;
    font-size: small;
  }
</style>
