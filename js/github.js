async function fetchGitHubProfile() {
    try {
        const response = await fetch('https://api.github.com/users/Lacikika');
        const profile = await response.json();
        return profile;
    } catch (error) {
        console.error('Error fetching GitHub profile:', error);
        return null;
    }
}

async function fetchGitHubRepos() {
    try {
        const response = await fetch('https://api.github.com/users/Lacikika/repos');
        const repos = await response.json();
        return repos;
    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        return [];
    }
}

async function fetchReadme(repo) {
    try {
        const response = await fetch(`https://api.github.com/repos/Lacikika/${repo}/readme`);
        const data = await response.json();
        return atob(data.content); // Decode base64 content
    } catch (error) {
        console.error(`Error fetching README for ${repo}:`, error);
        return null;
    }
}

export { fetchGitHubProfile, fetchGitHubRepos, fetchReadme };