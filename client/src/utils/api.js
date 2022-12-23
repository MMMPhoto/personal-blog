// Get All Posts
export const getAllPosts = (token) => {
    return fetch('/api/posts/', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": token,
      },
    });
  };

export const getPublicPosts = () => {
  return fetch('/api/posts/public', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
  
// Get One Posts
export const getOnePost = (postId) => {
    return fetch(`/api/posts/${postId}`, {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        },
    });
};

// Create New Post
export const createNewPost = (formData, token) => {
    return fetch('/api/posts', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "authorization": token,
        },
        body: JSON.stringify(formData),
    });
};

// Create new administrator
export const createNewAdmin = (adminData) => {
    return fetch("/api/admin", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(adminData),
    });
};

// Log in administrator
  export const loginAdmin = (adminData) => {
    return fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(adminData),
    });
  };

  export const getCurrentAdmin = (token) => {
    return fetch("/api/admin/me", {
      headers: {
        "Content-Type": "application/json",
        "authorization": token,
      },
    });
  };
  
//   export const savePic = (picToSave, token) => {
//     return fetch("/api/users", {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify(picToSave),
//     });
//   };
  
//   export const deleteSavedPic = (picId, token) => {
//     return fetch(`/api/users/pics/${picId}`, {
//       method: "DELETE",
//       headers: {
//         authorization: `Bearer ${token}`,
//       },
//     });
//   };
  
  // export {
  //   getAllPics,
  //   getOnePic,
  //   createNewUser,
  //   loginUser,
  //   savePic,
  //   deleteSavedPic,
  //   getCurrentUser,
  // };
  