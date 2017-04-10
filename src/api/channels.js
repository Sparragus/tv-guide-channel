const subreddits = [
  'Vaporwave',
  'VaporwaveAesthetics',
  'VaporwaveInspiration',
  'VaporwaveArt',
  'MakingVaporwave',
  'Hyperbattle',
  'VaporwaveCassettes',
  'Vapormeme'
]

function fetch () {
  const promises = subreddits.map(fetchSubreddit)
  return Promise.all(promises)
}

function fetchSubreddit (subreddit) {
  if (!subreddit) {
    return Promise.resolve({})
  }

  return Promise.all([
    fetchSubredditAbout(subreddit),
    fetchSubredditPosts(subreddit)
  ]).then(([about, posts]) => {
    const programs = posts.map(post => {
      return {
        name: post.title,
        url: post.url,
        discussionUrl: `https://reddit.com${post.permalink}`
      }
    })

    return {
      name: about.display_name,
      url: `https://reddit.com${about.url}`,
      programs
    }
  })
  .catch(e => {
    return {}
  })
}

function fetchSubredditAbout (subreddit) {
  const url = `https://www.reddit.com/r/${subreddit}/about.json`
  return window.fetch(url)
  .then(response => response.json())
  .then(json => json.data)
}

function fetchSubredditPosts (subreddit) {
  const url = `https://www.reddit.com/r/${subreddit}.json`
  return window.fetch(url)
  .then(response => response.json())
  .then(json => json.data.children.map(child => child.data))
}

export {
  fetch
}
