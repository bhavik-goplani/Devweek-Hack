<script>
    import { Treeview } from "smelte";
    export let title;
</script>

<p>Title: {title}</p>

<Treeview items={[
    {
      text: "test",
      items: [
        { text: "subtest" },
        { text: "subtest2" },
        { text: "subtest3" },
        { text: "subtest4", 
          items: [
            { text: "subtest" },
            { text: "subtest2" },
            { text: "subtest3" },
            { text: "subtest4" },
          ]
        },
      ]
    },
    {
      text: "test2",
      items: [
        { text: "subtest" },
        { text: "subtest2" },
        { text: "subtest3" },
        { text: "subtest4" },
      ]
    },
    {
      text: "test3",
      items: [
        { text: "subtest" },
        { text: "subtest2" },
        { text: "subtest3" },
        { text: "subtest4" },
      ]
    }
  ]} />