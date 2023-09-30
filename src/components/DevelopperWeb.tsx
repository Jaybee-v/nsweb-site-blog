import Image from "next/image"
import React from "react"

export const DevelopperWeb = () => {
    return (
        <div
            id="presentation"
            className="max-w-[1440px] mx-auto flex flex-col-reverse md:flex-row items-center bg-white/50 py-8 lg:px-10 my-4 rounded-s-3xl"
        >
            <h1 className="px-8 lg:px-32 text-md lg:text-2xl text-gray-700">
                <span className="ms-10">De </span>moniteur d&apos;équitation à
                <strong className="text-xl lg:text-3xl text-black">
                    {" "}
                    développeur web
                </strong>
                , ma transition vers le monde du{" "}
                <strong className="text-xl lg:text-3xl text-black">
                    code{" "}
                </strong>{" "}
                et du{" "}
                <strong className="text-xl lg:text-3xl text-black">web </strong>
                traduit ma passion pour les défis.
                <br />
                <span className="ms-10">Avec</span> une{" "}
                <strong className="text-xl lg:text-3xl text-black">
                    détermination inébranlable
                </strong>
                ,{" "}
                <strong className="text-xl lg:text-3xl text-black">
                    j&apos;ai acquis les compétences nécessaires pour créer des
                    sites web et des applications mobiles
                </strong>
                .
                <br />
                <span className="ms-10">Aujourd&apos;hui</span>, je mets cette
                passion au service de la création numérique.{" "}
                <strong className="text-xl lg:text-3xl text-black">
                    Je suis là pour vous aider à concrétiser et améliorer votre
                    présence en ligne.
                </strong>
            </h1>

            <Image
                src="/NextStepWeb.jpg"
                width={400}
                height={400}
                alt="Moi"
                className="rounded-s-3xl hidden xl:block"
            />
            <Image
                src="/NextStepWeb.jpg"
                width={300}
                height={300}
                alt="Moi"
                className="rounded-s-3xl xl:hidden"
            />
        </div>
    )
}
