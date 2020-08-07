import * as yup from "yup";

const applicationForApply = yup.object().shape({
    fullName:  yup.string().label('Full Name').required('Please enter full name is required.'),
    email: yup.string().email('Please enter a valid email').label('Email').required('Please enter email is required.'),
    phone: yup.number().label('Phone').required('Please enter phone is required.'),
    coverLetter: yup.string().label('Full Name').required('Please enter cover letter is required.'),
    profileLink: yup.string()
});

const contactUs = yup.object().shape({
    fullName:  yup.string().label('Full Name').required('Please enter full name is required.'),
    email: yup.string().email('Please enter a valid email').label('Email').required('Please enter email is required.'),
    phone: yup.string().label('Phone').required('Please enter phone is required.'),
    message: yup.string().label('Message').required('Please enter message is required.')
});

export {
    applicationForApply,
    contactUs
}