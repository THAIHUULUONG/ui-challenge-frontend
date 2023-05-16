export type UserAllProfile = {
    id?: string;
    username?: string;
    email?: string;
    bio?: string;
    image?: string;
};

export interface GetAllUserStateProps {
    dataAllUser: UserAllProfile[];
    error: object | string | null;
}

