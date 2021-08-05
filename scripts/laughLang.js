const board = document.getElementById("joke-board");
const another = document.getElementById("another")

//axios manenos
async function getJoke(){
    axios.get('https://official-joke-api.appspot.com/random_joke')
      .then(function (response) {
        board.innerText = response.data.setup + "\n" + response.data.punchline 
      })
      .catch(function (error) {
        console.log(error);
      })
    //   .then(function () {
    //     // always executed
    //   }); 
}

// getJoke()

another.addEventListener('click',async function(e){
    e.preventDefault()
    board.innerText = "Loading..."
    await getJoke()
})