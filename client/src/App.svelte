<script>
	import "smelte/src/tailwind.css" ;
	import Landing from "./pages/Landing.svelte";
  import Select from "./components/Select.svelte";
  import NewAgenda from "./pages/NewAgenda.svelte";
  import NotesArchive from "./pages/NotesArchive.svelte";
	//export let name;
</script>

<main>
	<h1>App.svelte heading</h1>
	<Landing />

	
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