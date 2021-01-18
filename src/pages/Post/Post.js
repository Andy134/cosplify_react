import { useParams } from "react-router-dom";

function Post() {
    let { id } = useParams();
    return (
        <h1>Post: {id}</h1>
    )
}

export default Post