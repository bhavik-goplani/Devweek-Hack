<script>
    import {
      Button,
      Icon
    } from "smelte";
  import { createEventDispatcher } from "svelte";

    const dispatcherModule=createEventDispatcher();
  </script>
  

<main>
	<h5 >Welcome to your new agenda assistant.</h5>
    
	
	<Button on:click={()=>{dispatcherModule("navigate",4)}}>Get Started</Button>
</main>