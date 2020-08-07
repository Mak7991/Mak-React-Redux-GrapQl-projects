import { gql } from "apollo-boost";

export const queryAdminClassrooms = gql`
  query institute($where: InstituteWhereUniqueInput!) {
    institute(where: $where) {
      classrooms {
        id
        name
        subject
        section
        room
      }
    }
  }
`;

export const createClassroom = gql`
  mutation createClassroom($data: ClassroomCreateInput!, $where: MyInstituteWhereUniqueInput!) {
    createClassroom(data: $data, where: $where) {
      id
      name
      subject
      section
      room
    }
  }
`;
