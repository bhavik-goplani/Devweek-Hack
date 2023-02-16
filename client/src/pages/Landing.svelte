<script>
    import {
      Button,
      Icon
    } from "smelte";
  import { createEventDispatcher } from "svelte";

    const dispatcherModule=createEventDispatcher();
  </script>
  

<main>
	<h2>Landing page</h2>
    <p>This page should show pre-authentication.</p>
	
	<Button on:click={()=>{dispatcherModule("navigate",4)}}>Get Started</Button>
</main>