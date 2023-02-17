<script>
    import {
      Button,
      Icon
    } from "smelte";
  import { createEventDispatcher } from "svelte";
    const dispatchermodule = createEventDispatcher();

    
    async function getData()
    {
      console.log("Sexy Smartness")
      fetch('http://localhost:3000/users')
          .then(response => {            
            console.log(JSON.parse(response.body));
          })
          .catch(error => {
            console.log(error)
          });
    }

    async function postData () {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          agenda1:{
            heading:"Dummy Heading",
            currentcontent:"Zoom api docs are mid"
          }
        })
      }).then (res => {
        console.log(res.body)
      }).catch(err => console.log(err))
    }
  </script>
  

<main>
    <Button on:click={()=>{dispatchermodule("navigate",1)}}>Back</Button>
	<h1>Notes Archive</h1>
    <p>This page should display a users' notes.</p>

    <Button on:click={getData}>Get Data</Button>
    <Button on:click={postData}>Post Data</Button>
    //ZoomAPI.transcript = agenda1
	
</main>