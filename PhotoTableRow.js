class PhotoTableRow extends React.Component{
  constructor(props){
  	super(props);
  	this.state = {
  	  showPhoto: false
  	}
  }

  render(){
  	return(
  	  <tr onClick={() => this.setState({showPhoto: !this.state.showPhoto})}>
  	    <td>{this.props.photo.name}</td>
  	    <td>

  	    </td>
  	    {this.state.showPhoto ? <td> <img src={this.props.photo.url} /> </td> : null }
  	  </tr>
  	);
  }
}

window.PhotoTableRow = PhotoTableRow;