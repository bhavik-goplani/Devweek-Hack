<script>
    import {
      Button,
      Icon
    } from "smelte";
  import { createEventDispatcher } from "svelte";
  import Select from "../components/Select.svelte";

  const dispatchermodule = createEventDispatcher();
  </script>
  

<main>
	<h2>New Agenda page</h2>
    <p>This page is where the user should select their agenda.</p>
    <Select />
	
	
    <Button>Next</Button>
    <Button on:click={()=>{dispatchermodule("navigate",1)}}>Home</Button>
</main>