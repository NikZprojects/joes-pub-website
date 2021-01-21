// Removes unwanted objects from JSON containing all posts and sorts by date //

var original_json, social_posts, img_data, permalink
var img_data_json = []

function isSocialPost(social_posts, permalink) {
  var i
  for (i=0; i<social_posts.length; i++){
    if (social_posts[i].includes(permalink)){
      return true
    };
  };
  return false
};

function sortJSON(img_data_json) {
  img_data_json.sort(function(a,b){
    return new Date(b.timestamp) - new Date(a.timestamp)
  })
  return img_data_json
}

fetch("./static/data/chemistrycocktails_rawdata.json")
  .then(response => response.json())
  .then(data => original_json = data)
  .then(() => {
    fetch("./static/data/social_posts")
      .then(response => response.json())
      .then(data => social_posts = data)
      .then(() => {
        var i
        for (i=0; i < original_json.length; i++) {
          img_data = original_json[i]
          if (img_data.media_type == "IMAGE"){
            if (!img_data.caption.includes("#regrann")){
              if (!isSocialPost(social_posts, img_data.permalink)){
                img_data_json.push(img_data)
                img_data = JSON.stringify(img_data) + ","
                document.getElementById("json").innerHTML += img_data
              };
            };
          };
          if (i === original_json.length - 1) {
            console.log(sortJSON(img_data_json))
          };
        };
      })
  })
