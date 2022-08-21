/* eslint-disable no-unused-vars */
import create from 'zustand';

export type FilmderNotification = {
    text: string;
    actionLabel: string;
    callback: (value?: any) => void
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
