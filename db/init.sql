--
-- PostgreSQL database dump
--

-- Dumped from database version 15.12 (Debian 15.12-1.pgdg120+1)
-- Dumped by pg_dump version 17.0

-- Started on 2025-04-13 20:53:18

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE unidb;
--
-- TOC entry 3434 (class 1262 OID 16384)
-- Name: unidb; Type: DATABASE; Schema: -; Owner: -
--

CREATE DATABASE unidb WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';


\connect unidb

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- TOC entry 3435 (class 0 OID 0)
-- Dependencies: 4
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 218 (class 1259 OID 24617)
-- Name: course; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.course (
    nrc integer NOT NULL,
    idprofessor integer,
    idsubject character varying(10)
);


--
-- TOC entry 222 (class 1259 OID 24650)
-- Name: courseprof; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.courseprof (
    id integer NOT NULL,
    idprofessor integer,
    nrc integer
);


--
-- TOC entry 221 (class 1259 OID 24649)
-- Name: courseprof_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.courseprof_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3436 (class 0 OID 0)
-- Dependencies: 221
-- Name: courseprof_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.courseprof_id_seq OWNED BY public.courseprof.id;


--
-- TOC entry 220 (class 1259 OID 24633)
-- Name: coursesregister; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.coursesregister (
    id integer NOT NULL,
    idstudent character varying(30),
    nrc integer
);


--
-- TOC entry 219 (class 1259 OID 24632)
-- Name: coursesregister_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.coursesregister_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3437 (class 0 OID 0)
-- Dependencies: 219
-- Name: coursesregister_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.coursesregister_id_seq OWNED BY public.coursesregister.id;


--
-- TOC entry 214 (class 1259 OID 24582)
-- Name: departments; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.departments (
    iddept character varying(4) NOT NULL,
    namedept character varying(50),
    division character varying(30)
);


--
-- TOC entry 223 (class 1259 OID 24666)
-- Name: location; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.location (
    idlocation integer NOT NULL,
    name character varying(20),
    description character varying(150),
    latitude double precision,
    longitude double precision
);


--
-- TOC entry 216 (class 1259 OID 24597)
-- Name: professors; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.professors (
    idprofessor integer NOT NULL,
    firstname character varying(30),
    middlename character varying(30),
    lastname character varying(30),
    email character varying(100),
    iddept character varying(4)
);


--
-- TOC entry 224 (class 1259 OID 24671)
-- Name: schedules; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.schedules (
    idschedule integer NOT NULL,
    day character varying(20),
    starttime time without time zone,
    endtime time without time zone,
    nrc integer,
    idlocation integer
);


--
-- TOC entry 217 (class 1259 OID 24607)
-- Name: students; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.students (
    idstudent character varying(30) NOT NULL,
    password character varying(100) NOT NULL,
    name character varying(30) NOT NULL,
    middlename character varying(30),
    lastname character varying(30) NOT NULL,
    email character varying(30) NOT NULL,
    iddept character varying(4) NOT NULL,
    username character varying
);


--
-- TOC entry 215 (class 1259 OID 24587)
-- Name: subject; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.subject (
    idsubject character varying(10) NOT NULL,
    name character varying(30),
    iddept character varying(4),
    credits integer
);


--
-- TOC entry 225 (class 1259 OID 24686)
-- Name: task; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.task (
    title character varying(50),
    description character varying(300),
    enddate timestamp without time zone,
    status boolean,
    nrc integer,
    idstudent character varying(30),
    idtask integer NOT NULL
);


--
-- TOC entry 226 (class 1259 OID 32903)
-- Name: task_idtask_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.task_idtask_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 227 (class 1259 OID 32910)
-- Name: task_idtask_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.task ALTER COLUMN idtask ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.task_idtask_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 3239 (class 2604 OID 32920)
-- Name: courseprof id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.courseprof ALTER COLUMN id SET DEFAULT nextval('public.courseprof_id_seq'::regclass);


--
-- TOC entry 3238 (class 2604 OID 32921)
-- Name: coursesregister id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.coursesregister ALTER COLUMN id SET DEFAULT nextval('public.coursesregister_id_seq'::regclass);


--
-- TOC entry 3419 (class 0 OID 24617)
-- Dependencies: 218
-- Data for Name: course; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.course VALUES (101, 1, '1');
INSERT INTO public.course VALUES (102, 2, '1');
INSERT INTO public.course VALUES (103, 1, '2');
INSERT INTO public.course VALUES (104, 2, '3');
INSERT INTO public.course VALUES (105, 3, '4');
INSERT INTO public.course VALUES (106, 4, '4');
INSERT INTO public.course VALUES (107, 3, '5');
INSERT INTO public.course VALUES (108, 4, '6');


--
-- TOC entry 3423 (class 0 OID 24650)
-- Dependencies: 222
-- Data for Name: courseprof; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.courseprof VALUES (1, 1, 101);
INSERT INTO public.courseprof VALUES (2, 2, 102);
INSERT INTO public.courseprof VALUES (3, 1, 103);
INSERT INTO public.courseprof VALUES (4, 2, 104);
INSERT INTO public.courseprof VALUES (5, 3, 105);
INSERT INTO public.courseprof VALUES (6, 4, 106);
INSERT INTO public.courseprof VALUES (7, 3, 107);
INSERT INTO public.courseprof VALUES (8, 4, 108);


--
-- TOC entry 3421 (class 0 OID 24633)
-- Dependencies: 220
-- Data for Name: coursesregister; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.coursesregister VALUES (1, '1', 101);
INSERT INTO public.coursesregister VALUES (2, '1', 103);
INSERT INTO public.coursesregister VALUES (3, '1', 104);
INSERT INTO public.coursesregister VALUES (4, '1', 105);
INSERT INTO public.coursesregister VALUES (5, '1', 106);
INSERT INTO public.coursesregister VALUES (6, '1', 107);
INSERT INTO public.coursesregister VALUES (7, '2', 101);
INSERT INTO public.coursesregister VALUES (8, '2', 102);
INSERT INTO public.coursesregister VALUES (9, '2', 104);
INSERT INTO public.coursesregister VALUES (10, '2', 105);
INSERT INTO public.coursesregister VALUES (11, '2', 107);
INSERT INTO public.coursesregister VALUES (12, '2', 108);
INSERT INTO public.coursesregister VALUES (13, '3', 103);
INSERT INTO public.coursesregister VALUES (14, '3', 104);
INSERT INTO public.coursesregister VALUES (15, '3', 105);
INSERT INTO public.coursesregister VALUES (16, '3', 106);
INSERT INTO public.coursesregister VALUES (17, '3', 107);
INSERT INTO public.coursesregister VALUES (18, '3', 108);


--
-- TOC entry 3415 (class 0 OID 24582)
-- Dependencies: 214
-- Data for Name: departments; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.departments VALUES ('1', 'Computer Science', 'Science');
INSERT INTO public.departments VALUES ('2', 'Mathematics', 'Science');


--
-- TOC entry 3424 (class 0 OID 24666)
-- Dependencies: 223
-- Data for Name: location; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.location VALUES (1, 'BLOQUE A', 'Bloque A', 11.018547, -74.851238);
INSERT INTO public.location VALUES (2, 'BLOQUE B', 'Bloque B', 11018795, -74.851093);
INSERT INTO public.location VALUES (3, 'BLOQUE K', 'Bloque de ingenierias', 11.020364, -74.851173);
INSERT INTO public.location VALUES (4, 'BLOQUE J', 'Bloque Mario Santo Domingo', 11.020933, -74.851562);


--
-- TOC entry 3417 (class 0 OID 24597)
-- Dependencies: 216
-- Data for Name: professors; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.professors VALUES (1, 'Alan', 'Turing', 'Smith', 'alan@univ.edu', '1');
INSERT INTO public.professors VALUES (2, 'Ada', 'Lovelace', 'Brown', 'ada@univ.edu', '1');
INSERT INTO public.professors VALUES (3, 'Grace', 'Murray', 'Hopper', 'grace@univ.edu', '2');
INSERT INTO public.professors VALUES (4, 'Kurt', 'Gödel', 'White', 'kurt@univ.edu', '2');


--
-- TOC entry 3425 (class 0 OID 24671)
-- Dependencies: 224
-- Data for Name: schedules; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.schedules VALUES (1, 'Monday', '08:00:00', '10:00:00', 101, 1);
INSERT INTO public.schedules VALUES (2, 'Wednesday', '08:00:00', '10:00:00', 101, 2);
INSERT INTO public.schedules VALUES (3, 'Tuesday', '10:00:00', '12:00:00', 104, 3);
INSERT INTO public.schedules VALUES (4, 'Thursday', '10:00:00', '12:00:00', 104, 4);
INSERT INTO public.schedules VALUES (5, 'Monday', '14:00:00', '16:00:00', 105, 1);
INSERT INTO public.schedules VALUES (6, 'Friday', '14:00:00', '16:00:00', 105, 3);


--
-- TOC entry 3418 (class 0 OID 24607)
-- Dependencies: 217
-- Data for Name: students; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.students VALUES ('2', '$2b$10$KTZ.kFd8.GnJNRpgarkn7ewbFJ.yudA5s4JGEhG/2ZnV8ZFVknb6C', 'Lucía', 'Maria', 'Torres', 'lucia@univ.edu', '2', 'ltorres');
INSERT INTO public.students VALUES ('3', '$2b$10$qWHrz3cvePJ/vuvHUYhStubZkqSfBDN3IYTI8Jv8KpuZh.Q6Kvbk6', 'José', 'Luis', 'Fernandez', 'jose@univ.edu', '1', 'jfernandez');
INSERT INTO public.students VALUES ('1', '$2a$10$0Ox1LgfZJF6.CTVo/KV68uYPhcDy3RHddrRd8iTRxiHO4V/.JRAv.', 'Carlos', 'Eduardo', 'Gomez', 'carlos@univ.edu', '1', 'cgomez');


--
-- TOC entry 3416 (class 0 OID 24587)
-- Dependencies: 215
-- Data for Name: subject; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.subject VALUES ('1', 'Algorithms', '1', 4);
INSERT INTO public.subject VALUES ('2', 'Data Structures', '1', 3);
INSERT INTO public.subject VALUES ('3', 'Operating Systems', '1', 4);
INSERT INTO public.subject VALUES ('4', 'Calculus', '2', 4);
INSERT INTO public.subject VALUES ('5', 'Linear Algebra', '2', 3);
INSERT INTO public.subject VALUES ('6', 'Discrete Math', '2', 3);


--
-- TOC entry 3426 (class 0 OID 24686)
-- Dependencies: 225
-- Data for Name: task; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.task OVERRIDING SYSTEM VALUE VALUES ('Task A1', 'Description A1', '2025-04-10 00:00:00', true, 101, '1', 1);
INSERT INTO public.task OVERRIDING SYSTEM VALUE VALUES ('Task C2', 'Description C2', '2025-04-18 00:00:00', true, 105, '2', 5);
INSERT INTO public.task OVERRIDING SYSTEM VALUE VALUES ('Task C3', 'Description C3', '2025-04-24 00:00:00', true, 105, '3', 6);
INSERT INTO public.task OVERRIDING SYSTEM VALUE VALUES ('Task C1', 'Description C1', '2025-04-12 00:00:00', true, 105, '1', 7);
INSERT INTO public.task OVERRIDING SYSTEM VALUE VALUES ('Task O2', 'Description O2', '2025-04-17 00:00:00', true, 104, '2', 8);
INSERT INTO public.task OVERRIDING SYSTEM VALUE VALUES ('Task O1', 'Description O1', '2025-04-11 00:00:00', true, 104, '1', 9);


--
-- TOC entry 3438 (class 0 OID 0)
-- Dependencies: 221
-- Name: courseprof_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.courseprof_id_seq', 1, false);


--
-- TOC entry 3439 (class 0 OID 0)
-- Dependencies: 219
-- Name: coursesregister_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.coursesregister_id_seq', 1, false);


--
-- TOC entry 3440 (class 0 OID 0)
-- Dependencies: 226
-- Name: task_idtask_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.task_idtask_seq', 9, true);


--
-- TOC entry 3441 (class 0 OID 0)
-- Dependencies: 227
-- Name: task_idtask_seq1; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.task_idtask_seq1', 13, true);


--
-- TOC entry 3249 (class 2606 OID 24621)
-- Name: course course_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.course
    ADD CONSTRAINT course_pkey PRIMARY KEY (nrc);


--
-- TOC entry 3253 (class 2606 OID 24655)
-- Name: courseprof courseprof_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.courseprof
    ADD CONSTRAINT courseprof_pkey PRIMARY KEY (id);


--
-- TOC entry 3251 (class 2606 OID 24638)
-- Name: coursesregister coursesregister_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.coursesregister
    ADD CONSTRAINT coursesregister_pkey PRIMARY KEY (id);


--
-- TOC entry 3241 (class 2606 OID 24586)
-- Name: departments departments_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.departments
    ADD CONSTRAINT departments_pkey PRIMARY KEY (iddept);


--
-- TOC entry 3255 (class 2606 OID 24670)
-- Name: location location_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.location
    ADD CONSTRAINT location_pkey PRIMARY KEY (idlocation);


--
-- TOC entry 3245 (class 2606 OID 24601)
-- Name: professors professors_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.professors
    ADD CONSTRAINT professors_pkey PRIMARY KEY (idprofessor);


--
-- TOC entry 3257 (class 2606 OID 24675)
-- Name: schedules schedules_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.schedules
    ADD CONSTRAINT schedules_pkey PRIMARY KEY (idschedule);


--
-- TOC entry 3247 (class 2606 OID 24611)
-- Name: students students_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pkey PRIMARY KEY (idstudent);


--
-- TOC entry 3243 (class 2606 OID 24591)
-- Name: subject subject_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.subject
    ADD CONSTRAINT subject_pkey PRIMARY KEY (idsubject);


--
-- TOC entry 3259 (class 2606 OID 32912)
-- Name: task task_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.task
    ADD CONSTRAINT task_pkey PRIMARY KEY (idtask);


--
-- TOC entry 3263 (class 2606 OID 24622)
-- Name: course course_idprofessor_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.course
    ADD CONSTRAINT course_idprofessor_fkey FOREIGN KEY (idprofessor) REFERENCES public.professors(idprofessor);


--
-- TOC entry 3264 (class 2606 OID 24627)
-- Name: course course_idsubject_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.course
    ADD CONSTRAINT course_idsubject_fkey FOREIGN KEY (idsubject) REFERENCES public.subject(idsubject);


--
-- TOC entry 3267 (class 2606 OID 24656)
-- Name: courseprof courseprof_idprofessor_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.courseprof
    ADD CONSTRAINT courseprof_idprofessor_fkey FOREIGN KEY (idprofessor) REFERENCES public.professors(idprofessor);


--
-- TOC entry 3268 (class 2606 OID 24661)
-- Name: courseprof courseprof_nrc_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.courseprof
    ADD CONSTRAINT courseprof_nrc_fkey FOREIGN KEY (nrc) REFERENCES public.course(nrc);


--
-- TOC entry 3265 (class 2606 OID 24639)
-- Name: coursesregister coursesregister_idstudent_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.coursesregister
    ADD CONSTRAINT coursesregister_idstudent_fkey FOREIGN KEY (idstudent) REFERENCES public.students(idstudent);


--
-- TOC entry 3266 (class 2606 OID 24644)
-- Name: coursesregister coursesregister_nrc_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.coursesregister
    ADD CONSTRAINT coursesregister_nrc_fkey FOREIGN KEY (nrc) REFERENCES public.course(nrc);


--
-- TOC entry 3261 (class 2606 OID 24602)
-- Name: professors professors_iddept_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.professors
    ADD CONSTRAINT professors_iddept_fkey FOREIGN KEY (iddept) REFERENCES public.departments(iddept);


--
-- TOC entry 3269 (class 2606 OID 24681)
-- Name: schedules schedules_idlocation_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.schedules
    ADD CONSTRAINT schedules_idlocation_fkey FOREIGN KEY (idlocation) REFERENCES public.location(idlocation);


--
-- TOC entry 3270 (class 2606 OID 24676)
-- Name: schedules schedules_nrc_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.schedules
    ADD CONSTRAINT schedules_nrc_fkey FOREIGN KEY (nrc) REFERENCES public.course(nrc);


--
-- TOC entry 3262 (class 2606 OID 24612)
-- Name: students students_iddept_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_iddept_fkey FOREIGN KEY (iddept) REFERENCES public.departments(iddept);


--
-- TOC entry 3260 (class 2606 OID 24592)
-- Name: subject subject_iddept_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.subject
    ADD CONSTRAINT subject_iddept_fkey FOREIGN KEY (iddept) REFERENCES public.departments(iddept);


--
-- TOC entry 3271 (class 2606 OID 24696)
-- Name: task task_idstudent_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.task
    ADD CONSTRAINT task_idstudent_fkey FOREIGN KEY (idstudent) REFERENCES public.students(idstudent);


--
-- TOC entry 3272 (class 2606 OID 24691)
-- Name: task task_nrc_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.task
    ADD CONSTRAINT task_nrc_fkey FOREIGN KEY (nrc) REFERENCES public.course(nrc);


-- Completed on 2025-04-13 20:53:19

--
-- PostgreSQL database dump complete
--

