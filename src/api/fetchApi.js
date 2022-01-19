import axios from "axios";

export const fetchUserData = async () => {
  const { data } = await axios.get(
    "https://random-data-api.com/api/users/random_user"
  );
  return data;
};

export const fetchBeerData = async () => {
  const { data } = await axios.get(
    "https://random-data-api.com/api/beer/random_beer"
  );
  return data;
};
