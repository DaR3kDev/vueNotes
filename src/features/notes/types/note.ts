export interface Note {
  id?: string
  title: string
  content: string
  tags: string[]
}

export type ModalBaseType = {
  open: () => void
  close: () => void
}
