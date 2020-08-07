import { gql } from "apollo-boost";

export const login = gql`
  query($data: LoginStudentInput!) {
    login(data: $data) {
      token
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
      }
      teacher {
        id
        name
        email
        role
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

export const authorizeUser = gql`
  query {
    authorizeUser {
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
          section
          coverPhoto {
            secureUrl
          }
          teacher {
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
        role
        photo {
          secureUrl
        }
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
export const forgotPassword = gql`
  query($email: String!) {
    forgotPassword(email: $email) {
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
      }
      teacher {
        id
        name
        email
        role
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
export const setPassword = gql`
  mutation($data: SetPasswordInput!) {
    setPassword(data: $data) {
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
      }
      teacher {
        id
        name
        email
        role
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
