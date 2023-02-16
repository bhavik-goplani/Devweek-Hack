<script>
	import "smelte/src/tailwind.css" ;
	import Landing from "./pages/Landing.svelte";
	import Home from "./pages/Home.svelte";
	import NewAgenda from "./pages/NewAgenda.svelte";
	import NotesArchive from "./pages/NotesArchive.svelte";
  import Select from "./components/Select.svelte";
  import Authentication from "./pages/Authentication/Authentication.svelte";
	//export let name;
	import zoomSdk from "@zoom/appssdk"

	async function configureApp() {
		const configResponse = await zoomSdk.config({
			popoutSize: {width: 480, height: 360},
			capabilities: ["shareApp"]
		})
	}

	configureApp()
	

	let Booleans=[true,false,false,false,false]


	function navigator(event)
	{
		for(let i=0;i<Booleans.length;i++)
		{
			if(i!=event.detail)
			{
				Booleans[i]=false
			}
			else
			{
				Booleans[i]=true
			}
		}
	}
</script>

<main>
	

	{#if Booleans[0]}
		<Landing on:navigate={(e)=>{navigator(e)}}/>
		
	{/if}

	{#if Booleans[1]}
		<Home on:navigate={(e)=>{navigator(e)}} />
		
	{/if}
	{#if Booleans[2]}
		<NewAgenda on:navigate={(e)=>{navigator(e)}}/>
		
	{/if}
	{#if Booleans[3]}
		<NotesArchive on:navigate={(e)=>{navigator(e)}} />
		
	{/if}

	{#if Booleans[4]}
		<Authentication on:navigate={(e)=>{navigator(e)}}/>
		
	{/if}



	
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>