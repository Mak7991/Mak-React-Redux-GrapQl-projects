import { gql } from "apollo-boost";
export const curUser = gql`
  query {
    me {
      student {
        id
        name
        email
        role
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
export const editTeacher = gql`
  mutation($data: TeacherUpdateInput!) {
    updateTeacher(data: $data) {
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
export const updatePasswordTeacher = gql`
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
