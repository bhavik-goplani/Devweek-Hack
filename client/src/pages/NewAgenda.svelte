<script>
  import { Button, Icon } from "smelte";
  import { createEventDispatcher } from "svelte";
  import Select from "../components/Select.svelte";
  import { writable } from 'svelte/store'
  
  /*import {
    SprintAgenda,
    GeneralAgenda,
    CustomAgenda,
    StandupAgenda,
  } from "../components/agendaComponents/AgendaModule";*/
  import Agenda from "../components/Agenda.svelte";



  const dispatchermodule = createEventDispatcher();


  export let selectedAgendaTemplate;
</script>

<main>
  <h4>New Meeting Agenda</h4>

  <div class="select-box">
    <Select bind:value={selectedAgendaTemplate}/>
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

</style>
