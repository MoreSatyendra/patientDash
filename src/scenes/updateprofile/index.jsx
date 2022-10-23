import { Box, Button, TextField } from "@mui/material";
import { Field, Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import InputAdornment from "@mui/material/InputAdornment";
import Header from "../../components/Header";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="UPDATE PROFILE" subtitle="Update a User Profile" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="file"
                // label="Profile Image"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.profileImage}
                // name="profileImage"
                error={!!touched.profileImage && !!errors.profileImage}
                helperText={touched.profileImage && errors.profileImage}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Doctor ID"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.doctorID}
                name="doctorID"
                error={!!touched.doctorID && !!errors.doctorID}
                helperText={touched.doctorID && errors.doctorID}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Gender"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.gender}
                name="gender"
                error={!!touched.gender && !!errors.gender}
                helperText={touched.gender && errors.gender}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Specialization"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.specialization}
                name="specialization"
                error={!!touched.specialization && !!errors.specialization}
                helperText={touched.specialization && errors.specialization}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Experience"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.experience}
                name="experience"
                error={!!touched.experience && !!errors.experience}
                helperText={touched.experience && errors.experience}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Clinic Address"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.clinicAddress}
                name="clinicAddress"
                error={!!touched.clinicAddress && !!errors.clinicAddress}
                helperText={touched.clinicAddress && errors.clinicAddress}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Medical Certificate Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.medicalCertificateNumber}
                name="medicalCertificateNumber"
                error={
                  !!touched.medicalCertificateNumber &&
                  !!errors.medicalCertificateNumber
                }
                helperText={
                  touched.medicalCertificateNumber &&
                  errors.medicalCertificateNumber
                }
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="tel"
                label="Aadhar Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.aadharNumber}
                name="aadharNumber"
                error={!!touched.aadharNumber && !!errors.aadharNumber}
                helperText={touched.aadharNumber && errors.aadharNumber}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="time"
                min="08:00"
                max="18:00"
                label="available Time"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.availableTime}
                name="availableTime"
                error={!!touched.availableTime && !!errors.availableTime}
                helperText={touched.availableTime && errors.availableTime}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                label="Consulting Fees"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.consultationFee}
                name="consultationFee"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CurrencyRupeeIcon />
                    </InputAdornment>
                  ),
                }}
                error={!!touched.consultationFee && !!errors.consultationFee}
                helperText={touched.consultationFee && errors.consultationFee}
                sx={{ gridColumn: "span 2" }}
              />
              <small className="pd-10">
                Some Available hours are From 9am to 6pm
              </small>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                UPDATE
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/gm;
const aadharRegEx = "^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$";

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  doctorID: yup.string().required("required"),
  gender: yup.string().required("required"),
  experience: yup.string().required("required"),
  specialization: yup.string().required("required"),
  address1: yup.string().required("required"),
  clinicAddress: yup.string().required("required"),
  medicalCertificateNumber: yup.string().required("required"),
  aadharNumber: yup
    .string()
    .matches(aadharRegEx, "aadhar number is not valid")
    .required("required"),
  availableTime: yup.string().required("required"),
  consultationFee: yup.string().required("required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  experience: "",
  doctorID: "",
  specialization: "",
  gender: "",
  address1: "",
  clinicAddress: "",
  medicalCertificateNumber: "",
  aadharNumber: "",
  availableTime: "",
  consultationFee: "",
};

export default Form;
