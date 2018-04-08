import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import { mapActionsToPropTypes } from '../../../lib/util';
import { PatientsActions } from '../../../actions';

class Patients extends Component {
  static propTypes = {
    actions: mapActionsToPropTypes(PatientsActions).isRequired,
  };

  componentDidMount() {
    if (this.props.patients.get('patients').length === 0) {
      this.props.actions.GET_PATIENTS();
    }
  }

  render() {
    const { patients } = this.props;
    console.log(`patients: ${patients}`);

    return (
      <ul>
        {patients.get('patients').map(patient => (
          <li key={patient.id}>
            <span className="Patient-name">{patient.name}</span> |{' '}
            <span className="Patient-company">{patient.company}</span>
          </li>
        ))}
      </ul>
    );
  }
}

export default connect(
  state => ({
    patients: state.get('patients'),
    selectedPatient: state.get('selectedPatient'),
  }),
  dispatch => ({
    actions: bindActionCreators(PatientsActions, dispatch),
  })
)(Patients);
