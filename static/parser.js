var data
var new_json, caption, img, link
var final_json = []

fetch("./joedata.json")
  .then(response => response.json())
  .then(json => data = json)
  .then(() => new_json = data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges)
  .then(() => {
    var i
    for (i=0; i < new_json.length; i++) {
      id = i,
      caption = new_json[i].node.edge_media_to_caption.edges[0].node.text,
      img = new_json[i].node.display_url,
      link = "https://www.instagram.com/p/" + new_json[i].node.shortcode,

      final_json.push({
        "id":id,
        "caption":caption,
        "image":img,
        "link":link})
    };
    document.getElementById("json").innerHTML = JSON.stringify(final_json)
    console.log(new_json)
  });
