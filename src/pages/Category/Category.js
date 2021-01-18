import { useParams } from "react-router-dom";

function Category() {
    let { id } = useParams();
    return(
        <h1>Category: {id}</h1>
    )
}

export default Category