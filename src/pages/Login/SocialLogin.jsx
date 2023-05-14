import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext)
    const hangleGoogle = () => {
        signInWithGoogle()
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div className="text-center">
            <div className="divider">OR</div>
            <button onClick={hangleGoogle} className="btn btn-circle btn-outline">G</button>

        </div>
    );
};

export default SocialLogin;