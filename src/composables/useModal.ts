import { type Ref } from 'vue'

export function useModal(modalRef: Ref<HTMLDialogElement | null>) {
  const open = () => modalRef.value?.showModal()
  const close = () => modalRef.value?.close()

  return { open, close }
}
