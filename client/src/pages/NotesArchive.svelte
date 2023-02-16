<script>
    import {
      Button,
      Icon
    } from "smelte";
  import { createEventDispatcher } from "svelte";
    const dispatchermodule = createEventDispatcher();
  </script>
  

<main>
    <Button on:click={()=>{dispatchermodule("navigate",1)}}>Back</Button>
	<h1>Notes Archive</h1>
    <p>This page should display a users' notes.</p>
	
</main>