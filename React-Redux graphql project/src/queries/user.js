import { gql } from "apollo-boost";
export const curUser = gql`
  query {
    me {
      student {
        id
        name
        email
        role
        phone
        bio
        password
        dob {
          year
          month
          day
        }
        socialLinks {
          id
          type
          link
        }
        coverPhoto {
          secureUrl
        }
        photo {
          secureUrl
        }
        gender
        address
        education
        classrooms {
          id
          name
          subject
          coverPhoto {
            secureUrl
          }
          students {
            id
            name
            email
          }
          teacher {
            id
            name
            email
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
        role
        phone
        bio
        password
        dob {
          year
          month
          day
        }
        socialLinks {
          id
          type
          link
        }
        coverPhoto {
          secureUrl
        }
        photo {
          secureUrl
        }
        gender
        address
        education
      }
      superAdmin {
        id
        name
        email
        role
      }
    }
  }
`;
