<script>
    import {
      Button,
      Icon
    } from "smelte";

    
  import { createEventDispatcher } from "svelte";

    const dispatchermodule = createEventDispatcher();
  </script>
  

<main>
	<h5>Authentication</h5>
	
	<Button on:click={()=>{dispatchermodule("navigate",1)}}>Bypass Authentication</Button>
</main>