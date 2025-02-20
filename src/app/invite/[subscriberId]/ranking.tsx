import Image from "next/image";
import gold from "../../../assets/Medal-gold.svg";
import silver from "../../../assets/Medal-silver.svg";
import cooper from "../../../assets/Medal-cooper.svg";
import { getRanking } from "@/http/api";
 
export async function Ranking() {

  const {ranking} = await getRanking()

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-xl text-gray-200 font-heading font-semibold leading-none">
        Ranking de indicaçoes
      </h2>

      <div className="space-y-4">
       
        {ranking.map((item, index) => {
          const rankingPosition = index + 1
          return (
            <div
              key={item.id}
              className=" relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justfy-center gap-3"
            >
              <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">{rankingPosition}º</span> |{" "}
                {item.name}
              </span>
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                {item.score}
              </span>
              {rankingPosition === 1 && (
                <Image
                  src={gold}
                  alt="medalha de ouro"
                  className="absolute top-0 right-8"
                />
              )}
              {rankingPosition === 2 && (
                <Image
                  src={silver}
                  alt="medalha de prata"
                  className="absolute top-0 right-8"
                />
              )}
              {rankingPosition === 3 && (
                <Image
                  src={cooper}
                  alt="medalha de bronze"
                  className="absolute top-0 right-8"
                />
              )}
            </div>
          );
        })}

      </div>
    </div>
  );
}
