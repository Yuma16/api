import { describe, test, expect } from "@jest/globals";
import request from 'supertest';
import app from '../src/app';
import { IDoctor, IPatient } from "../src/types";

const PATH = '/api/v1';

const fullPaths = {
  doctors: `${ PATH }/doctors`,
  patients: `${ PATH }/patients`,
  appointments: `${ PATH }/patients`,
};

describe('Validating possible scenarios when interacting with doctors', ()=>{

  const { doctors } = fullPaths;

  describe('GET /doctors',  ()=>{
    test('Should respond with 200 status', async ()=>{
      const response =  await request(app).get(doctors).send();

      expect(response.statusCode).toBe(200);
    });

    test('Should respond with an instance of Array', async ()=>{
      const response =  await request(app).get(doctors).send();

      expect(response.body).toBeInstanceOf(Array);
    });

    test('Should respond with content-type: application/json', async ()=>{
      const response =  await request(app).get(doctors).send();

      expect(response.headers['content-type']).toEqual(
        expect.stringContaining("json")
      );
    });

    test('Should contains an ID', async ()=>{
      const response =  await request(app).get(doctors).send();

      const doctorsInfo = response.body;

      for(const doctor of doctorsInfo) {
        expect(doctor).toHaveProperty('id');
      };

    });

    test('Should contains an speciality', async ()=>{
      const response =  await request(app).get(doctors).send();

      const doctorsInfo = response.body;

      for(const doctor of doctorsInfo) {
        expect(doctor).toHaveProperty('speciality');
      };

    });

    test('Should contains an consulting room', async ()=>{
      const response =  await request(app).get(doctors).send();

      const doctorsInfo = response.body;

      for(const doctor of doctorsInfo) {
        expect(doctor).toHaveProperty('consulting_room');
      };

    });
  });

  describe('POST /doctors', ()=>{

    const doctorPayload : IDoctor = {
      first_name: 'Pepito',
      last_name: 'Perez',
      /*
        Each time you run the test you have to update
        the email to a different one from the 
        previous one.
      */
      email: 'pepito.perez12@testing.com',
      id_office_number: 1,
      id_speciality: 1 
    };

    test('Should respond with 201 status', async ()=>{
      const response = await request(app).post(doctors).send(doctorPayload);

      expect(response.statusCode).toBe(201);
    });

    test('Should respond with 400 if data is missing', async ()=>{

      const { first_name, ...withoutFirstName } = doctorPayload;
      const { last_name, ...withoutLastName } = doctorPayload;
      const { email, ...withoutEmail } = doctorPayload;
      const { id_office_number, ...withoutOffice } = doctorPayload;
      const { id_speciality, ...withoutSpeciality } = doctorPayload;

      const fields = [
        withoutFirstName,
        withoutLastName,
        withoutEmail,
        withoutOffice,
        withoutSpeciality
      ];

      for(const field of fields) {
        
        const response = await request(app).post(doctors).send(field);
  
        expect(response.statusCode).toBe(400);
      };

    });
  });
});

describe('Validating possible scenarios when interacting with patients', ()=>{

  const { patients } = fullPaths;

  describe('GET /doctors',  ()=>{
    test('Should respond with 200 status', async ()=>{
      const response =  await request(app).get(patients).send();

      expect(response.statusCode).toBe(200);
    });

    test('Should respond with an instance of Array', async ()=>{
      const response =  await request(app).get(patients).send();

      expect(response.body).toBeInstanceOf(Array);
    });

    test('Should respond with content-type: application/json', async ()=>{
      const response =  await request(app).get(patients).send();

      expect(response.headers['content-type']).toEqual(
        expect.stringContaining("json")
      );
    });

    test('Should contains an ID', async ()=>{
      const response =  await request(app).get(patients).send();

      const patientsInfo = response.body;

      for(const patient of patientsInfo) {
        expect(patient).toHaveProperty('id');
      };

    });

  });

  describe('POST /doctors', ()=>{

    const patientPayload : IPatient = {
      first_name: 'Juanito',
      last_name: 'Alcachofa',
      birth_date: new Date('1997-10-09T08:00:00.000Z'),
      phone: 3194448888
    };

    test('Should respond with 201 status', async ()=>{
      const response = await request(app).post(patients).send(patientPayload);

      expect(response.statusCode).toBe(201);
    });

    test('Should respond with 400 if data is missing', async ()=>{

      const { first_name, ...withoutFirstName } = patientPayload;
      const { last_name, ...withoutLastName } = patientPayload;
      const { birth_date, ...withoutBirthDate } = patientPayload;
      const { phone, ...withoutPhone } = patientPayload;

      const fields = [
        withoutFirstName,
        withoutLastName,
        withoutBirthDate,
        withoutPhone
      ];

      for(const field of fields) {
        
        const response = await request(app).post(patients).send(field);
  
        expect(response.statusCode).toBe(400);
      };

    });

  });
});

