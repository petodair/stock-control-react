import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import logoImg from ".././assets/images/petercode-logo.png";
import logoTextImg from ".././assets/images/petercode-text.png";

export default function Signin() {
  return (
    <div className="min-h-screen bg-slate-950 flex md:items-center md:justify-center">
      <Card className="w-full md:max-w-md bg-slate-950 md:bg-slate-950 text-white flex ">
        <CardHeader className="text-[#165b79]">
          <CardTitle className="text-center flex flex-col items-center">
            <img src={logoImg} className="w-16" />
            <img src={logoTextImg} />
            Cadastro
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <FieldGroup className="md:grid md:grid-cols-2">
            <Field>
              <FieldLabel className="text-[#165b79]" htmlFor="email">
                Nome
              </FieldLabel>
              <Input
                className="border-[#092c3a]"
                id="firstName"
                type="text"
                placeholder="Insira seu nome"
              />
            </Field>
            <Field>
              <FieldLabel className="text-[#165b79]" htmlFor="email">
                Sobrenome
              </FieldLabel>
              <Input
                className="border-[#092c3a]"
                id="lastName"
                type="text"
                placeholder="Insira seu sobrenome"
              />
            </Field>
          </FieldGroup>
          <br />
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
              <FieldLabel className="text-[#165b79]" htmlFor="password">
                Repita a senha
              </FieldLabel>
              <Input
                className="border-[#092c3a]"
                id="passwordCheck"
                type="password"
                placeholder="Insira novamente a senha"
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
