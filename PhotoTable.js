var PhotoTable = (props) =>{
  return (
  	<table>
  	  <tbody>
  	    {props.photos.map((photo) => <PhotoTableRow photo={photo}/>)}
  	  </tbody>
  	</table>
  );
}

PhotoTable.propTypes = {
  photos: React.propTypes.array.isRequired
};

window.PhotoTable = PhotoTable;