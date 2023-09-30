import Image from "next/image"
import React from "react"
import Link from "next/link"

export const CallToActions = () => {
    return (
        <div id="call-to-action" className="relative h-[600px] w-full mx-auto">
            <Image
                src="/call_to_actions.jpg"
                className=" object-cover md:object-fill"
                fill
                alt="Image de font représentant un ordinateur avec une page internet ouverte"
            />
            <div className="absolute z-50 w-full bg-black/60 h-full flex flex-col justify-evenly items-center ">
                <h3 className="text-white px-8 hidden md:block">
                    Vous avez besoin d&apos;accroitre votre présence en ligne ?
                </h3>
                <h3 className="text-white px-8 block md:hidden">
                    Besoin d&apos;une présence en ligne percutante ?
                </h3>
                <p className="text-lg px-6 text-center font-semibold text-white">
                    Discutons de votre projet dès maintenant.
                </p>
                <Link
                    href="mailto:j-b.vrain@outlook.fr?subject=NSWeb:%20Demande%20de%20renseignements"
                    className="text-black !border-white bg-white text-xl uppercase font-semibold hover:bg-white/80 transition-all py-3 px-8 rounded-lg"
                >
                    Prendre contact
                </Link>
            </div>
        </div>
    )
}
