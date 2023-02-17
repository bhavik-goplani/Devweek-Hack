<script>
  import Agenda from "../components/Agenda.svelte";
  import { TextField, Button } from "smelte";
  let agendaTitle = "";
  import { createEventDispatcher } from "svelte";
  const dispatchermodule = createEventDispatcher();
</script>

<Button
  on:click={() => {
    dispatchermodule("navigate", 2);
  }}>Back</Button
>

<div class="textfield-box">
    <TextField label="Agenda title" outlined bind:value={agendaTitle} />
  </div>

<Agenda />


<style>
    .textfield-box {
    display: flex;
    justify-content: center;
    font-size: small;

    size: 5%;
    margin-top: 5%;
    margin-bottom: 5%;
  }
</style>