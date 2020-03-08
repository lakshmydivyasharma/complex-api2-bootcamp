let noun = document.querySelector('p')
const button = document.querySelector('button')
button.addEventListener("click", () =>{ //addevent is a function bc it has ()
   const userPick = document.querySelector('input').value // changed from let to const bc this does not change when its in the function
   fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${noun}?key=12c31f33-db0f-4c16-b7d2-047e3c830294`)
     .then(res => res.json()) // parse nasaSites as JSON (can be res.text() for plain nasaSites)
     .then(res => {
       console.log(res)
       for (let i = 0; i < res.results.length; i++) {
         if (res.results[i].title === noun) { //loop through results; if the title of that result = user pick then print out open crawl of that result
           console.log(res.results[i].noun)
           fetch(`http://api.thenounproject.com?key=963c261c5ee94aa19ff11aab74981429&text=${res.}`)
             .then(res => res.json())
             .then(res => {
               console.log(res.contents.translated)
               noun.innerHTML = res.contents.translated
             })
           .catch(err => {
             console.log(err)
           })
         }
      }
    })
    .catch(err =>{
      console.log(err)
    })
})






    //
    //
    // .then(res => res.json()) // parse nasaSites as JSON (can be res.text() for plain nasaSites)
    // .then(res => {
    //   console.log(res)
    //
    //
    //
    //   fetch('http://api.thenounproject.com?key=963c261c5ee94aa19ff11aab74981429')
    //       .then(res => res.json()) // parse nasaSites as JSON (can be res.text() for plain nasaSites)
    //       .then(res => {
    //   console.log(table)
    //
    //   .catch(err => {
    //         console.log(err)
    //       })
    //     })


//     .catch(err => {
//       console.log(err)
//     })
// })
})


// https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=your-api-key
//
// https://pixabay.com/api/
// 15489800-0d402c1fa288dd4e9772fa4c8
//
// https://pixabay.com/api/?key=15489800-0d402c1fa288dd4e9772fa4c8&q=yellow+flowers&image_type=photo&pretty=true
// let userInput =
// fetch('https://www.dictionaryapi.com/api/v3/references/collegiate/json/${}?key=12c31f33-db0f-4c16-b7d2-047e3c830294')
//
//
// https://pixabay.com/api/?key=15489800-0d402c1fa288dd4e9772fa4c8&q=yellow+flowers&image_type=photo&pretty=true
