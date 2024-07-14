import React from "react";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import styles from "@/components/Authentication/Authentication.module.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { forgetPasswordFunApi } from "store/auth/services";
import { LoadingButtonComponent } from "../UIElements/Buttons/LoadingButton";

const ForgotPasswordForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Email is required'),
    }), 
    onSubmit: async (values) => {
      console.log("Handle Submit", values);
      dispatch(
        forgetPasswordFunApi({
          data: values,
          onSuccess: () => {
            const myPhone = btoa(values.email);
            console.log("myPhone37",myPhone) 
            router.push(`/authentication/verify-otp?data=${myPhone}`);
          },
        })
      );
    },
  });

  return (
    <>
      <div className="authenticationBox">
        <Box
          component="main"
          sx={{
            maxWidth: "510px",
            ml: "auto",
            mr: "auto",
            padding: "50px 0 100px",
          }}
        >
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Box>
              <Typography as="h1" fontSize="28px" fontWeight="700" mb="5px">
                Forgot Password?{" "}
                <Image
                  width={30}
                  height={30}
                  src="/images/favicon.png"
                  alt="favicon"
                  className={styles.favicon}
                />
              </Typography>

              <Typography fontSize="15px" mb="30px">
                Enter your email address and we′ll send you instructions to reset
                your password
              </Typography>

              <Box component="form" noValidate onSubmit={formik.handleSubmit}>
                <Box
                  sx={{
                    background: "#fff",
                    padding: "30px 20px",
                    borderRadius: "10px",
                    mb: "20px",
                  }}
                  className="bg-black"
                >
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item xs={12}>
                      <Typography
                        component="label"
                        sx={{
                          fontWeight: "500",
                          fontSize: "14px",
                          mb: "10px",
                          display: "block",
                        }}
                      >
                        Email Address
                      </Typography>

                      <TextField
                        required
                        fullWidth
                        label="Email"
                        autoComplete="email"
                        {...formik.getFieldProps("email")}
                        error={
                          formik.touched.email && formik.errors.email
                            ? true
                            : false
                        }
                        helperText={
                          formik.touched.email && formik.errors.email
                            ? formik.errors.email
                            : ""
                        }
                        InputProps={{
                          style: { borderRadius: 8 },
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>

                <LoadingButtonComponent
                  type="submit"
                  disabled={isLoading}
                  isLoading={isLoading}
                  value="Submit"
                />
              </Box>

              <Box as="div" textAlign="center" mt="20px">
                <Link
                  href="/authentication/sign-in/"
                  className="primaryColor text-decoration-none"
                >
                  <i className="ri-arrow-left-s-line"></i> Back to Sign in
                </Link>
              </Box>
            </Box>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default ForgotPasswordForm;
