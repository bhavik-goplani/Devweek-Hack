<script>
  import { Button, Icon } from "smelte";
  import { createEventDispatcher } from "svelte";
  import Select from "../components/Select.svelte";

  const dispatchermodule = createEventDispatcher();
</script>

<main>
  <h4>New Meeting Agenda</h4>
  <div class="select-box">
    <Select />
  </div>

  <Button
    on:click={() => {
      dispatchermodule("navigate", 1);
    }}>Home</Button
  >
  <Button>Next</Button>
</main>

<style>
  .select-box{
    display: flex;
    justify-content: center;

    size: 10%;
    margin-top: 10%;
    margin-bottom: 10%;
  }
</style>