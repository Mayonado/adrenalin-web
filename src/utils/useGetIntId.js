import { useParams } from "react-router";

/**
 * Use to get Id from URL and convert it to Int
 */
export const useGetIntId = () => {
  const params = useParams();
  const intId = typeof params?.id === "string" ? parseInt(params?.id) : -1;

  return intId;
};
