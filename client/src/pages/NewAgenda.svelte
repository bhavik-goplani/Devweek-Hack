<script>
  import { Button, Icon } from "smelte";
  import { createEventDispatcher } from "svelte";
  import Select from "../components/Select.svelte";
  import Agenda from "../components/Agenda.svelte";

  import { TextField } from "smelte";

  const dispatchermodule = createEventDispatcher();

  export let title;
</script>

<main>
  <h4>New Meeting Agenda</h4>

  <div class="select-box">
    <Select />
  </div>

  <div class="textfield-box">
    <TextField label="Agenda title" outlined bind:value="{title}"/>
  </div>

  <Button
    on:click={() => {
      dispatchermodule("navigate", 1);
    }}>Home</Button
  >
  <Button
    on:click={() => {
      dispatchermodule("navigate", 5);
    }}>Next</Button
  >
</main>

<style>
  .select-box {
    display: flex;
    justify-content: center;

    size: 10%;
    margin-top: 10%;
    margin-bottom: 10%;
  }

  .textfield-box {
    display: flex;
    justify-content: center;
    font-size: small;

    size: 5%;
    margin-top: 10%;
    margin-bottom: 10%;
  }
</style>
