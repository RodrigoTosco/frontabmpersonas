import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Formik } from "formik";
import * as Yup from 'yup';


export default function FormDialog({abrir, cerrar}) {
  const [open, setOpen] = React.useState(abrir);

  const LogInSchema = Yup.object().shape({
        name: Yup.string().required('campo Requerido'),
        password: Yup.string().required('campo Requerido')
  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Dialog open={abrir} onClose={cerrar}>
        <DialogTitle>Ingresar</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{
                name: '',
                password: ''
            }}
            validationSchema={LogInSchema}
          > 
          {({handleSubmit}) => (
            <form action="" onSubmit={handleSubmit}>
              <DialogContentText>
                Ingrese su nombre de usuario
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                name="name"
                label="Nombre de usuario"
                fullWidth
                variant="standard"
              />
              <DialogContentText>Ingrese su constrasena</DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                password="password"
                label="Ingrese su contrasena"
                type='password'
                fullWidth
                variant="standard"
              />
            </form>
            )}
          </Formik>
        </DialogContent>
        <DialogActions>
          <Button onClick={cerrar}>Cancel</Button>
          <Button type='submit'>Ingresar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
