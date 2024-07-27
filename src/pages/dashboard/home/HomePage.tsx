import Layout from "../../../components/layout/Layout";
import UsersTable from "../../../components/users-table/UsersTable";
import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../../../context/UsersContext";
import { getAllUsersRequest } from "../../../services/http/users";
import { Box, Skeleton, Typography } from "@mui/material";
import { notifyError } from "../../../services/notifications/toasts";

const HomePage = () => {
  const { setAllUsers, usersList } = useContext(UsersContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAllProductsHandler();
  }, []);

  const getAllProductsHandler = async () => {
    setIsLoading(true);
    const res = await getAllUsersRequest();
    if (res?.status == 200) {
      setAllUsers(res.data);
      return setIsLoading(false);
    }

    setIsLoading(false);
    notifyError("Erro ao buscar todos os produtos");
  };

  return (
    <Layout>
      <>
        <Box
          paddingY={3}
          maxHeight={"100vh"}
          height="100vh"
          style={{ width: "100%", display: "flex", flexDirection: "column" }}
        >
          <Typography variant="h3" fontWeight="medium">
            Visão Geral
          </Typography>
          {isLoading ? (
            <Box
              display="flex"
              width="100%"
              height="100%"
              mt={10}
              borderRadius={5}
              overflow="hidden"
            >
              <Skeleton
              animation="wave"
                variant="rectangular"
                width="100%"
                height="100%"
              ></Skeleton>
            </Box>
          ) : (
            <UsersTable usersList={usersList} />
          )}
        </Box>
      </>
    </Layout>
  );
};

export default HomePage;
