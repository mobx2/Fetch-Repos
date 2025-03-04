// ! API ===> https://api.github.com/users/mobx2/repos

// Main Variables

let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-repos .get-button");
let reposData = document.querySelector(".show-data");

getButton.onclick = function () {
  if (reposData.contains(document.querySelector(".repo-box"))) {
    return;
  } else {
    getRepos();
  }
};

// Get Repos Function

function getRepos() {
  if (theInput.value == "") {
    reposData.innerHTML = "Please Inter Your Github UserName";
  } else {
    fetch(`https://api.github.com/users/${theInput.value}/repos`)
      .then((response) => {
        // document.querySelector(".no-data").style.display = "none";
        return response.json();
      })
      .then((repos) => {
        setTimeout(() => {
          for (let i = 0; i < repos.length; i++) {
            // Create Repo Name Span
            let repoBox = document.createElement("div");
            repoBox.classList.add("repo-box");

            // Create Repo Name TextNode
            let repoName = document.createTextNode(repos[i].name);

            repoBox.appendChild(repoName);

            // Create Btns Box

            let btnsDiv = document.createElement("div");
            btnsDiv.classList.add("btns-div");
            repoBox.appendChild(btnsDiv);

            // Create Repo Name Anchor
            let repoAnchor = document.createElement("a");
            repoAnchor.classList.add("repo-link");
            repoAnchor.innerHTML = "Visit";

            // Create Repo Link href
            repoAnchor.href = `${repos[i].html_url}`;

            // Append Repo Anchor To Repo Span

            btnsDiv.appendChild(repoAnchor);

            // Create Stars Count

            let starsCount = document.createElement("span");
            starsCount.classList.add("stars-count");
            let starsCountText = document.createTextNode(
              `Stars ${repos[i].stargazers_count}`
            );

            starsCount.appendChild(starsCountText);

            btnsDiv.appendChild(starsCount);

            reposData.appendChild(repoBox);
          }
        }, 1000);
      });
  }
  document.querySelector(".no-data").innerHTML = "";
}
