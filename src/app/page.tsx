import React, { ReactNode } from "react";
import { Button } from "@nextui-org/button";
import { Icon } from "@iconify/react";
import { Tooltip } from "@nextui-org/tooltip";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import DotPattern from "@/components/ui/dot-pattern";
import GradualSpacing from "@/components/ui/gradual-spacing";
import { GradientButton } from "@/components/ui/GradientButton";

interface Feature {
  icon?: string;
  label: string;
  text: ReactNode;
  comingSoon?: boolean;
  tooltip?: string;
}

interface FeatureItemProps extends Feature {}

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center max-w-6xl mx-auto px-4 md:px-6 h-[90vh]">
        <div className="max-w-4xl md:mr-80">
          <GradualSpacing
            className="hidden md:block text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
            text="La App de Windows para ver anime en Español"
          />
          <h1 className="md:hidden text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            La App de Windows para ver anime en Español
          </h1>
          <div className="max-w-3xl text-lg sm:text-xl mb-6">
            <p>
              Únete a nuestra{" "}
              <span className="font-bold text-secondary-300">beta cerrada</span>{" "}
              y ayúdanos a mejorar la app con tu feedback.
            </p>
            <p>
              Tendrás acceso exclusivo a la app y serás parte de nuestra
              comunidad en Discord, donde podrás compartir tus ideas y
              sugerencias.
            </p>
          </div>
          <ul className="text-left text-base sm:text-lg mb-6 sm:mb-8 inline-block">
            {features.map((feature, index) => (
              <FeatureItem key={index} {...feature} />
            ))}
          </ul>
          <div className="mt-2">
            <div className="flex flex-col sm:flex-row gap-4">
              <GradientButton
                size="lg"
                target="_blank"
                href={siteConfig.links.discord}
                as={Link}
                endContent={<Icon icon="mdi:discord" className="text-2xl" />}
              >
                Únete a la Beta Cerrada en Discord
              </GradientButton>
            </div>
          </div>
        </div>
        <DotPattern className="[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] color-primary-400" />
      </div>
    </>
  );
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  label,
  text,
  comingSoon = false,
  tooltip = "",
}) => (
  <li className="mb-2 flex items-center">
    {icon && (
      <Button
        isIconOnly
        color="primary"
        variant="faded"
        aria-label={label}
        className="rounded-full mr-2 min-w-8 w-8 min-h-8 h-8"
      >
        <Icon icon={icon} className="text-xl" />
      </Button>
    )}
    {text}
    {comingSoon && (
      <span className="text-secondary-300 font-semibold ml-2">
        (próximamente)
      </span>
    )}
    {tooltip && (
      <Tooltip
        content={
          <div className="px-1 py-2 max-w-sm">
            <div className="text-small font-bold">{tooltip}</div>
          </div>
        }
      >
        <Button
          isIconOnly
          color="primary"
          variant="faded"
          aria-label="Más información"
          className="rounded-full ml-2 min-w-8 w-8 min-h-8 h-8"
        >
          <Icon icon="mdi:question-mark" />
        </Button>
      </Tooltip>
    )}
  </li>
);

const features: Feature[] = [
  {
    icon: "mdi:cash-off",
    label: "Gratis",
    text: (
      <p>
        Completamente <u>gratis</u>
      </p>
    ),
  },
  {
    icon: "mdi:block-helper",
    label: "Sin publicidad",
    text: (
      <p>
        <u>Sin publicidad</u> molesta
      </p>
    ),
  },
  {
    icon: "mdi:high-definition",
    label: "Calidad HD",
    text: (
      <p>
        Calidad en <u>1080p</u>
      </p>
    ),
  },
  {
    icon: "mdi:play-circle",
    label: "Seguir viendo automático",
    text: <p>Seguir viendo automático</p>,
    comingSoon: true,
    tooltip:
      "Seguir viendo automático: Descarga y notifica nuevos episodios semanales. Continúa tu anime sin interrupciones, al estilo de Netflix.",
  },
  {
    label: "Sugerencias",
    text: <>Te gustaría ver algo en especial?</>,
    tooltip:
      "Con tu feedback podrás sugerir nuevas funcionalidades para la app.",
  },
];
