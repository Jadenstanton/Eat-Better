let app_key = 'f5ba8b0969b7c7cca5906ee1084fa731';
let app_id = 'f5266155'
let URL = `https://api.edamam.com/api/recipes/v2?type=public&app_key=${app_key}&app_id=${app_id}`




const queryParams = new URLSearchParams();



  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const searchInput = document.querySelector('.search.q');

// TODO
// Add functionality for spedcific checkboxes, allergies, diets, calories, and ndutrients. 
// They need their classes specialized and their own functions to distinguish them because they have different endpoints

// Add checkbox values to endpoint and keywords
  function updateApiEndpoint(){
    const queryParams = new URLSearchParams();

    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
          queryParams.append('health', checkbox.value);
        } else {
          queryParams.delete('health');
        }
        
        const ingredientSearchButton = document.getElementById('search-btn');
        
        if (searchInput.value) {
          queryParams.append('q', searchInput.value);
        }
      
          
        let url = `${URL}&${queryParams.toString()}`;
        url = encodeURI(url);
        console.log(encodeURI(url));
        // send request to API using updated url
        //  finalUrl = `${url}&${creds}`;

        window.localStorage.setItem('apiURL', url);
      });
    });
  }
  

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", updateApiEndpoint);
  // console.log(url);
});

// Add keyword values to url
searchInput.addEventListener("keydown", function(event) {
  queryParams.delete('q');
  if (event.code === "Enter") {
    event.preventDefault();
    if (searchInput.value) {
      queryParams.append('q', searchInput.value);
    }
    let url = `${URL}&${queryParams.toString()}`;
        url = encodeURI(url);
        console.log(encodeURI(url));
        // send request to API using updated url
        //  finalUrl = `${url}&${creds}`;

        window.localStorage.setItem('apiURL', url);
    // updateApiEndpoint();
  }
});



// Search button 
function searchRecipes() {
  // const url = `${URL}?${queryParams.toString()}`;
  let getobj = window.localStorage.getItem('apiURL');
  console.log(getobj);

  fetch(getobj)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Do something with the data, like rendering it on the page
    })
    .catch(error => console.error(error));
}

const apiSearchButton = document.getElementById("search-btn");
apiSearchButton.addEventListener("click", searchRecipes);
let url ="";


// function onPageLoad(){
//   if ( window.location.search.length > 0 ){
//       handleRedirect();
//   }
//   else{
//       access_token = localStorage.getItem("access_token");
//       if ( access_token == null ){
//           // we don't have an access token so present token section
//           document.getElementById("tokenSection").style.display = 'block';  
//       }
//       else {
//           // we have an access token so present tracks section and artists section
//           document.getElementById("tracksSection").style.display = 'block';  
//           document.getElementById("artistsSection").style.display = 'block';  
//           document.getElementById("profileSection").style.display = 'block';  
//           refreshTopTracks();
//           refreshTopArtists();
//           getProfile();
//       }
//   }
// }

// function getCode(){
//   let code = null;
//   const queryString = window.location.search;
//   if(queryString.length >0){
//     const urlParams = new URLSearchParams(queryString);
//     code = urlParams.get('code');
//   }
//   return code;
// }

// function handleRedirect(){
//   let code = getCode();
//   fetchAccessToken(code);
//   window.history.pushState("", "", redirect_uri);
// }



// function requestAuth(){
//   let url = AUTHORIZE;
//   url += '?client_id=' + client_id;
//   url += '&response_type=code';
//   url += '&redirect_uri=' + encodeURI(redirect_uri);
//   url += '&show_dialog=true';
//   url += '&user-read-private user-read-email user-read-currently-playing user-read-playback-position user-library-modify playlist-modify-private playlist-modify-public user-top-read user-library-read';
//   window.location.href = url;
// }


// function fetchAccessToken(code){
//   let body = 'grant_type=authorization_code';
//   body += '&code=' + code;
//   body += '&redirect_uri=' + encodeURI(redirect_uri);
//   body += '&client_id=' + client_id;
//   body += '&client_secret=' + client_secret;
//   callAuthApi(body);
// }

// function refreshAccessToken(){
//   refresh_token = localStorage.getItem("refresh_token");
//   let body = "grant_type=refresh_token";
//   body += "&refresh_token=" + refresh_token;
//   body += "&client_id=" + client_id;
//   callAuthApi(body);
// }

// function callAuthApi(body){
//   let xhr = new XMLHttpRequest();
//   xhr.open("POST", TOKEN, true);
//   xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//   xhr.setRequestHeader('Authorization', 'Basic ' + btoa(client_id + ":" + client_secret));
//   xhr.send(body);
//   xhr.onload = handleAuthResponse;
// }

// function handleAuthResponse(){
//   if ( this.status == 200 ){
//       var data = JSON.parse(this.responseText);
//       console.log(data);
//       var data = JSON.parse(this.responseText);
//       if ( data.access_token != undefined ){
//           access_token = data.access_token;
//           localStorage.setItem("access_token", access_token);
//       }
//       if ( data.refresh_token  != undefined ){
//           refresh_token = data.refresh_token;
//           localStorage.setItem("refresh_token", refresh_token);
//       }
//       onPageLoad();
//   }
//   else {
//       console.log(this.responseText);
//       alert(this.responseText);
//   }
// }

// function getRecTracks(recUrl){
//   callApi( "GET", recUrl, null, handleRecTrackResponse );
// }

// function getTrack(artistId){
//   callApi( "GET", artistId, null, handleGetArtistInfoResponse);
// }

// function searchTrack(name){
//   callApi( "GET", name, null, handleSearchTrackResponse );
// }

// function refreshTopArtists(range){
//   callApi( "GET", range, null, handleArtistsResponse );
// }

// function refreshTopTracks(range){
//   callApi( "GET", range, null, handleTracksResponse );
// }

// function getProfile(){
//   callApi( "GET", PROFILE, null, handleProfileResponse );
// }

// function handleTracksResponse(){
//   if ( this.status == 200 ){
//       var data = JSON.parse(this.responseText);
//       console.log(data);
//       removeAllItems( "topTracks" );
//       data.items.forEach(item => addTracks(item));
     

//   }
//   else if ( this.status == 401 ){
//       refreshAccessToken()
//   }
//   else {
//       console.log(this.responseText);
//       alert(this.responseText);
//   }
// }

// function addArtists(item){
//   let rowNode = document.createElement("tr");
//   let nameNode = document.createElement("td");
//   let imageNode = document.createElement("img");

//   nameNode.value = item.id;
//   nameNode.className = "titleText";
//   nameNode.innerHTML = item.name;
//   imageNode.src = item.images[1].url;

//   rowNode.appendChild(imageNode);
//   rowNode.appendChild(nameNode);

//   document.getElementById("topArtists").style.display = "block";
//   document.getElementById("topArtists").appendChild(rowNode); 
// }




// function callApi(method, url, body, callback){
//   let xhr = new XMLHttpRequest();
//   xhr.open(method, url, true);
//   xhr.setRequestHeader('Content-Type', 'application/json');
//   xhr.setRequestHeader('Authorization', 'Bearer ' + access_token);
//   xhr.send(body);
//   xhr.onload = callback;
// }

// // function removeAllItems( elementId ){
// //   let node = document.getElementById(elementId);
// //   while (node.firstChild) {
// //       node.removeChild(node.firstChild);
// //   }
// // }

// function updateTracks() {
//   var slider = document.getElementById("myRange");
//   let value = slider.value;
//   // console.log(slider.value);
//   if(value == 50){
//     refreshTopTracks(TRACKS);
//   }else if(value == 1){
//     refreshTopTracks(TRACKS_SHORT_TERM);
//   }else{
//     refreshTopTracks(TRACKS_LONG_TERM);
//   }
// }

// function updateArtists() {
//   var slider = document.getElementById("myRange");
//   let value = slider.value;
//   // console.log(slider.value);
//   if(value == 50){
//     refreshTopArtists(ARTISTS);
//   }else if(value == 1){
//     refreshTopArtists(ARTISTS_SHORT_TERM);
//   }else{
//     refreshTopArtists(ARTISTS_LONG_TERM);
//   }
// }

// function handleTracksRefresh(){
//   refreshTopTracks(TRACKS);
// }
// function handleArtistsRefresh(){
//   refreshTopArtists(ARTISTS);
// }


// function fetchTrack(){
//   var value = document.getElementById("searchKey").value;
//   let url = SEARCH_TRACK;
//   url += 'q=track%3A' + value;
//   url += '&type=track&limit=20';
  
//   searchTrack(url);
// }

// function getSearchParam(food){
//   let url = URL;
//   url += '&q=' + food;
//   // console.log("artist url: ", url);
//   // console.log('seed song: ');

//   getTrack(url);
// }

// function requestTrackRec(seed_artists, seed_genres, seed_tracks){
//   let url = TRACK_REC;
//   url += 'limit=20';
//   url += '&seed_artists=' + seed_artists;
//   url += '&seed_genres=' + seed_genres;
//   url += '&seed_tracks=' + seed_tracks;
//   // console.log(url);

//   getRecTracks(url);
// }
