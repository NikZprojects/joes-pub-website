function statusChangeCallback(response) {
  console.log('statusChangeCallback');
  console.log(response);
  if (response.status === 'connected') {
    testAPI();
  } else {
    document.getElementById('status').innerHTML = 'Please log ' +
      'into this webpage.';
  }
}


function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}


window.fbAsyncInit = function() {
  FB.init({
    appId      : '405779757542660',
    cookie     : true,
    xfbml      : true,
    version    : 'v9.0'
  });


  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  FB.api(
    '/4283777283/photos',
    'GET',
    {},
    function(response) {
      console.log(response)
    }
  );
};

function testAPI() {
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function(response) {
    console.log('Successful login for: ' + response.name);
    document.getElementById('status').innerHTML =
      'Thanks for logging in, ' + response.name + '!';
  });
}
