import { useCallback, useState } from 'react'

export function useModalWithData<D = any>(
    initialOpened?: boolean,
    initialData?: D
): { opened: boolean; data: D | null; openModal: (D:D) => void; closeModal: () => void } {
    const [opened, setOpened] = useState<boolean>(initialOpened ?? false)
    const [data, setData] = useState<D | null>(initialData ?? null)

    const openModal = useCallback((d: D) => {
        setData(d)
        setOpened(true)
    }, [])

    const closeModal = useCallback(() => {
        setOpened(false)
        setData(null)
    }, [])

    return { opened, data, openModal, closeModal }
}
