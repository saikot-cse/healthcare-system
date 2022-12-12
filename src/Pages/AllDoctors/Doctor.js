export const Doctor = ({ doctor }) => {
  return (
  <div className="card w-96 h-full bg-base-100 shadow-xl ">
      <figure>
        <img className="object-fill w-full h-[300px]" src={doctor?.img} alt="doctor" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Name: {doctor?.name}
        </h2>
        <div className="card-actions justify-start overflow-hidden">
          <div className="badge badge-outline"><span className="font-bold">Specialty:</span> {doctor?.specialty}</div>
        </div>
        <p className="overflow-y-scroll h-24"><span className="font-bold">Designation:</span> {doctor?.designation}</p>
        
      </div>
    </div>
  );
};
