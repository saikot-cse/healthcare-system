import React, { useEffect } from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import { useTokens } from "../../Hooks/useTokens";
import { Loading } from "../Shared/Loading";
export const Login = () => {
  
  
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();
  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    toast("Login Successfull")
  };
  const [token] = useTokens(user || googleUser);
  let signInError;
  if (googleError || error || updateError ) {
    signInError = <p className="text-red-600">{error?.message || googleError?.message || updateError?.message }</p>;
  }
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, navigate, from]);
  if (googleLoading || loading || updating) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card mx-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center font-bold text-3xl">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: "Please enter valid email",
                  },
                })}
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.email?.type === "required" && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                {errors.email?.type === "pattern" && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Password must be minimum 6 characters",
                  },
                })}
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.password?.type === "required" && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                {errors.password?.type === "minLength" && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
              </label>
            </div>
            <button  className="text-primary">
              Forgot Password?
            </button>
            {signInError}
            <input className="btn text-white w-full max-w-xs mt-3" type="submit" value="Login" />
          </form>
          <p className="text-sm text-center">
            New to Doctor's portal?{" "}
            <Link to="/signup" className="text-primary font-bold">
              Create an account
            </Link>
          </p>
          <div className="divider">OR</div>
          <button onClick={() => signInWithGoogle()} className="btn btn-outline">
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};
