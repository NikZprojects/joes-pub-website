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

var img_json, img_array
var img_link, img_link_array
var img_link_array = []
var img_data
var img_data_json = []

fetch("./access_keys.json")
  .then(response => response.json())
  .then(json => access_keys = json)
  .then(() => {
    fetch("https://graph.facebook.com/v9.0/" + access_keys.user_id + "/media?access_token=" + access_keys.access_token)
      .then(response => response.json())
      .then(json => img_json = json)
      .then(() => {
        console.log(img_json)
        img_array = img_json.data
        var i
        for (i=0; i < img_array.length; i++) {
          img_link = "https://graph.facebook.com/v9.0/" +
            img_array[i].id +"?fields=id,permalink,media_type,media_url,caption&access_token="
            + access_keys.access_token

          img_link_array.push(img_link)
        };
      })
      .then(() => {
        var i
        for (i=0; i < img_link_array.length; i++) {
          id = i
          fetch(img_link_array[id])
            .then(response => response.json())
            .then(json => img_data = json)
            .then(() => {
              img_data = JSON.stringify(img_data) + ","
              img_data_json.push(img_data)
              document.getElementById("json").innerHTML += img_data
            })
        };
      })
    })
    .then(() =>{
      console.log(img_data_json)
    })
