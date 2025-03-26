const updatePost = async ({id, title, body, userId}) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          id,
          title,
          body,
          userId,
        }),
      });
  
      if (!response.ok) {
        console.error("Network response was not ok.");
      }
  
      const data = await response.json();
      console.log("Updated Resource:", data);
    } catch (error) {
      console.error("Error updating resource:", error.message);
    }
  };
  
  
  const newPost = {
      id: 1,
      title: "Updated Title",
      body: "Updated content of the post.",
      userId: 1,
  }
  updatePost(newPost);