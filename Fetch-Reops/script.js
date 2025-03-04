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

