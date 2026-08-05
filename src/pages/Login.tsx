import { buttonVariants } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup } from "@/components/ui/field";
import logoImg from ".././assets/images/petercode-logo.png";
import logoTextImg from ".././assets/images/petercode-text.png";
import MyInput from "../components/my/MyInput";
import MyCard from "../components/my/MyCard";
import { Link } from "react-router";

function Login() {
  return (
    <MyCard>
      <CardHeader>
        <CardTitle className="text-center flex flex-col items-center">
          <img src={logoImg} className="w-16 md:brightness-50" />
          <img src={logoTextImg} className="md:brightness-50" />
          Login
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <FieldGroup>
          <MyInput
            id="email"
            label="E-mail"
            type="text"
            placeholder="Insira seu e-mail"
          />
          <MyInput
            id="password"
            label="Senha"
            type="password"
            placeholder="Insira sua senha"
          />
          <Field>
            <Link
              className={buttonVariants({
                variant: "default",
                size: "default",
              })}
              to="/"
            >
              Confirmar
            </Link>
          </Field>
        </FieldGroup>
      </CardContent>
    </MyCard>
  );
}

export default Login;
