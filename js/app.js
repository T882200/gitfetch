const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");

const client_id = "Iv1.3e27e61b00cd8eb4";
const client_secret = "f3a7b198c7a151e0b83f61f4f898112930ee934a";


const fetchUsers = async (user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);

    const data = await api_call.json();
    return { data };
};

const showData = () => {
    fetchUsers(inputValue.value).then((res) => {
        console.log(res);
        nameContainer.innerHTML = `Name: <span class="main__profile-value">${res.data.name}</span>`
        unContainer.innerHTML = `User Name: <span class="main__profile-value">${res.data.login}</span>`
        reposContainer.innerHTML = `Repos: <a href="${res.data.html_url}?tab=repositories" ><span class="main__profile-value">${res.data.public_repos}</span></a>`
        urlContainer.innerHTML = `URL: <a href="${res.data.html_url}" ><span class="main__profile-value">${res.data.html_url}</span></a>`
    })
}

searchButton.addEventListener("click", () => {
    showData();
    
});

