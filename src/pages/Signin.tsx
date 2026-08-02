import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup } from "@/components/ui/field";
import logoImg from ".././assets/images/petercode-logo.png";
import logoTextImg from ".././assets/images/petercode-text.png";
import MyInput from "../components/my/MyInput";
import MyCard from "../components/my/MyCard";

export default function Signin() {
  return (
    <MyCard>
      <CardHeader>
        <CardTitle className="text-center flex flex-col items-center">
          <img src={logoImg} className="w-16 brightness-75" />
          <img src={logoTextImg} />
          Cadastro
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <FieldGroup className="md:grid md:grid-cols-2">
          <MyInput
            id="firstName"
            label="Nome"
            type="text"
            placeholder="Insira seu nome"
          />
          <MyInput
            id="lastName"
            label="Sobrenome"
            type="text"
            placeholder="Insira seu sobrenome"
          />
        </FieldGroup>
        <br />
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
          <MyInput
            id="passwordCheck"
            label="Confrime a senha"
            type="password"
            placeholder="Confirme sua senha"
          />
          <Field>
            <Button className="hover:cursor-pointer">Confirmar</Button>
          </Field>
        </FieldGroup>
      </CardContent>
    </MyCard>
  );
}
