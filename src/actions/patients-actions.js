import api from '../lib/api';

export const GET_PATIENTS = () => dispatch => {
  dispatch(GET_PATIENTS_REQUEST());
  return api
    .get('patients')
    .then(
      patients => dispatch(GET_PATIENTS_SUCCESS(patients)),
      () => dispatch(GET_PATIENTS_FAILURE())
    );
};

export const GET_PATIENTS_REQUEST = () => ({
  type: 'GET_PATIENTS_REQUEST',
});

export const GET_PATIENTS_SUCCESS = patients => ({
  type: 'GET_PATIENTS_SUCCESS',
  patients,
});

export const GET_PATIENTS_FAILURE = () => ({
  type: 'GET_PATIENTS_FAILURE',
});

export const SELECT_PATIENT = patientId => ({
  type: 'SELECT_PATIENT',
  patientId,
});

export const PatientsActions = {
  GET_PATIENTS,
  SELECT_PATIENT,
};
