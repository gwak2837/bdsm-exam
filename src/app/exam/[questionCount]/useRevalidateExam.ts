import { fetchPOST } from '@/util/swr'
import useSWRMutation from 'swr/mutation'

type Props = {
  examId: string
}

export default function useRevalidateExam({ examId }: Props) {
  return useSWRMutation(`/api/question/${examId}`, fetchPOST)
}
