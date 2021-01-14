////Parses data from scraped IG page into a usable JSON

// var data
// var new_json, caption, img, link
// var final_json = []
//
// fetch("./joedata.json")
//   .then(response => response.json())
//   .then(json => data = json)
//   .then(() => new_json = data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges)
//   .then(() => {
//     var i
//     for (i=0; i < new_json.length; i++) {
//       id = i,
//       caption = new_json[i].node.edge_media_to_caption.edges[0].node.text,
//       img = new_json[i].node.display_url,
//       link = "https://www.instagram.com/p/" + new_json[i].node.shortcode,
//
//       final_json.push({
//         "id":id,
//         "caption":caption,
//         "image":img,
//         "link":link})
//     };
//     document.getElementById("json").innerHTML = JSON.stringify(final_json)
//     console.log(new_json)
//   });



//// Gets array of api links from access key and IG user_id

// var img_json, img_array
// var img_link, img_link_array
// var img_link_array = []
// var img_data
// var img_data_json = []
// var url

// fetch("./access_keys.json")
//   .then(response => response.json())
//   .then(json => access_keys = json)
//   .then(() => url = "https://graph.facebook.com/v9.0/" + access_keys.user_id + "/media?access_token=" + access_keys.access_token)
//   .then(() => {
//     async function fetchData(url) {
//        await fetch(url)
//         .then(response => response.json())
//         .then(json => img_json = json)
//         .then(() => {
//           img_array = img_json.data
//           var i
//           for (i=0; i < img_array.length; i++) {
//             img_link = "https://graph.facebook.com/v9.0/" +
//               img_array[i].id +"?fields=id,permalink,media_type,media_url,caption,timestamp&access_token="
//               + access_keys.access_token
//
//             img_link_array.push(img_link)
//           };
//           if (img_json.paging.next !== undefined){
//             url = img_json.paging.next
//             console.log("loading...")
//             fetchData(url)
//           } else {
//             return img_link_array
//             console.log(img_link_array)
//           };
//         })
//     };
//   })

//// Takes list of image urls and forms it into a JSON, uses previous variables.
//// requires manual tweaking currently to remove comma and add []'s

// fetch("./img_link_array")
//   .then(response => response.json())
//   .then(data => img_link_array = data)
//   .then(() => {
//   var i
//   for (i=0; i < img_link_array.length; i++) {
//     id = i
//     fetch(img_link_array[id])
//       .then(response => response.json())
//       .then(json => img_data = json)
//       .then(() => {
//         if (img_data.media_type == "IMAGE"){
//           img_data = JSON.stringify(img_data) + ","
//           img_data_json.push(img_data)
//           document.getElementById("json").innerHTML += img_data
//         };
//       })
//     };
//   })
//   .then(() =>{
//     console.log(img_data_json)
//   })

// Filters an already recieved json for reposts and social posts

// var original_json, social_posts, img_data, permalink
// var img_data_json = []
//
// function isSocialPost(social_posts, permalink) {
//   var i
//   for (i=0; i<social_posts.length; i++){
//     if (social_posts[i].includes(permalink)){
//       return true
//     };
//   };
//   return false
// };
//
// fetch("./static/chemistrycocktails3.json")
//   .then(response => response.json())
//   .then(data => original_json = data)
//   .then(() => {
//     fetch("./static/social_posts")
//       .then(response => response.json())
//       .then(data => social_posts = data)
//       .then(() => {
//         var i
//         for (i=0; i < original_json.length; i++) {
//           img_data = original_json[i]
//           if (img_data.media_type == "IMAGE"){
//             if (!img_data.caption.includes("#regrann")){
//               if (!isSocialPost(social_posts, img_data.permalink)){
//                 img_data_json.push(img_data)
//                 img_data = JSON.stringify(img_data) + ","
//                 document.getElementById("json").innerHTML += img_data
//               };
//             };
//           };
//         };
//       })
//   })
//   .then(() =>{
//     console.log(img_data_json)
//   })

fetch("./static/chemistrycocktails4.json")
  .then(response => response.json())
  .then(json => img_data_json = json)
  .then(() => {
    img_data_json.sort(function(a,b){
      return new Date(b.timestamp) - new Date(a.timestamp)
    })
    console.log(img_data_json)
  })
