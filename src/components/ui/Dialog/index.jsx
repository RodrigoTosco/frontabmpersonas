import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Formik } from "formik";
import * as Yup from "yup";
import { loggin } from "../../../api/rulesUser";
import { useState } from "react";
import { typography } from "@mui/system";
import { Typography } from "@mui/material";
import { useDispatch } from 'react-redux';
import { setIsLoged, setUserName } from "../../../redux/login/loginSlice";


export default function FormDialog({ abrir, cerrar }) {
  const LogInSchema = Yup.object().shape({
    userName: Yup.string().required("campo Requerido"),
    password: Yup.string().required("campo Requerido"),
  });

  const dispatch = useDispatch();

  const [error, setError] = useState(false);

  const getAuth = async (values) => {
    let promise = await loggin(values);
    if (promise == 200) {
        setError(false);
        dispatch(setIsLoged());
        dispatch(setUserName(values.userName))
        cerrar();
    } else {
        setError(true);
    }
  }

  return (
    <div>
      <Dialog open={abrir} onClose={cerrar}>
        <DialogTitle>Ingresar</DialogTitle>

        <Formik
          initialValues={{
            userName: "",
            password: "",
          }}
          validationSchema={LogInSchema}
          onSubmit={(values) => {
            getAuth(values);
          }}
        >
          {({ handleChange, handleSubmit, errors, touched, values }) => (
            <form action="" onSubmit={handleSubmit}>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  name="userName"
                  label="Nombre de usuario"
                  fullWidth
                  variant="standard"
                  value={values.userName}
                  onChange={handleChange}
                  error={touched.userName && Boolean(errors.userName)}
                  helperText={touched.userName && errors.userName}
                />
                <hr />
                <TextField
                  autoFocus
                  margin="dense"
                  name="password"
                  label="Ingrese su contrasena"
                  type="password"
                  fullWidth
                  variant="standard"
                  value={values.password}
                  onChange={handleChange}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />

                {error && (
                    <Typography
                    className="error"
                    variant="caption"
                    display='block'
                    style = {{color: '#d32f2f'}}
                    >
                        usuario o contrasena incorrectos, intente nuevamente
                    </Typography>
                )}
              </DialogContent>
              <DialogActions>
                <Button onClick={cerrar}>Cancelar</Button>
                <Button type="submit">Ingresar</Button>
              </DialogActions>
            </form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
}
