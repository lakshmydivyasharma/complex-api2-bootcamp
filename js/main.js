let nounElement = document.querySelector('#noun') //getting an element from the dom; dom is the document object model
const button = document.querySelector('button')
let definition = document.querySelector('#definition')
let picture = document.querySelector('#picture')
button.addEventListener("click", () =>{ //addevent is a function bc it has ()
  let noun = nounElement.value; //noun eleement is thee input value and we are accessingthe value; value is what they typed
  console.log('word:',noun)



  let url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${noun}?key=12c31f33-db0f-4c16-b7d2-047e3c830294` // noun is put in, format URL in a separate way so the word comes right after the JSON
  console.log(url)
  fetch(url)
  .then(res => res.json()) // parse nasaSites as JSON (can be res.text() for plain nasaSites)
  .then(res => {
    console.log(res[0].shortdef[0])
    definition.innerHTML = res[0].shortdef[0] //portion of the res that had the result with the definition in it

    let pixabayUrl = `https://pixabay.com/api/?key=15489800-0d402c1fa288dd4e9772fa4c8&q=${noun}`
    console.log('pixabayUrl:', pixabayUrl)
    fetch(pixabayUrl)
    .then(res => res.json())
    .then(res => {

      // a360c02802fb4889bfeb1ac23094299e key
      // c48f61cee32742ccac5c4bf717d55cbf secret

      console.log(res.hits[0].webformatURL)
      picture.src = res.hits[0].webformatURL
    })
    .catch(err => {
      console.log(err)
    })
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
// })


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
