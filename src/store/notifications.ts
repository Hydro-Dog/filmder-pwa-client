/* eslint-disable no-unused-vars */
import create from 'zustand';

export type FilmderNotification = {
    id: string;
    text: string;
    actionLabel: string;
    actionCallback?: (value?: any) => void;
    closeCallback?: (value?: any) => void
}

type NotificationState = {
    notifications: FilmderNotification[];
    addNotification: (notification: FilmderNotification) => void;
    clearNotifications: () => unknown;
  }

export const useNotificationsStore = create<NotificationState>((set) => ({
  notifications: [],
  addNotification: (notification: FilmderNotification) => set((state) => ({
    notifications: [...state.notifications, notification],
  })),
  clearNotifications: () => set(() => ({ notifications: [] })),
}));
