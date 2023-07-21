import React, { useState } from 'react'
import { Typography, Button, Stack } from '@mui/material';
import { Formik, Form, Field } from 'formik';

const CreatePatient = () => {
  const [initialValues, setInitialValues] = useState({
    first_name: "",
    last_name: "",
    bithDate: "",
    consultingRoom: "",
    specilaity: ""
  });

  return (<>
    <Typography variant='h4' component='h1' textAlign="center">Registrate como paciente</Typography>
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
              <label htmlFor="bithDate">Fecha de nacimiento:</label>
              <Field className="create_app_input" id='bithDate' type='text' name="bithDate" placeholder="Ingrse su fecha de nacimiento aqui" />
            </Stack>
            <Stack>
              <label htmlFor="consultingRoom">Telefono celular:</label>
              <Field className="create_app_input"   id='consultingRoom' type='text' name="consultingRoom" placeholder="Ingrese su numero de telefono celular aqui" />
            </Stack>
            <Button variant='contained'>Crear registros</Button>
          </Stack>
        </Form>
      ) }
    </Formik>
  </>);
};

export default CreatePatient;