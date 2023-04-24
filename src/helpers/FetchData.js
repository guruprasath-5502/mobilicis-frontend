
export const Data = async (params) => {
  const response = await fetch(`https://mobiliscis-backend.onrender.com/api/users/${params}`,{
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
