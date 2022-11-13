
export const InfoCard = ({img,cardTitle,cardDesc,bgClass}) => {
  return (
    <div className={`card lg:card-side shadow-xl ${bgClass}`}>
      <figure className="pl-5">
        <img className="mt-8 mb-8" src={img} alt="Album" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{cardTitle}</h2>
        <p>{cardDesc}</p>
      </div>
    </div>
  );
};
