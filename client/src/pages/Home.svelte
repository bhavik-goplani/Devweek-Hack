<script>
  import { Button, Icon } from "smelte";

  import { createEventDispatcher } from "svelte";

  const dispatchermodule = createEventDispatcher();
</script>

<main>
  <h3>Home</h3>
  <div class="button-holder">
    <Button
      on:click={() => {
        dispatchermodule("navigate", 2);
      }}>New Agenda</Button
    >
  </div>
  <div class="button-holder">
    <Button
      on:click={() => {
        dispatchermodule("navigate", 3);
      }}>Notes Archive</Button
    >
  </div>
</main>

<style>
  .button-holder {
    display: block;
    margin-top: 5%;
    margin-bottom: 5%;
  }
</style>
