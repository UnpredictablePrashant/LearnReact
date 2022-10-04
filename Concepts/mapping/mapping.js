import Welcome from '../props/propsFunc';

function Map() {
    const data = [
        { name: "Prashant" },
        { name: "Shashank" },
        { name: "Nitin" },
      ];
  return (
    <div>
        {data.map(user => (
            <Welcome name={user.name}></Welcome>
        ))}
     
     
    </div>
  );
}

export default Map;
