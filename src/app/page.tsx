import { Button } from "@/components/Button";
import { IconButton } from "@/components/IconButton";
import { InputField, InputIcon, InputRoot } from "@/components/Input";
import {ArrowRight, Copy, Mail} from "lucide-react";
export default function Home() {
  return (
    <main>
      <Button>
        Enviar
        <ArrowRight />
      </Button>

      <IconButton>
        <Copy />
      </IconButton>

      <InputRoot>
        <InputIcon>
          <Mail />
        </InputIcon>
        <InputField placeholder="Digite seu e-mail" type="email" />
      </InputRoot>

      <InputRoot error>
        <InputIcon>
          <Mail />
        </InputIcon>
        <InputField placeholder="Digite seu e-mail" type="email" />
      </InputRoot>
    </main>
  );
}
