import { Map } from 'immutable';

const initialState = Map({
  patients: [],
  selectedPatient: null,
});

export default function patients(state = initialState, action = {}) {
  const { type, ...payload } = action;

  switch (type) {
    case 'GET_PATIENTS_SUCCESS':
      return state.set('patients', payload.patients);

    case 'SELECT_PATIENT':
      return state.set(
        'selectedPatient',
        state
          .get('patients')
          .find(({ patient_id }) => patient_id === payload.patientId)
      );

    default:
      return state;
  }
}
