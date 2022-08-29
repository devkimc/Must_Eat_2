import { useMutation } from 'react-query';
import createGroup from 'lib/api/group';

export default function useCreateGroup({ groupNm, options }) {
    return useMutation(() => createGroup(groupNm), {
        ...options,
    });
}
