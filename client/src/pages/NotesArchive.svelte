<script>
    import {
      Button,
      Icon
    } from "smelte";
  import { createEventDispatcher } from "svelte";
    const dispatchermodule = createEventDispatcher();

    
    async function Backend()
    {
      console.log("Sexy Smartness")
      fetch('https://localhost:3000/users')
          .then(response => {            
            console.log(response);
          })
          .then(data => {
            console.log(data);
          })
          .catch(error => {
            console.log(error)
          });

      const request = await fetch("https://localhost:3000/users",{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },

        body: JSON.stringify({
          agenda1:[{
            heading:"Dummy Heading",
            currentcontent:"Zoom api docs are mid"
          }]
        })

        
      }).then(res =>{
        return res.json
      }).then(data =>{
        console.log(data.json)
      }).catch(err =>console.log(err))
    }


    
  </script>
  

<main>
    <Button on:click={()=>{dispatchermodule("navigate",1)}}>Back</Button>
	<h1>Notes Archive</h1>
    <p>This page should display a users' notes.</p>

    <Button on:click={Backend}>Try Backend</Button>

    //ZoomAPI.transcript = agenda1
	
</main>