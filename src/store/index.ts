import { create } from 'zustand'

interface MacbookStore {
    color: string;
    scale: number;
    setColor: (color: string) => void;
    setScale: (scale: number) => void;
}

const useMacbookStore = create<MacbookStore>((set) => ({
    color: '#adb5db',
    scale: 0.06,
    setColor: (color) => set({ color }),
    setScale: (scale) => set({ scale }),
}))

export default useMacbookStore