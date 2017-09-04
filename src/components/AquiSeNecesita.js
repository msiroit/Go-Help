import React, {Component} from 'react'
import firebaseService from '../services/Firebase'
import gMap from '../img/g-map.png'
import AyudaForm from './AyudaForm'

class AquiSeNecesita extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: false,
      receivers: [],
      showForm: false
    }

    this.watchPosition();
  }

  handleMapClick() {
    this.setState({showForm: true})
  }

  watchPosition() {
    let options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    navigator.geolocation.watchPosition(this.updatePosition.bind(this), this.logPositionError, options);
  }

  updatePosition(position) {
    console.log('Current Position:');
    console.log(position);
    this.setState({position: position});
  }

  logPositionError(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  componentWillMount(){
    /* Create reference to messages in Firebase Database */
    let receiversRef = firebaseService.database().ref('receivers').orderByKey().limitToLast(100);
    receiversRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let receiver = { text: snapshot.val(), id: snapshot.key };
      this.setState((prevState) => {
          return {receivers: prevState.receivers.concat(receiver)}
        }
      );
    })
  }

  handleSubmit(e) {
    const form = e.target.parentElement;
    const inputs = form.querySelectorAll('input:checked');
    let output = inputs.forEach(input => ({
      "name": input.name,
      "value": input.value
    }));

    const receiver = {
      location: this.state.position,
      timestamp: this.state.position.timestamp
    };

    console.warn(receiver);

    firebaseService.database().ref('receivers').push(receiver);

    this.setState({showForm: false});

  }

  render() {

    let markers = [];

    return (
      <div>
        <h1>Aqui Se Necesita - Go Help!</h1>

        <img
          onClick={this.handleMapClick.bind(this)}
          src={gMap} />

        {(this.state.showForm)
          ? <AyudaForm handleSubmit={this.handleSubmit.bind(this) }/>
          :''
        }

      </div>
    )
  }

}

export default AquiSeNecesita