import { useParams } from "react-router-dom";
import { IsLoading } from '../isLoading/IsLoading'
import { Details } from '../DetailsProducts/Details'
import { useGetDetail } from "../../hooks/useGetDetail";

export const DetailsProducts = () => {

  const { id } = useParams();
  const {product,loading} = useGetDetail(id)

  return (
    <>
       {
        loading 
        ?
        <IsLoading/>
        :       
        <Details product={product}/>         
       }       
    </>
  );
};
