import { gql } from "apollo-boost";

export const queryAdmintTeachers = gql`
  query institute($where: InstituteWhereUniqueInput!) {
    institute(where: $where) {
      teachers {
        id
        name
        email
        gender
        phone
        address
      }
    }
  }
`;

export const createTeacher = gql`
  mutation createTeacher($data: MyTeacherCreateInput!, $where: MyInstituteWhereUniqueInput!) {
    createTeacher(data: $data, where: $where) {
      id
      name
      email
      phone
      gender
    }
  }
`;
