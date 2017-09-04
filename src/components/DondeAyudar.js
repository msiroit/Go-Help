import React, {Component} from 'react'
import firebaseService from '../services/Firebase'

class DondeAyudar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      receivers: []
    }
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

  render() {
    return (
      <div>
        <h1 className="paginaActual"><strong>Donde Ayudar - Go Help!</strong></h1>
      </div>
    )
  }
}

export default DondeAyudar
