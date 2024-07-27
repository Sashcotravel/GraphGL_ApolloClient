import { gql } from '@apollo/client';

export const GET_NAME_AND_ID = gql`
    fragment GetNameAndId on User {
        id
        name
    }
`;