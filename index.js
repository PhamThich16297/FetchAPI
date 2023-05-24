var postApi = "https://gnews.io/api/v4/search?q=example&token=64a61fb901bae6f8eb8cd9df809ddca1";
fetch(postApi)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // console.log(data);

        // Lấy bài post Top Heading
        var myArray = data.articles;
        var htmls_topHeading = myArray.map(function (post, index) {
            if (index % 2 == 0) {
                return `
                    <div class="row main-left">
                        <div class="col-lg-4 p-0">
                            <img src="${post.image}" alt="image-${post.index}">
                        </div>
                        <div class="col-lg-8 main-left-info">
                            <a href="${post.url}" target="_blank">${post.title}</a>
                            <p class="mb-2">${post.publishedAt}</p>
                            <p class="mb-0">${post.content}</p>
                        </div>
                    </div>
                    `;
            } else {
                return `
                    <div class="row main-left">
                        <div class="col-lg-8 main-left-info">
                            <a href="${post.url}" target="_blank">${post.title}</a>
                            <p class="mb-2">${post.publishedAt}</p>
                            <p class="mb-0">${post.content}</p>
                        </div>
                        <div class="col-lg-4 p-0">
                            <img src="${post.image}" alt="image-${post.index}">
                        </div>
                    </div>
                    `;
            }
        })
        var html_topHeading = htmls_topHeading.join("");
        document.getElementById("title").innerText = "Top Heading";
        document.getElementById("topHeading").innerHTML = html_topHeading;

        // Lấy bài post Top 5 News
        var myTop5ElementArray = [];
        for (var index in myArray) {
            if (index < 5) {
                myTop5ElementArray.push(myArray[index]);
            } else {
                break;
            }
        }
        console.log(myTop5ElementArray)
        var htmls_top5News = myTop5ElementArray.map(function (post) {
            return `
                    <div class="row main-right-row">
                        <div class="col-md-4 p-0">
                            <img src="${post.image}">
                        </div>
                        <div class="col-md-8 p-1 pr-0 pl-2">
                            <a href="${post.url}" target="_blank">${post.title}</a>
                            <p>${post.description}</p>
                        </div>
                    </div>
                    `;
        })
        var html_top5News = htmls_top5News.join("");
        document.getElementById("top5News").innerHTML = html_top5News;
    });
//---------------------------------------------OK----------------------------------------------------

// Search
function search() {
    var input = document.getElementById("input").value;
    // console.log(input);
    var postSearch = `https://gnews.io/api/v4/search?q=${input}&token=64a61fb901bae6f8eb8cd9df809ddca1`
    // console.log(postSearch)

    fetch(postSearch)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var myArray = data.articles;
            var htmls_searchResults = myArray.map(function (post, index) {
                if (index % 2 == 0) {
                    return `
                        <div class="row main-left">
                            <div class="col-lg-4 p-0">
                                <img src="${post.image}" alt="image-${post.index}">
                            </div>
                            <div class="col-lg-8 main-left-info">
                                <a href="${post.url}" target="_blank">${post.title}</a>
                                <p class="mb-2">${post.publishedAt}</p>
                                <p class="mb-0">${post.content}</p>
                            </div>
                        </div>
                        `;
                } else {
                    return `
                        <div class="row main-left">
                            <div class="col-lg-8 main-left-info">
                                <a href="${post.url}" target="_blank">${post.title}</a>
                                <p class="mb-2">${post.publishedAt}</p>
                                <p class="mb-0">${post.content}</p>
                            </div>
                            <div class="col-lg-4 p-0">
                                <img src="${post.image}" alt="image-${post.index}">
                            </div>
                        </div>
                        `;
                }
            })
            var html_searchResults = htmls_searchResults.join("");

            document.getElementById("title").innerText = "Search Results";
            document.getElementById("topHeading").innerHTML = "";
            document.getElementById("topHeading").innerHTML = html_searchResults;
        })
}

