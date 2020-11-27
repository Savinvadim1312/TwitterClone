export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        name
        image
        fleets {
          nextToken
          items {
            id
            type
            text
            image
            userID
            createdAt
            updatedAt
          }
        }
      }
      nextToken
    }
  }
`;
