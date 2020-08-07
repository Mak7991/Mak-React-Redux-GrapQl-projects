import { gql } from "apollo-boost";
export const getClassroom = gql`
  query($where: ClassroomWhereUniqueInput!) {
    getClassroom(where: $where) {
      id
      name
      subject
      section
      room
      coverPhoto {
        secureUrl
      }
      students {
        id
        name
        email
        photo {
          secureUrl
        }
      }
      posts {
        id
        createdAt
        author {
          name
          email
          photo {
            secureUrl
          }
        }
        postText
        commnets {
          createdAt
          commentText
          author {
            name
            photo {
              secureUrl
            }
          }
        }
      }
      teacher {
        id
        name
        email
        phone
        gender
        photo {
          secureUrl
        }
      }
    }
  }
`;
export const createPost = gql`
  mutation($where: ClassroomPostWhereInput!, $data: ClassroomPostCreateInput!) {
    createPost(where: $where, data: $data) {
      id
      createdAt
      author {
        id
        name
        email
        photo {
          secureUrl
        }
      }
      postText
    }
  }
`;
