import { gql } from "apollo-boost";

export const queryAdminStudents = gql`
  query institute($where: InstituteWhereUniqueInput!) {
    institute(where: $where) {
      students {
        id
        name
        email
        phone
        address
        gender
      }
    }
  }
`;
export const createStudent = gql`
  mutation createStudent($data: MyStudentCreateInput!, $where: MyInstituteWhereUniqueInput!) {
    createStudent(data: $data, where: $where) {
      id
      name
      email
      phone
      gender
    }
  }
`;
