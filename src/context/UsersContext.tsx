import { createContext, useState } from "react";
import { IUser } from "../models/IUser";

interface IUsersContextProps {
  usersList: IUser[];
  setAllUsers: (incomingList: IUser[]) => void;
  addUser: (newUser: IUser) => void;
  updateUser: (updatedTask: IUser) => void;
  deleteUser: (id: number) => void;
  selectUser: (userId: number) => void;
  selectedUserId: number | null;
}

export const UsersContext = createContext<IUsersContextProps>(
  {} as IUsersContextProps
);

const UsersContextProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [usersList, setUsersList] = useState<IUser[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const setAllUsers = (incomingList: IUser[]) => {
    setUsersList(incomingList);
  };

  // Select Handler
  const selectUser = (userId: number) => {
    setSelectedUserId(userId);
  };

  // Users CRUD
  const addUser = (newUser: IUser) => {
    setUsersList((prev) => [newUser, ...prev]);
  };

  const updateUser = (updatedUser: IUser) => {
    const selectedUserIndex = usersList.findIndex(
      (prevUser) => prevUser.id == updatedUser.id
    );

    usersList[selectedUserIndex] = updatedUser;
  };

  const deleteUser = (id: number) => {
    setUsersList([
      ...usersList!.filter((selectedTask) => selectedTask.id != id),
    ]);
  };

  const value = {
    usersList,
    setAllUsers,
    addUser,
    updateUser,
    deleteUser,
    selectUser,
    selectedUserId,
  };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};

export default UsersContextProvider;
