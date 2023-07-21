import React, { useState } from 'react'
import { Typography, Button, Stack } from '@mui/material';
import { Formik, Form, Field } from 'formik';


const CreateDoctor = () => {
  const [initialValues, setInitialValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    consultingRoom: "",
    specilaity: ""
  });

  return (<>
    <Typography variant='h4' component='h1' textAlign="center">Registrate como doctor</Typography>
    <Formik
      initialValues={ initialValues }

      onSubmit={(values)=>{
        console.log(values);
      }}
    >
      { ()=>(
        <Form>
          <Stack alignItems="stretch" gap={4} marginBottom={4}>
            <Stack>
              <label htmlFor="first_name">Nombres:</label>
              <Field className="create_app_input"   id='first_name' type='text' name="first_name" placeholder="Ingrese sus nombres aqui" />
            </Stack>
            <Stack>
              <label htmlFor="last_name">Apellidos:</label>
              <Field className="create_app_input"   id='last_name' type='text' name="last_name" placeholder="Ingrese sus apellidos aqui" />
            </Stack>
            <Stack>
              <label htmlFor="email">Correo electronico:</label>
              <Field className="create_app_input"   id='email' type='text' name="email" placeholder="Ingrese su correo electronico aqui" />
            </Stack>
            <Stack>
              <label htmlFor="consultingRoom">Consultorio:</label>
              <Field className="create_app_input"   id='consultingRoom' type='text' name="consultingRoom" placeholder="Seleccione una especialidad" />
            </Stack>
            <Stack>
              <label htmlFor="specilaity">Especialidad:</label>
              <Field className="create_app_input"   id='specilaity' type='text' name="speciality" placeholder="Seleccione una especialidad" />
            </Stack>
            <Button variant='contained'>Crear registros</Button>
          </Stack>
        </Form>
      ) }
    </Formik>
  </>);
};

export default CreateDoctor;