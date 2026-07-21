import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";
import { useAuthStore } from "./useAuthStore";

export const useChatStore = create((set, get) => ({
    messages: [],
    users: [],
    selectedUser: null,
    isUsersLoading: false,
    isMessagesLoading: false,

    getUsers: async () => {
        set({ isUsersLoading: true });
        try {
            const res = await axiosInstance.get("/messages/users");
            set({ users: res.data });
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isUsersLoading: false });
        }
    },

    getMessages: async (userId) => {
        set({ isMessagesLoading: true });
        try {
            const res = await axiosInstance.get(`/messages/${userId}`);
            set({ messages: res.data });
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isMessagesLoading: false });
        }
    },
    sendMessage: async (messageData) => {
        const { selectedUser, messages } = get();
        try {
            const res = await axiosInstance.post(`/messages/send/${selectedUser._id}`, messageData);
            // Ensure we have a proper response before updating state
            if (res && res.data) {
                set({ messages: [...messages, res.data] });
            } else {
                toast.error('Message sent but server response was unexpected');
            }
        } catch (error) {
            const errMsg = error?.response?.data?.message || error?.response?.data?.error || error.message || 'Failed to send message';
            toast.error(errMsg);
        }
    },

    subscribeToMessages: () => {
        const { selectedUser } = get();
        if (!selectedUser) return;

        // Get socket and authenticated user from auth store
        const { socket, authUser } = useAuthStore.getState();

        socket.on("newMessage", (newMessage) => {
            // Only handle messages that belong to the currently opened conversation
            const isRelevant =
                (newMessage.senderId === selectedUser._id && newMessage.receiverId === authUser?._id) ||
                (newMessage.senderId === authUser?._id && newMessage.receiverId === selectedUser._id);
            if (!isRelevant) return;

            // Prevent duplicate messages
            const exists = get().messages.some((msg) => msg._id === newMessage._id);
            if (exists) return;

            set({ messages: [...get().messages, newMessage] });
        });
    },

    unsubscribeFromMessages: () => {
        const socket = useAuthStore.getState().socket;
        socket.off("newMessage");
    },

    setSelectedUser: (selectedUser) => set({ selectedUser }),
}));
