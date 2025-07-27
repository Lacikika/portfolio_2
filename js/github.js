const USERNAME = 'Lacikika';
const API_URL = `https://api.github.com/users/${USERNAME}`;

export async function fetchGitHubProfile() {
    try {
        const response = await fetch(API_URL);
        return await response.json();
    } catch (error) {
        console.error('Error fetching GitHub profile:', error);
        return null;
    }
}

export async function fetchGitHubRepos() {
    try {
        const response = await fetch(`${API_URL}/repos?sort=updated`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        return null;
    }
}

export async function fetchRepoReadme(repoName) {
    try {
        const response = await fetch(`https://api.github.com/repos/${USERNAME}/${repoName}/readme`);
        const data = await response.json();
        return atob(data.content);
    } catch (error) {
        console.error(`Error fetching README for ${repoName}:`, error);
        return null;
    }
}
