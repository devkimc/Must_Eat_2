import { useMutation } from 'react-query';
import { deleteGroup } from 'lib/api/group';

export default function useDeleteGroup({ options }) {
    return useMutation((groupId: number) => deleteGroup(groupId), {
        ...options,
    });
}
