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
      superAdmin {
        id
        name
        email
        role
      }
    }
  }
`;
export const editStudent = gql`
  mutation($data: StudentUpdateInput!) {
    updateStudent(data: $data) {
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
  }
`;
export const updatePasswordStudent = gql`
  mutation($data: UpdatePasswordInput!) {
    updatePassword(data: $data) {
      id
      name
      email
      role
    }
  }
`;
export const updateCoverPhoto = gql`
  mutation($file: Upload!) {
    updateCoverPhoto(file: $file) {
      secureUrl
    }
  }
`;

export const updateAvatar = gql`
  mutation($file: Upload!) {
    updateAvatar(file: $file) {
      secureUrl
    }
  }
`;
