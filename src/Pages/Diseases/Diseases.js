import { useEffect, useState } from "react";
import { Disease } from "./Disease";
export const Diseases = () => {

  const [diseases, setDiseases] = useState()
  useEffect(()=>{
    fetch('http://localhost:5000/diseases', {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                  }
    )
    .then(res=>res.json())
    .then(data=>setDiseases(data))
  },[])
  return (
    <div>
      <h3 className="text-primary text-center text-xl font-bold">Diseases</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {
          diseases?.map(disease=> <Disease key={disease?._id} disease={disease}/>)
        }
      </div>
    </div>
  );
};
