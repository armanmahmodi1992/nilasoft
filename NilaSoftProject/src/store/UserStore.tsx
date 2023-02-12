import AsyncStorage from '@react-native-async-storage/async-storage';
import create, { StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

export type UserState = {
    userId: number;
    setUserId: (userId: number) => void;
};

type UserPersist = (
    config: StateCreator<UserState>,
    options: PersistOptions<UserState>,
) => StateCreator<UserState>;

const initialState: any = {
    userId: 0,
}
export const userIdStore = create<UserState>(
    (persist as unknown as UserPersist)(
        set => ({
            ...initialState,
            setUserId: (userId: number) => set({ userId }),
        }),
        {
            name: 'userId-storage',
            getStorage: () => AsyncStorage,
        },

    ),
);

export default userIdStore;