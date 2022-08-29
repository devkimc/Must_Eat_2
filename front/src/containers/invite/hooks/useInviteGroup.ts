import { useMutation } from 'react-query';
import { inviteGroup } from 'lib/api/group';

export default function useInviteGroup({ selectedGroupId, userId, options }) {
    return useMutation(() => inviteGroup(selectedGroupId, userId), {
        ...options,
    });
}
