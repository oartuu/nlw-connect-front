import Image from "next/image";

import Logo from '../../assets/Logo.svg'
import gold from '../../assets/Medal-gold.svg'
import silver from '../../assets/Medal-silver.svg'
import cooper from '../../assets/Medal-cooper.svg'

import { InputField, InputIcon, InputRoot } from "@/components/Input";
import { BadgeCheck, Copy, Link, Medal, MousePointerClick } from "lucide-react";
import { IconButton } from "@/components/IconButton";



export default function InvitePage() {
  return (
    <div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
      <div className="flex flex-col gap-10 w-full max-w-[500px]">
        <Image src={Logo} alt="devstage logo" width={108.5} height={30} />

        <div className="space-y-2">
          <h1 className="text-4xl font-heading font-semibold leading-none">
            Inscrição confirmada
          </h1>
          <p className="text-gray-300">
            Para entrar no evento, acesse o link enviado para seu e-mail.
          </p>
        </div>
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-xl text-gray-200 font-heading font-semibold leading-none">
              Indique e ganhe
            </h2>
            <p className="text-gray-300 ">
              Convide mais pessoas para o evento e concorra a prêmios
              exclusivos! É só compartilhar o link abaixo e acompanhar as
              inscrições:
            </p>
          </div>

          <InputRoot>
            <InputIcon>
              <Link />
            </InputIcon>
            <InputField
              readOnly
              defaultValue={"htttp://localhost:3000/invite/084298502958720"}
            />

            <IconButton className="-mr-2">
              <Copy className="size-5" />
            </IconButton>
          </InputRoot>

          <div className="grid gap-3 md:grid-cols-3 ">
            <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justfy-center gap-1 rounded-xl">
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                1042
              </span>
              <span className="text-sm text-gray-300 text-center leading-none">
                Acessos ao link
              </span>
              <MousePointerClick className="size-5 text-purple absolute top-3 left-3 " />
            </div>
            <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justfy-center gap-1 rounded-xl">
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                1042
              </span>
              <span className="text-sm text-gray-300 text-center leading-none">
                Inscrições feitas
              </span>
              <BadgeCheck className="size-5 text-purple absolute top-3 left-3 " />
            </div>
            <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justfy-center gap-1 rounded-xl">
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                3º
              </span>
              <span className="text-sm text-gray-300 text-center leading-none">
                Posição no ranking
              </span>
              <Medal className="size-5 text-purple absolute top-3 left-3 " />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[440px] space-y-5">
        <h2 className="text-xl text-gray-200 font-heading font-semibold leading-none">
          Ranking de indicaçoes
        </h2>
        <div className="space-y-4">
          <div className=" relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justfy-center gap-3">
            <span className="text-sm text-gray-300 leading-none">
              <span className="font-semibold">1º</span> | Arthur
            </span>
            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
              1030
            </span>
            <Image
              src={gold}
              alt="medalha de ouro"
              
              className="absolute top-0 right-8"
            />
          </div>
          <div className=" relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justfy-center gap-3">
            <span className="text-sm text-gray-300 leading-none">
              <span className="font-semibold">1º</span> | Arthur
            </span>
            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
              1030
            </span>
            <Image
              src={silver}
              alt="medalha de ouro"
              
              className="absolute top-0 right-8"
            />
          </div>
          <div className=" relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justfy-center gap-3">
            <span className="text-sm text-gray-300 leading-none">
              <span className="font-semibold">1º</span> | Arthur
            </span>
            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
              1030
            </span>
            <Image
              src={cooper}
              alt="medalha de ouro"
            
              className="absolute top-0 right-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
}


