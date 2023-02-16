<script>
    import {
      Button,
      Icon
    } from "smelte";

    
  import { createEventDispatcher } from "svelte";

    const dispatchermodule = createEventDispatcher();
  </script>
  

<main>
	<h1>Authentication</h1>
	
	<Button on:click={()=>{dispatchermodule("navigate",1)}}>Bypass Authentication</Button>
</main>