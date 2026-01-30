/**
 🧠 Account Type Logic (Like Day 1 Grades!):
Followers	Account Type
100,000+	"👑 Legendary (100k+ followers)"
10,000 - 99,999	"⭐ Famous (10k+ followers)"
1000 - 9,999	"🌟 Popular (1k+ followers)"
100 - 999	"📈 Growing (100+ followers)"
Below 100	"🌱 Starter"
 
📤 Expected Output:
For getGitHubProfile("torvalds") — Valid User (Linux Creator!):

JavaScript
{
  success: true,
  profile: {
    username: "torvalds",
    name: "Linus Torvalds",
    avatar: "https://avatars.githubusercontent.com/u/1024025?v=4",
    bio: "...",
    publicRepos: 7,
    followers: 200000,
    following: 0,
    profileUrl: "https://github.com/torvalds",
    accountType: "👑 Legendary (100k+ followers)"
  },
  message: "Profile for torvalds fetched successfully"
}
For getGitHubProfile("thisuserdoesnotexist12345xyz") — Invalid User:

JavaScript
{
  success: false,
  profile: null,
  message: "User 'thisuserdoesnotexist12345xyz' not found on GitHub"
}
*/

// Part 1: Fetch real user data from GitHub API
async function fetchGitHubUser(username) {
    // 1. Use fetch() to get data from:
    //    https://api.github.com/users/{username}
    try {
        const response = await fetch(`https://api.github.com/users/${username}`)
        // console.log(data.ok) // true

        if (!response.ok) {
            throw new Error("Request failed")
        }
        const data = await response.json()
        // console.log(data)
        return data;

    } catch (error) {
        console.log("Error:", error.message)
    }
    // 2. Check if response.ok
    // 3. If not ok, throw error
    // 4. Convert to JSON and return
}

// fetchGitHubUser("md-kudrot")

// Part 2: Get account type based on followers
function getAccountType(followers) {
    // console.log(followers)

    if (followers >= 100000) return "👑 Legendary (100k+ followers)"
    if (followers >= 10000) return "⭐ Famous (10k+ followers)"
    if (followers >= 1000) return "🌟 Popular (1k+ followers)"
    if (followers >= 100) return "📈 Growing (100+ followers)"
    if (followers >= 0) return "🌱 Starter"
    // Return account type based on follower count
    // Use the table above!
}

// Part 3: Format the raw API data
function formatUserProfile(userData, type) {
    // console.log(userData)
    const dataObj = userData;
    return {
        username: dataObj.login,
        name: dataObj.name,
        avatar: dataObj.avatar_url,
        bio: dataObj.bio,
        publicRepos: dataObj.public_repos,
        followers: dataObj.followers,
        following: dataObj.following,
        profileUrl: dataObj.html_url,
        accountType: type
    }
    // Return clean object with:
    // username, name, avatar, bio, publicRepos,
    // followers, following, profileUrl, accountType
}

// Part 4: Main function
async function getGitHubProfile(username) {
    try {
        // 1. Fetch user data
        const reciveData = await fetchGitHubUser(`${username}`)
        // console.log(reciveData)
        // 2. Format the profile
        const accountType = getAccountType(reciveData.followers)
        const formatedData = formatUserProfile(reciveData, accountType)
        // console.log(formatedData)

        // console.log(accountType)
        // 3. Return success object

        return {
            success: true,
            profile: formatedData,
            message: `Profile for ${reciveData.name} fetched successfully`
        }
    } catch (error) {
        return {
            success: false,
            profile: null,
            message: `User ${username} not found on GitHub`
        }
    }
}

// Test with real GitHub users!
// getGitHubProfile("md-kudrot")
// getGitHubProfile("torvalds")
// getGitHubProfile("xcfio")
// getGitHubProfile("67ij")
// getGitHubProfile("md-kudrot").then(result => console.log(result));  // Your profile!
// getGitHubProfile("torvalds").then(result => console.log(result));  // Your profile!
getGitHubProfile("fakeuser12345xyz").then(result => console.log(result));