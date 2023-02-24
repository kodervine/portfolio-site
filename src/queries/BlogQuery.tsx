const GET_USER_BLOGS = `
    query GetUserArticles($page: Int!) {
        user(username: "kodervine") {
            publication {
                posts(page: $page) {
                  title
                  brief
                  slug
                  dateAdded
                  coverImage
                  contentMarkdown
                }
            }
        }
    }
`;
export const fetchBlogs = async () => {
  let allBlogsFetched = false;
  let page = 0;
  const articles = [];

  while (!allBlogsFetched) {
    let response = await gql(GET_USER_BLOGS, { page: page });
    articles.push(...response.data.user.publication.posts);
    if (response.data.user.publication.posts.length === 0) {
      allBlogsFetched = true;
    }
    page++;
  }
  return articles;
};

async function gql(query: string, variables = {}) {
  const data = await fetch("https://api.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  return data.json();
}
