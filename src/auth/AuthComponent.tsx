import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthComponent() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/editor");
    }, 1000);
  }, []);
  return (
    <div className="w-full h-full bg-bg-primary flex flex-col items-center justify-center">
      Login ...
    </div>
  );
}
