export async function getCampaigns(query = "", filter = "opening", pageNo = 0) {
  const params = {
    query: query ?? "",
    filter,
    pageNo,
  };
  const queryString = "?" + new URLSearchParams(params).toString();
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/campaign/getAll${queryString}`,
  );
  const data = await res.json();
  return data;
}

export async function getCampaign(id) {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/campaign/get?id=${id}`,
    );
    const data = await res.json();
    return data;
  } catch (e) {
    return null;
  }
}

export async function getCampaignPostContent(id) {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_WORDPRESS_API_URL}/posts/${id}?_fields=content`,
    );
    if (res.status === 200) {
      const postContent = await res.json();
      return { content: postContent.content.rendered };
    }
    return null;
  } catch (e) {
    return null;
  }
}
