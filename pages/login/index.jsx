import Link from "next/link";
import TransitionEffect from "../../components/TransitionEffect";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { UserAuth } from "../../context/AuthContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const { user, googleSignIn, emailSignIn } = UserAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmailSigin = async () => {
    try {
      await emailSignIn(email, password);
      console.log("successfully logged in");
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-full p-5">
      <TransitionEffect />
      <div className="container mx-auto">
        <div className="flex items-center justify-center w-full">
          <h2 className="font-loginContent py-10 text-primary">LOGIN</h2>
        </div>

        <div className="flex flex-col items-center justify-center bg-background shadow-xl shadow-primary rounded-lg max-w-[1920px] p-5 lg:py-[97px] lg:px-[42px]">
          <div className="flex flex-col items-center justify-center gap-5">
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="E-mail"
              className="p-3 border border-primary bg-transparent rounded-md outline-none lg:w-[580px]"
            />
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="Enter your password"
              className="p-3 border border-primary bg-transparent rounded-md outline-none lg:w-[580px]"
            />
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:w-[580px] justify-between gap-3 lg:gap-0 mt-5 lg:mt-[39px]">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p className="text-sm">Remember Me</p>
            </div>
            <div>
              <p className="text-sm">Forgot Password?</p>
            </div>
          </div>

          <div className="flex items-center justify-center mt-5 lg:mt-[44px]">
            <button
              onClick={handleEmailSigin}
              className="px-[100px] py-[10px] lg:py-[25px] lg:px-[249px] bg-primary rounded-md text-background text-[12px] lg:text-[24px]"
            >
              LOGIN
            </button>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-5 justify-center mt-5 lg:mt-[44px]">
            <div className="flex items-center gap-3 px-10 py-2 w-[200px] lg:w-[274px] border rounded-lg">
              <FaFacebook size={30} />
              <p className="text-md">Facebook</p>
            </div>

            <div
              onClick={handleGoogleSignIn}
              className="flex items-center gap-3 px-10 py-2 w-[200px] lg:w-[274px] border rounded-lg"
            >
              <FcGoogle size={30} />
              <p className="text-md">Google</p>
            </div>
          </div>

          <div className="flex items-center justify-center mt-5">
            <p className="text-lg">
              Don&apos;t have an account?{" "}
              <Link href="/register">
                <span className="text-secondary cursor-pointer">
                  Create One
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
