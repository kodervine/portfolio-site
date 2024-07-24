const GET_USER_BLOGS = `query Publication {
    publication(host: "kodervine.hashnode.dev/") {
        isTeam
        title
        posts(first: 10) {
            edges {
                node {
                    title
                    brief
                    url
                  publishedAt  
                  coverImage {
      url
      isPortrait
      attribution
      photographer
      isAttributionHidden
    }
      
                }
            }
        }
    }
}
`;
export const fetchBlogs = async () => {
  let allBlogsFetched = false;
  let page = 10;
  const articles = [];

  let response = await gql(GET_USER_BLOGS, { page: page });
  console.log(response.data.publication.posts.edges);
  articles.push(...response.data.publication.posts.edges);

  return articles;
};

async function gql(query: string, variables = {}) {
  const data = await fetch("https://gql.hashnode.com/", {
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
