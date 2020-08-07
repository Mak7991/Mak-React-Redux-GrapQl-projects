import moment from "moment";
//Date
export const createDateFormat = (user) => {
  if (user.dob) {
    const date = `${user.dob.day < 10 ? "0" + user.dob.day : user.dob.day}-${
      user.dob.month < 10 ? "0" + user.dob.month : user.dob.month
    }-${user.dob.year}`;
    return {
      ...user,
      dob: moment(date, "DD-MM-YYYY"),
    };
  }
  return {
    ...user,
  };
};
