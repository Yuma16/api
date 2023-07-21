SET search_path = public, medical_appointments_db;

BEGIN;

INSERT INTO public.specialities(speciality_name)
VALUES
	('Medicina general'),
  ('Cardiología'),
  ('Medicina interna'),
  ('Dermatología'),
  ('Rehabilitación física'),
  ('Psicología'),
  ('Odontología'),
  ('Radiología');

INSERT INTO public.appointment_states(status)
VALUES
  ('pending'),
  ('cancelled'),
  ('completed');

INSERT INTO public.floors("level")
VALUES
	(1),
	(2),
	(3);

INSERT INTO public.patients(first_name, last_name, birth_date, phone)
VALUES
    ('Lucas', 'Sánchez', '1999-07-15 08:30:00+00:00', 3101234567),
    ('Valeria', 'Morales', '1989-03-22 14:15:00+00:00', 3202345678),
    ('Martín', 'Ríos', '1992-11-10 12:45:00+00:00', 3123456789),
    ('Sofía', 'Vargas', '1994-06-05 10:20:00+00:00', 3144567890),
    ('Alejandro', 'Navarro', '1990-09-18 16:40:00+00:00', 3005678901),
    ('Camila', 'Jiménez', '1997-12-28 09:55:00+00:00', 3156789012),
    ('Diego', 'Torres', '1991-04-12 17:25:00+00:00', 3177890123),
    ('Renata', 'Silva', '1995-08-07 11:10:00+00:00', 3188901234),
    ('Juanita', 'Gómez', '1988-02-02 13:30:00+00:00', 3219012345),
    ('Sebastián', 'Medina', '1996-10-20 15:05:00+00:00', 3190123456);

INSERT INTO public.consulting_rooms(office_code, id_floor)
VALUES
	('101', 1),
	('102', 1),
	('103', 1),
	('201', 2),
	('202', 2),
	('203', 2),
	('301', 3),
	('302', 3),
	('303', 3);

INSERT INTO public.doctors(
    first_name,
    last_name,
    email,
    id_office_number,
    id_speciality
  )
VALUES
  ('Sofía', 'García', 'sofia.garcia@medicapp.com', 1, 1),
  ('Alejandro', 'Rodríguez', 'alejandro.rodriguez@medicapp.com', 2, 2),
  ('Isabella', 'Martínez', 'isabella.martinez@medicapp.com', 3, 3),
  ('Carlos', 'López', 'carlos.lopez@medicapp.com', 4, 4),
  ('Valentina', 'Torres', 'valentina.torres@medicapp.com', 5, 5),
  ('Santiago', 'Morales', 'santiago.morales@medicapp.com', 6, 6),
  ('Camila', 'Herrera', 'camila.herrera@medicapp.com', 7, 7),
  ('Mateo', 'Silva', 'mateo.silva@medicapp.com', 8, 8);

END;