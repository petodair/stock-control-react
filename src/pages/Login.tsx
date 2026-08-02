import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import logoImg from ".././assets/images/petercode-logo.png";
import logoTextImg from ".././assets/images/petercode-text.png";

function Login() {
  return (
    <div className="min-h-screen bg-slate-950 flex md:items-center md:justify-center">
      <Card className="w-full md:max-w-sm bg-slate-950 md:bg-slate-950 text-white flex ">
        <CardHeader className="text-[#165b79]">
          <CardTitle className="text-center flex flex-col items-center">
            <img src={logoImg} className="w-16" />
            <img src={logoTextImg} />
            Login
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <FieldGroup>
            <Field>
              <FieldLabel className="text-[#165b79]" htmlFor="email">
                E-mail
              </FieldLabel>
              <Input
                className="border-[#092c3a]"
                id="email"
                type="text"
                placeholder="Insira seu e-mail"
              />
            </Field>
            <Field>
              <FieldLabel className="text-[#165b79]" htmlFor="password">
                Senha
              </FieldLabel>
              <Input
                className="border-[#092c3a]"
                id="password"
                type="password"
                placeholder="Insira sua senha"
              />
            </Field>
            <Field>
              <Button className="bg-[#092c3a] hover:bg-[#04171f] hover:cursor-pointer">
                Confirmar
              </Button>
            </Field>
          </FieldGroup>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
