import { useMutation } from 'react-query';
import { rejectInvite } from 'lib/api/group';

export default function useRejectInvite({ options }) {
    return useMutation((inviteId: number) => rejectInvite(inviteId), {
        ...options,
    });
}
