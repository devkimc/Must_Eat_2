import { useMutation } from 'react-query';
import { acceptInvite } from 'lib/api/group';

export default function useAcceptInvite({ options }) {
    return useMutation((inviteId: number) => acceptInvite(inviteId), {
        ...options,
    });
}
