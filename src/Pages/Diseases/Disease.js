export const Disease = ({ disease }) => {
  return (
    <>
      <div className="card w-96 h-full bg-base-100 shadow-xl ">
        <figure>
          <img className="object-fill w-full" src={disease?.img} alt="disease" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Disease Name: {disease?.name}</h2>
          <div className="card-actions justify-start overflow-hidden">
            <div className="badge badge-outline">{disease?.symptoms}</div>
          </div>
          <p className="overflow-y-scroll h-24">{disease?.details}</p>
        </div>
      </div>
    </>
  );
};
