var getUserRepos = function(user) {
    //format the github api url
    var apiUrl = "http://api.github.com/users/" + user + "/repos";

    //make a resquest to the url 
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
};