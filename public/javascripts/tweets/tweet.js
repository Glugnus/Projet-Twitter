window.addEventListener("DOMContentLoaded", () => {
  bindTweet();
});

function bindTweet() {
  const elements = document.querySelectorAll(".fa-circle-minus");
  const tweetContainer = document.querySelector("#tweet-list-container");
  elements.forEach((e) => {
    e.addEventListener("click", (e) => {
      const tweetId = e.target.getAttribute("tweetid");
      axios
        .delete("/tweets/" + tweetId)
        .then(function (response) {
          tweetContainer.innerHTML = response.data;
          bindTweet();
        })
        .catch(function (err) {
          console.log(err);
        });
    });
  });
}
