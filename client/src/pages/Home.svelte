<script>
    import {
      Button,
      Icon
    } from "smelte";


    import { createEventDispatcher } from "svelte";

    const dispatchermodule=createEventDispatcher();
  </script>
  

<main>
	<h1>Homepage</h1>
    <p>This page should show once a user is logged in.</p>
	
	<Button on:click={()=>{dispatchermodule("navigate",2)}}>New Agenda</Button>
    <Button on:click={()=>{dispatchermodule("navigate",3)}}>Notes Archive</Button>
</main>