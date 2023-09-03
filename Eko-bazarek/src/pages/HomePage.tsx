import { toast } from "react-toastify";
import { Content } from "../components";

export const HomePage = () => {
    const notify = () => toast("Wow so easy!", {type:"error"});
    return <Content title ="Home | Eko Bazarek">
        <button onClick={notify}>Notify!</button>
        Home page
        </Content>;
};